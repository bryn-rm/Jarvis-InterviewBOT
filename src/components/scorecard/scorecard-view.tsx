import { ScoreCard } from '@/lib/types';

export function ScorecardView({ score }: { score: ScoreCard }) {
  return (
    <section className="panel p-4 space-y-3">
      <h2 className="text-xl text-cyan-300">Interview Scorecard</h2>
      <p className="text-4xl font-code text-amber-300">{score.overall_score}/10</p>
      <p className="text-sm">Hire decision: <span className="font-semibold">{score.hire_decision}</span></p>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        <li>Communication: {score.communication}</li>
        <li>Problem Solving: {score.problem_solving}</li>
        <li>Code Quality: {score.code_quality}</li>
        <li>Optimization: {score.optimization}</li>
      </ul>
      <p className="text-sm text-slate-300">{score.detailed_feedback}</p>
    </section>
  );
}
