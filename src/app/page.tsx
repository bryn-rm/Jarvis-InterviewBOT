import Link from 'next/link';

const links = [
  ['/dashboard', 'Dashboard'],
  ['/practice', 'Practice'],
  ['/interview', 'Interview Setup'],
  ['/settings', 'Settings']
];

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 space-y-8">
      <section className="panel p-8 max-w-4xl mx-auto">
        <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs">Jarvis // Iron Man HUD</p>
        <h1 className="text-4xl font-bold mt-3">AI Pair Programmer & Interview Coach</h1>
        <p className="mt-3 text-slate-300">Voice-first preparation across DSA, SQL, Python/Pandas, ML, and System Design.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded border border-cyan-400/70 px-4 py-2 hover:bg-cyan-500/10">
              {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
