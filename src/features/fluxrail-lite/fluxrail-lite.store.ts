export type ScreenId = 'gameplay' | 'settings';

export type Difficulty = 'easy' | 'normal' | 'hard';

export interface GameEntity {
  lane: number;
  position: number;
}

export interface GameState {
  screen: ScreenId;
  score: number;
  highScore: number;
  lives: number;
  energy: number;
  paused: boolean;
  gameOver: boolean;
  level: number;
  difficulty: Difficulty;
  player: GameEntity;
  obstacles: GameEntity[];
  shards: GameEntity[];
  lastError: string | null;
  storageStatus: 'ok' | 'corrupted' | 'unavailable';
}

export const INITIAL_LIVES = 3;
export const INITIAL_ENERGY = 100;
export const MAX_LANES = 3;
export const PLAYFIELD_DEPTH = 1000;

export function createInitialState(): GameState {
  return {
    screen: 'gameplay',
    score: 0,
    highScore: 0,
    lives: INITIAL_LIVES,
    energy: INITIAL_ENERGY,
    paused: false,
    gameOver: false,
    level: 1,
    difficulty: 'normal',
    player: { lane: 1, position: 0 },
    obstacles: [],
    shards: [],
    lastError: null,
    storageStatus: 'ok',
  };
}

export type GameAction =
  | { type: 'BOOTSTRAP'; payload?: Partial<GameState> }
  | { type: 'TICK'; delta: number }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'RESTART' }
  | { type: 'SET_SCREEN'; screen: ScreenId }
  | { type: 'SET_DIFFICULTY'; difficulty: Difficulty }
  | { type: 'RESET_PREFERENCES' }
  | { type: 'SAVE_PREFERENCES'; difficulty: Difficulty }
  | { type: 'SET_HIGH_SCORE'; highScore: number }
  | { type: 'SET_STORAGE_STATUS'; status: GameState['storageStatus'] }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'INITIATE_SEQUENCE' };

function clampLane(lane: number): number {
  return Math.max(0, Math.min(MAX_LANES - 1, lane));
}

function spawnObstacles(state: GameState): GameEntity[] {
  const obstacles = state.obstacles.slice();
  const spawnRate = state.difficulty === 'easy' ? 0.015 : state.difficulty === 'hard' ? 0.04 : 0.025;
  if (Math.random() < spawnRate) {
    const lane = Math.floor(Math.random() * MAX_LANES);
    obstacles.push({ lane, position: PLAYFIELD_DEPTH });
  }
  return obstacles;
}

function spawnShards(state: GameState): GameEntity[] {
  const shards = state.shards.slice();
  if (Math.random() < 0.008) {
    const lane = Math.floor(Math.random() * MAX_LANES);
    shards.push({ lane, position: PLAYFIELD_DEPTH });
  }
  return shards;
}

function advanceEntities(entities: GameEntity[], speed: number): GameEntity[] {
  return entities
    .map((e) => ({ ...e, position: e.position - speed }))
    .filter((e) => e.position > -50);
}

function checkCollisions(player: GameEntity, entities: GameEntity[], threshold = 40): number[] {
  const hits: number[] = [];
  for (let i = 0; i < entities.length; i++) {
    const e = entities[i];
    if (
      e.lane === player.lane &&
      e.position >= player.position &&
      e.position - player.position < threshold
    ) {
      hits.push(i);
    }
  }
  return hits;
}

function tickSpeed(difficulty: Difficulty, level: number): number {
  const base = difficulty === 'easy' ? 6 : difficulty === 'hard' ? 12 : 8;
  return base + level * 0.5;
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'BOOTSTRAP': {
      return { ...createInitialState(), ...action.payload };
    }
    case 'TICK': {
      if (state.paused || state.gameOver) return state;
      const speed = tickSpeed(state.difficulty, state.level);
      let obstacles = spawnObstacles(state);
      let shards = spawnShards(state);
      obstacles = advanceEntities(obstacles, speed);
      shards = advanceEntities(shards, speed);

      const obstacleHits = checkCollisions(state.player, obstacles);
      let lives = state.lives;
      let energy = state.energy;
      let score = state.score;
      let gameOver: boolean = state.gameOver;
      let level = state.level;

      if (obstacleHits.length > 0) {
        lives -= 1;
        energy = Math.max(0, energy - 25);
        // Remove hit obstacles
        for (let i = obstacleHits.length - 1; i >= 0; i--) {
          obstacles.splice(obstacleHits[i], 1);
        }
        if (lives <= 0 || energy <= 0) {
          gameOver = true;
        }
      }

      const shardHits = checkCollisions(state.player, shards, 35);
      if (shardHits.length > 0) {
        score += shardHits.length * 10;
        energy = Math.min(INITIAL_ENERGY, energy + 5);
        for (let i = shardHits.length - 1; i >= 0; i--) {
          shards.splice(shardHits[i], 1);
        }
      }

      // Level up every 100 score
      const newLevel = Math.floor(score / 100) + 1;
      if (newLevel > level) {
        level = newLevel;
      }

      const highScore = Math.max(state.highScore, score);

      return {
        ...state,
        obstacles,
        shards,
        lives,
        energy,
        score,
        highScore,
        gameOver,
        level,
      };
    }
    case 'MOVE_LEFT': {
      if (state.paused || state.gameOver) return state;
      return { ...state, player: { ...state.player, lane: clampLane(state.player.lane - 1) } };
    }
    case 'MOVE_RIGHT': {
      if (state.paused || state.gameOver) return state;
      return { ...state, player: { ...state.player, lane: clampLane(state.player.lane + 1) } };
    }
    case 'TOGGLE_PAUSE': {
      if (state.gameOver) return state;
      return { ...state, paused: !state.paused };
    }
    case 'RESTART': {
      return {
        ...createInitialState(),
        highScore: state.highScore,
        difficulty: state.difficulty,
        screen: state.screen,
        storageStatus: state.storageStatus,
      };
    }
    case 'SET_SCREEN': {
      return { ...state, screen: action.screen };
    }
    case 'SET_DIFFICULTY': {
      return { ...state, difficulty: action.difficulty };
    }
    case 'RESET_PREFERENCES': {
      return {
        ...state,
        difficulty: 'normal',
        highScore: 0,
      };
    }
    case 'SAVE_PREFERENCES': {
      return { ...state, difficulty: action.difficulty };
    }
    case 'SET_HIGH_SCORE': {
      return { ...state, highScore: Math.max(state.highScore, action.highScore) };
    }
    case 'SET_STORAGE_STATUS': {
      return { ...state, storageStatus: action.status };
    }
    case 'SET_ERROR': {
      return { ...state, lastError: action.error };
    }
    case 'INITIATE_SEQUENCE': {
      if (state.gameOver) {
        return {
          ...createInitialState(),
          highScore: state.highScore,
          difficulty: state.difficulty,
          screen: 'gameplay',
          storageStatus: state.storageStatus,
          paused: false,
          gameOver: false,
        };
      }
      return { ...state, screen: 'gameplay', paused: false, gameOver: false };
    }
    default:
      return state;
  }
}
