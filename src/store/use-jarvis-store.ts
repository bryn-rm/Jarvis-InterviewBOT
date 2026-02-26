'use client';

import { create } from 'zustand';

type Transcript = { role: 'user' | 'jarvis'; content: string };

interface JarvisStore {
  mode: 'Practice' | 'Interview' | 'Pair Programming';
  hintCount: number;
  transcripts: Transcript[];
  addTranscript: (message: Transcript) => void;
  incrementHints: () => void;
}

export const useJarvisStore = create<JarvisStore>((set) => ({
  mode: 'Practice',
  hintCount: 0,
  transcripts: [{ role: 'jarvis', content: 'Welcome to Jarvis. Ready to train?' }],
  addTranscript: (message) => set((state) => ({ transcripts: [...state.transcripts, message] })),
  incrementHints: () => set((state) => ({ hintCount: state.hintCount + 1 }))
}));
