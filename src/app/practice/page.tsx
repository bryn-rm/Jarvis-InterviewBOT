import Link from 'next/link';
import { seedProblems } from '@/data/seed-problems';

export default function PracticePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl text-cyan-300">Practice Problem Browser</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {seedProblems.slice(0, 12).map((problem) => (
          <Link key={problem.id} href={`/practice/${problem.id}`} className="panel p-3 hover:bg-cyan-500/5">
            <p className="font-semibold">{problem.title}</p>
            <p className="text-xs text-slate-300">{problem.difficulty} • {problem.domain}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
