import type { GameAction, Difficulty } from '../fluxrail-lite/fluxrail-lite.store';

export type UiDifficulty = 'slow' | 'normal' | 'fast';

const uiToStoreMap: Record<UiDifficulty, Difficulty> = {
  slow: 'easy',
  normal: 'normal',
  fast: 'hard',
};

export function actSavePreferences(difficulty: Difficulty | UiDifficulty): GameAction {
  const mapped: Difficulty = uiToStoreMap[difficulty as UiDifficulty] ?? (difficulty as Difficulty);
  return { type: 'SAVE_PREFERENCES', difficulty: mapped };
}
