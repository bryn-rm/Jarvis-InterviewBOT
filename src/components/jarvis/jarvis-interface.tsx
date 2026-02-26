'use client';

import { useJarvisStore } from '@/store/use-jarvis-store';

export function JarvisInterface() {
  const { mode, hintCount, transcripts } = useJarvisStore();

  return (
    <aside className="panel p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-300 font-semibold">Jarvis Interface</h3>
        <span className="text-xs uppercase tracking-wide">{mode}</span>
      </div>
      <div className="h-14 rounded-full border border-cyan-400/50 bg-slate-900/80 flex items-center justify-center animate-pulse">
        <span className="text-cyan-300 text-xs">Waveform Avatar</span>
      </div>
      <p className="text-xs text-amber-300">Hints used: {hintCount} (affects score)</p>
      <ul className="text-xs space-y-1 max-h-32 overflow-y-auto">
        {transcripts.slice(-5).map((message, index) => <li key={`${message.role}-${index}`}><b>{message.role}:</b> {message.content}</li>)}
      </ul>
      <div className="flex gap-2">
        <button className="rounded bg-cyan-500/80 px-3 py-1 text-slate-950">Speak</button>
        <button className="rounded border border-cyan-400/60 px-3 py-1">Silent Mode</button>
      </div>
    </aside>
  );
}
