# JARVIS — AI Pair Programmer & Interview Coach

Next.js 14 + TypeScript implementation scaffold for a voice-first technical interview preparation app.

## Implemented
- App Router pages for landing, dashboard, practice, interview, review, settings
- Agent layer (orchestrator/problem/hint/review/interview/explanation)
- API route scaffolds for agents, code run, STT/TTS
- Zustand session store and Iron Man HUD-inspired styling
- Supabase SQL schema and 50 cross-domain seed problems

## Run locally
```bash
npm install
npm run dev
```

## Required env vars
Copy `.env.example` to `.env.local` and fill values.

## Notes
- Monaco editor is represented as a textarea placeholder in this environment.
- Judge0 and ElevenLabs endpoints are wired as integration stubs until API keys are supplied.
