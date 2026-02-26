import { notFound } from 'next/navigation';
import { CodeEditor } from '@/components/editor/code-editor';
import { JarvisInterface } from '@/components/jarvis/jarvis-interface';
import { ProblemPanel } from '@/components/problem/problem-panel';
import { seedProblems } from '@/data/seed-problems';

export default function PracticeSolvePage({ params }: { params: { id: string } }) {
  const problem = seedProblems.find((item) => item.id === params.id);
  if (!problem) notFound();

  return (
    <main className="p-4 md:p-6 grid gap-4 lg:grid-cols-[2fr_3fr_1.5fr]">
      <ProblemPanel problem={problem} />
      <CodeEditor />
      <JarvisInterface />
    </main>
  );
}
