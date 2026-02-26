import Link from 'next/link';
import { InterviewHUD } from '@/components/interview/interview-hud';
import { JarvisInterface } from '@/components/jarvis/jarvis-interface';

export default function InterviewPage({ params }: { params: { sessionId: string } }) {
  return (
    <main className="p-6 space-y-4">
      <InterviewHUD />
      <section className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <article className="panel p-4 min-h-[380px]">
          <h2 className="text-cyan-300">Session {params.sessionId}</h2>
          <p className="text-sm text-slate-300 mt-2">Jarvis interviewer is active. Explain your approach before coding.</p>
        </article>
        <JarvisInterface />
      </section>
      <Link href={`/review/${params.sessionId}`} className="inline-flex rounded border border-cyan-400 px-4 py-2">End Interview</Link>
    </main>
  );
}
