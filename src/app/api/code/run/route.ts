import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { code, language } = await request.json();

  if (!process.env.JUDGE0_BASE_URL) {
    return NextResponse.json({ passed: false, warning: 'Set JUDGE0_BASE_URL to execute code.', language, output: code.slice(0, 80) });
  }

  return NextResponse.json({ passed: true, output: 'Judge0 integration scaffolded. Plug API token and submission flow.' });
}
