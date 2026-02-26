import { ScoreCard } from '@/lib/types';

export function buildInterviewScorecard(): ScoreCard {
  return {
    communication: 8,
    problem_solving: 7,
    code_quality: 7,
    optimization: 6,
    overall_score: 7,
    hire_decision: 'Hire',
    detailed_feedback: 'Strong communication and steady decomposition. Spend more time on complexity optimization in final passes.'
  };
}
