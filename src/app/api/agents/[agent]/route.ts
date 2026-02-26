import { NextRequest, NextResponse } from 'next/server';
import { AGENT_SYSTEM_PROMPTS } from '@/lib/prompts';
import { streamAgentResponse } from '@/lib/anthropic';

export async function POST(request: NextRequest, { params }: { params: { agent: keyof typeof AGENT_SYSTEM_PROMPTS } }) {
  try {
    const body = await request.json();
    const system = AGENT_SYSTEM_PROMPTS[params.agent] ?? AGENT_SYSTEM_PROMPTS.orchestrator;
    const message = await streamAgentResponse(system, body.message ?? 'Hello Jarvis');
    return NextResponse.json({ agent: params.agent, message });
  } catch (error) {
    return NextResponse.json({ error: 'Agent request failed', detail: String(error) }, { status: 500 });
  }
}
