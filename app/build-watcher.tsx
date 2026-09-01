"use client";

import { useEffect } from "react";

// How often the kiosk checks whether a new build has been deployed.
const CHECK_INTERVAL_MS = 60_000;

/**
 * Polls the server for its running build id and reloads the page once it
 * differs from the build id the page was rendered with, so a kiosk sitting
 * unattended picks up newly deployed builds on its own.
 */
export function BuildWatcher({ initialBuildId }: { initialBuildId: string }) {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/build-id", { cache: "no-store" });
        const { buildId } = (await res.json()) as { buildId?: string };
        if (buildId && buildId !== initialBuildId) {
          window.location.reload();
        }
      } catch {
        // Network hiccup or server restarting mid-deploy; try again next tick.
      }
    }, CHECK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [initialBuildId]);

  return null;
}
