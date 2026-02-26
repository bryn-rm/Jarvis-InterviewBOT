import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  if (!process.env.ELEVENLABS_API_KEY) {
    return NextResponse.json({ warning: 'Set ELEVENLABS_API_KEY for TTS.', text });
  }

  return NextResponse.json({ status: 'queued', text });
}
