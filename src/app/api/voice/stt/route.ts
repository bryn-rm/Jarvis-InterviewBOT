import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ transcript: 'Web Speech API is client-side. This endpoint is a fallback placeholder.' });
}
