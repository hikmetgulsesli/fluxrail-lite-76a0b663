import type { GameAction } from '../fluxrail-lite/fluxrail-lite.store';

export function actRestartGame(): GameAction {
  return { type: 'RESTART' };
}
