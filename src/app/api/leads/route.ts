import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  artist?: string;
  services?: string[];
  packageName?: string;
  source?: string;
};

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as LeadPayload;
  const email = payload.email?.trim() ?? "";
  const name = payload.name?.trim() ?? "";

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_lead" }, { status: 400 });
  }

  console.info("Genuino lead", {
    name,
    email,
    artist: payload.artist,
    services: payload.services,
    packageName: payload.packageName,
    source: payload.source,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
