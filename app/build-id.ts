import { readFileSync } from "fs";
import { join } from "path";

/**
 * The build id Next.js writes to `.next/BUILD_ID` on every `next build`.
 * Falls back to "development" when running via `next dev`, matching what
 * both the server render and the poll endpoint will report there.
 */
export function getBuildId() {
  try {
    return readFileSync(join(process.cwd(), ".next", "BUILD_ID"), "utf8").trim();
  } catch {
    return "development";
  }
}
