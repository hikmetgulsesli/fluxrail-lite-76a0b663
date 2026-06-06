import { useEffect, useReducer, useRef, useCallback } from 'react';
import {
  gameReducer,
  createInitialState,
  type GameState,
  type GameAction,
} from './features/fluxrail-lite/fluxrail-lite.store';
import { bootstrapFromStorage, writePersisted } from './features/fluxrail-lite/fluxrail-lite.repo';
import { createTestBridge } from './test/bridge';
import { GameplayFluxrailLite, GameSettingsFluxrailLite } from './screens';

const TICK_MS = 50;

function useGameRuntime(
  getState: () => GameState,
  dispatch: (action: GameAction) => void
) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      dispatch({ type: 'TICK', delta: TICK_MS });
    }, TICK_MS);
  }, [dispatch]);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  return { start, stop };
}

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () => {
    const stored = bootstrapFromStorage();
    return { ...createInitialState(), ...stored };
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const getState = useCallback(() => stateRef.current, []);

  useGameRuntime(getState, dispatch);

  // Persist preferences/highScore when they change
  useEffect(() => {
    writePersisted({ difficulty: state.difficulty, highScore: state.highScore });
  }, [state.difficulty, state.highScore]);

  // Expose window.app for smoke tests
  useEffect(() => {
    const bridge = createTestBridge(getState, dispatch);
    (window as unknown as Record<string, unknown>).app = bridge;
    (globalThis as unknown as Record<string, unknown>).app = bridge;
  }, [getState, dispatch]);

  const gameplayActions = {
    'initiate-sequence-1': () => dispatch({ type: 'INITIATE_SEQUENCE' }),
    'restart-2': () => dispatch({ type: 'RESTART' }),
    'settings-3': () => dispatch({ type: 'SET_SCREEN', screen: 'settings' }),
  };

  const settingsActions = {
    'reset-preferences-1': () => dispatch({ type: 'RESET_PREFERENCES' }),
    'return-to-gameplay-2': () => dispatch({ type: 'SET_SCREEN', screen: 'gameplay' }),
    'save-preferences-3': () => {
      // Settings screen has radio inputs for difficulty; we save current difficulty
      dispatch({ type: 'SAVE_PREFERENCES', difficulty: state.difficulty });
    },
  };

  const runtimeSnapshot = {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };

  return (
    <div
      data-setfarm-root="fluxrail-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden"
    >
      {state.screen === 'gameplay' && (
        <GameplayFluxrailLite actions={gameplayActions} runtime={runtimeSnapshot} />
      )}
      {state.screen === 'settings' && (
        <GameSettingsFluxrailLite actions={settingsActions} />
      )}
    </div>
  );
}
