import type { GameState, GameAction } from '../features/fluxrail-lite/fluxrail-lite.store';

export interface TestBridge {
  state: GameState;
  actions: {
    bootstrap: (payload?: Partial<GameState>) => void;
    tick: (delta?: number) => void;
    moveLeft: () => void;
    moveRight: () => void;
    togglePause: () => void;
    restart: () => void;
    setScreen: (screen: GameState['screen']) => void;
    setDifficulty: (difficulty: GameState['difficulty']) => void;
    resetPreferences: () => void;
    savePreferences: (difficulty: GameState['difficulty']) => void;
    initiateSequence: () => void;
  };
}

export function createTestBridge(
  getState: () => GameState,
  dispatch: (action: GameAction) => void
): TestBridge {
  return {
    get state() {
      return getState();
    },
    actions: {
      bootstrap: (payload) => dispatch({ type: 'BOOTSTRAP', payload }),
      tick: (delta = 50) => dispatch({ type: 'TICK', delta }),
      moveLeft: () => dispatch({ type: 'MOVE_LEFT' }),
      moveRight: () => dispatch({ type: 'MOVE_RIGHT' }),
      togglePause: () => dispatch({ type: 'TOGGLE_PAUSE' }),
      restart: () => dispatch({ type: 'RESTART' }),
      setScreen: (screen) => dispatch({ type: 'SET_SCREEN', screen }),
      setDifficulty: (difficulty) => dispatch({ type: 'SET_DIFFICULTY', difficulty }),
      resetPreferences: () => dispatch({ type: 'RESET_PREFERENCES' }),
      savePreferences: (difficulty) => dispatch({ type: 'SAVE_PREFERENCES', difficulty }),
      initiateSequence: () => dispatch({ type: 'INITIATE_SEQUENCE' }),
    },
  };
}
