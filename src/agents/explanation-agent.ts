export function explainPattern(pattern: string): string {
  return `Key insight: ${pattern} works by storing minimal state to avoid recomputation. Start from brute force, compress repeated work, and validate edge cases first.`;
}
