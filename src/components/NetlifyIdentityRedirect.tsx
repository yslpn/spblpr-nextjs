"use client";

import { useEffect } from "react";

interface NetlifyIdentity {
  on: (event: string, callback: (user?: unknown) => void) => void;
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
}

export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: unknown) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything visually
}
