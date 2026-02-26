export default function DashboardPage() {
  return (
    <main className="p-8 grid gap-4 md:grid-cols-3">
      {['Problems Solved', 'Current Streak', 'Interview Avg'].map((metric, index) => (
        <section key={metric} className="panel p-4">
          <p className="text-xs text-slate-400">{metric}</p>
          <p className="text-3xl text-cyan-300 font-code">{[24, 6, 7.4][index]}</p>
        </section>
      ))}
    </main>
  );
}
