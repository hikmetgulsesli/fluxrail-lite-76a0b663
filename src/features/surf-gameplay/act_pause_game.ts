import type { GameAction } from '../fluxrail-lite/fluxrail-lite.store';

export function actPauseGame(): GameAction {
  return { type: 'TOGGLE_PAUSE' };
}
