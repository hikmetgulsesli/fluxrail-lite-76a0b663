import type { GameAction } from '../fluxrail-lite/fluxrail-lite.store';

export function actStartGame(): GameAction {
  return { type: 'INITIATE_SEQUENCE' };
}
