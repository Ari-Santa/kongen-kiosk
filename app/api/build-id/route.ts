import { NextResponse } from "next/server";
import { getBuildId } from "../../build-id";

// Always run this on the server per-request so it reflects whichever
// build the running process was started from, not a cached response.
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { buildId: getBuildId() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
