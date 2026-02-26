import { Intent, SessionState } from '@/lib/types';

export function orchestrateIntent(message: string, state: SessionState): { intent: Intent; params: Record<string, string> } {
  const text = message.toLowerCase();
  if (text.includes('hint') || text.includes('stuck')) return { intent: 'HINT_REQUEST', params: { level: String(state.hintCount + 1) } };
  if (text.includes('review') || text.includes('bug')) return { intent: 'CODE_REVIEW', params: {} };
  if (text.includes('interview')) return { intent: 'RUN_INTERVIEW', params: { mode: 'Technical Round' } };
  if (text.includes('complexity')) return { intent: 'COMPLEXITY_ANALYSIS', params: {} };
  if (text.includes('explain')) return { intent: 'EXPLAIN_CONCEPT', params: {} };
  if (text.includes('solution')) return { intent: 'SOLUTION_REVEAL', params: {} };
  if (text.includes('problem') || text.includes('question')) return { intent: 'START_PROBLEM', params: { difficulty: 'Medium' } };
  return { intent: 'GENERAL_CHAT', params: {} };
}
