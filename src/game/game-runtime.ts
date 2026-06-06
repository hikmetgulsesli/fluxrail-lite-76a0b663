import { useEffect, useRef, useCallback } from 'react';
import type { GameState, GameAction } from '../features/fluxrail-lite/fluxrail-lite.store';

export interface GameRuntimeApi {
  start: () => void;
  stop: () => void;
  dispatch: (action: GameAction) => void;
}

const TICK_MS = 50;

export function createGameRuntime(
  getState: () => GameState,
  dispatch: (action: GameAction) => void
): GameRuntimeApi {
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const tick = () => {
    dispatch({ type: 'TICK', delta: TICK_MS });
  };

  const start = () => {
    if (intervalId !== null) return;
    intervalId = setInterval(tick, TICK_MS);
  };

  const stop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  return { start, stop, dispatch };
}

export function useGameRuntime(
  getState: () => GameState,
  dispatch: (action: GameAction) => void
): GameRuntimeApi {
  const apiRef = useRef<GameRuntimeApi | null>(null);

  if (!apiRef.current) {
    apiRef.current = createGameRuntime(getState, dispatch);
  }

  useEffect(() => {
    apiRef.current?.start();
    return () => {
      apiRef.current?.stop();
    };
  }, []);

  const dispatchWrapped = useCallback(
    (action: GameAction) => {
      apiRef.current?.dispatch(action);
    },
    []
  );

  return {
    start: () => apiRef.current?.start(),
    stop: () => apiRef.current?.stop(),
    dispatch: dispatchWrapped,
  };
}
