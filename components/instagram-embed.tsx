"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramEmbed({ url, fallbackLabel }: { url: string; fallbackLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById("instagram-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [url]);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-ink-900/10">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%" }}
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-50 to-teal-50 p-6 text-center text-sm font-medium text-brand-600"
        >
          {fallbackLabel}
        </a>
      </blockquote>
    </div>
  );
}
