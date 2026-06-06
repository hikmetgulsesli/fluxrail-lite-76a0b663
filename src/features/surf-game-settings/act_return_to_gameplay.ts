import type { GameAction } from '../fluxrail-lite/fluxrail-lite.store';

export function actReturnToGameplay(): GameAction {
  return { type: 'SET_SCREEN', screen: 'gameplay' };
}
