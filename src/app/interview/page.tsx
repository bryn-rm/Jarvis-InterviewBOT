import Link from 'next/link';

export default function InterviewSetupPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <section className="panel p-6 space-y-4">
        <h1 className="text-2xl text-cyan-300">Interview Setup</h1>
        <p>Configure role, difficulty, and time limit. Start a realistic mock interview with Jarvis.</p>
        <Link href="/interview/demo-session" className="inline-flex rounded bg-cyan-500 text-slate-950 px-4 py-2 font-semibold">Start Interview</Link>
      </section>
    </main>
  );
}
