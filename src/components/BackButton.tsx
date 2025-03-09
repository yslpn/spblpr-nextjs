"use client";

import { useRouter } from "next/navigation";
import { Icon } from "./Icon";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex items-center gap-2 text-xs tracking-widest opacity-60 transition-opacity hover:opacity-100"
      aria-label="Go back to previous page"
    >
      <Icon name="prev" className="size-3" /> Back
    </button>
  );
}
