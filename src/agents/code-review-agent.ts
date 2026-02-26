export function reviewCode(code: string): string {
  const hasLoop = code.includes('for') || code.includes('while');
  if (!hasLoop) return 'Good start. Add iteration logic to process input and then validate boundary cases.';
  if (code.includes('return null')) return 'Your approach framework is reasonable, but returning null may fail tests. Check expected output contract.';
  return 'Nice progress. Validate off-by-one boundaries and confirm your complexity aligns with constraints.';
}
