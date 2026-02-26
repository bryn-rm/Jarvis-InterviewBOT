import { Problem } from '@/lib/types';

export function ProblemPanel({ problem }: { problem: Problem }) {
  return (
    <section className="panel p-4 space-y-4">
      <header>
        <h2 className="text-2xl font-semibold text-cyan-300">{problem.title}</h2>
        <p className="text-sm text-slate-300">{problem.difficulty} • {problem.topics.join(', ')}</p>
      </header>
      <article className="space-y-2 text-sm text-slate-200">
        <p>{problem.description}</p>
        <h3 className="text-cyan-200 font-semibold">Constraints</h3>
        <ul className="list-disc ml-5">
          {problem.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}
        </ul>
      </article>
    </section>
  );
}
