import type { GameState } from '../features/fluxrail-lite/fluxrail-lite.store';

export const fixtureGameState: GameState = {
  screen: 'gameplay',
  score: 42,
  highScore: 120,
  lives: 2,
  energy: 75,
  paused: false,
  gameOver: false,
  level: 2,
  difficulty: 'normal',
  player: { lane: 1, position: 0 },
  obstacles: [
    { lane: 0, position: 800 },
    { lane: 2, position: 600 },
  ],
  shards: [
    { lane: 1, position: 400 },
  ],
  lastError: null,
  storageStatus: 'ok',
};

export const fixturePausedState: GameState = {
  ...fixtureGameState,
  paused: true,
};

export const fixtureGameOverState: GameState = {
  ...fixtureGameState,
  gameOver: true,
  lives: 0,
  energy: 0,
};

export const fixtureSettingsState: GameState = {
  ...fixtureGameState,
  screen: 'settings',
};
