'use client';

import { useState } from 'react';

const templates: Record<string, string> = {
  python: 'def solve():\n    pass\n',
  javascript: 'function solve() {\n  return null;\n}\n',
  java: 'class Solution {\n  public static void solve() {}\n}\n',
  cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n  return 0;\n}\n',
  sql: 'SELECT 1;\n'
};

export function CodeEditor() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(templates.python);

  return (
    <section className="panel p-4 space-y-3">
      <div className="flex gap-2 items-center">
        <label htmlFor="lang">Language</label>
        <select
          id="lang"
          className="bg-slate-900 border border-cyan-500/40 rounded px-2 py-1"
          value={language}
          onChange={(event) => {
            const nextLanguage = event.target.value;
            setLanguage(nextLanguage);
            setCode(templates[nextLanguage]);
          }}
        >
          {Object.keys(templates).map((lang) => <option key={lang} value={lang}>{lang}</option>)}
        </select>
        <button className="ml-auto rounded bg-cyan-500 text-slate-950 px-3 py-1 font-semibold">Run (Judge0)</button>
      </div>
      <textarea
        className="w-full min-h-[420px] bg-black/70 border border-cyan-500/30 rounded p-3 font-code text-sm"
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <p className="text-xs text-cyan-200/80">Monaco placeholder: swap textarea with @monaco-editor/react in enabled environment.</p>
    </section>
  );
}
