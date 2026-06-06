import type { GameAction, Difficulty } from '../fluxrail-lite/fluxrail-lite.store';

export function actSavePreferences(difficulty: Difficulty): GameAction {
  return { type: 'SAVE_PREFERENCES', difficulty };
}
