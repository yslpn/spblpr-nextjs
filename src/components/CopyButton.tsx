"use client";

import { useState } from "react";
import CopyIcon from "../assets/copy.svg";

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
      className="group bg-customGold hover:bg-customBlack flex cursor-pointer gap-2 p-2 transition duration-300"
    >
      <CopyIcon className="fill-customBlack group-hover:fill-customGold h-full w-full transition duration-300" />
      {copied && (
        <span className="text-customBlack group-hover:text-customGold text-sm transition duration-300">
          Скопировано!
        </span>
      )}
    </button>
  );
};
