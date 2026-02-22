/**
 * Performance/analytics consent storage.
 * Use only in client code (e.g. inside ConsentGate); localStorage is not available on the server.
 */

export const COGARC_PERFORMANCE_CONSENT = 'cogarc_performance_consent' as const;

export type ConsentStatus = 'granted' | 'denied';

/**
 * Reads the current consent status from localStorage.
 * Returns null when the key is missing or the value is invalid.
 */
export function getConsent(): ConsentStatus | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(COGARC_PERFORMANCE_CONSENT);
    if (raw === 'granted' || raw === 'denied') return raw;
    return null;
  } catch {
    return null;
  }
}

/**
 * Writes the consent status to localStorage.
 * Call only from client code.
 */
export function setConsent(status: ConsentStatus): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COGARC_PERFORMANCE_CONSENT, status);
  } catch {
    // ignore
  }
}
