import type { Difficulty, GameState } from './fluxrail-lite.store';

const STORAGE_KEY = 'fluxrail-lite-prefs';

export interface PersistedData {
  difficulty: Difficulty;
  highScore: number;
}

export function readPersisted(): PersistedData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (
      parsed &&
      typeof parsed === 'object' &&
      'difficulty' in parsed &&
      'highScore' in parsed &&
      typeof (parsed as Record<string, unknown>).highScore === 'number'
    ) {
      return parsed as PersistedData;
    }
    return null;
  } catch {
    return null;
  }
}

export function writePersisted(data: PersistedData): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

export function clearPersisted(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

export function bootstrapFromStorage(): Pick<GameState, 'difficulty' | 'highScore' | 'storageStatus'> {
  const data = readPersisted();
  if (data === undefined) {
    // corrupted parse path handled below
  }
  if (data === null) {
    // Check if key exists but unreadable => corrupted
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        return { difficulty: 'normal', highScore: 0, storageStatus: 'corrupted' };
      }
    } catch {
      return { difficulty: 'normal', highScore: 0, storageStatus: 'unavailable' };
    }
    return { difficulty: 'normal', highScore: 0, storageStatus: 'ok' };
  }
  return { difficulty: data.difficulty, highScore: data.highScore, storageStatus: 'ok' };
}
