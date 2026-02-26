import { ScorecardView } from '@/components/scorecard/scorecard-view';
import { buildInterviewScorecard } from '@/agents/interview-agent';

export default function ReviewPage() {
  const score = buildInterviewScorecard();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <ScorecardView score={score} />
    </main>
  );
}
