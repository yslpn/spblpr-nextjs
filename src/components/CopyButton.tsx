"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export const CopyButton = (props: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.text);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group bg-customGold hover:bg-customBlack flex gap-2 p-2 transition duration-300"
    >
      <svg
        className="fill-customBlack group-hover:fill-customGold h-full w-full transition duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path
          d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
          className="fill-inherit"
        />
        <path d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" className="fill-inherit" />
      </svg>

      {copied && (
        <span className="text-customBlack group-hover:text-customGold text-sm transition duration-300">
          Скопировано!
        </span>
      )}
    </button>
  );
};
