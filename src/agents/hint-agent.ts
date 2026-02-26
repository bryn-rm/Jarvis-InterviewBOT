export function generateHint(level: number, problemTitle: string): string {
  if (level <= 1) return `What core pattern does "${problemTitle}" resemble, and how have you solved similar patterns before?`;
  if (level === 2) return `What data structure would let you track important state in constant time for "${problemTitle}"?`;
  return `Look at your edge cases first—what should your function return for empty input in "${problemTitle}"?`;
}
