export type Intent =
  | 'START_PROBLEM'
  | 'HINT_REQUEST'
  | 'CODE_REVIEW'
  | 'EXPLAIN_CONCEPT'
  | 'RUN_INTERVIEW'
  | 'SOLUTION_REVEAL'
  | 'GENERAL_CHAT'
  | 'COMPLEXITY_ANALYSIS';

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  domain: 'dsa' | 'sql' | 'python' | 'ml' | 'system_design';
  description: string;
  constraints: string[];
}

export interface ScoreCard {
  communication: number;
  problem_solving: number;
  code_quality: number;
  optimization: number;
  overall_score: number;
  hire_decision: 'Hire' | 'No Hire';
  detailed_feedback: string;
}

export interface SessionState {
  mode: 'practice' | 'interview' | 'pair_programming';
  hintCount: number;
  code: string;
  activeProblem?: Problem;
}
