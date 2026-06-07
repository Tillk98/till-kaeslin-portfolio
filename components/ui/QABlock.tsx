"use client";

import { useState } from "react";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export type QABlockProps = {
  question: string;
  tlDr: string;
  answer: string;
};

export function QABlock({ question, tlDr, answer }: QABlockProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-md w-full">
      <div className="flex items-center gap-sm w-full">
        <p className="font-inter font-medium text-body text-paleBlue-600">{question}</p>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="shrink-0 text-paleBlue-600"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse answer" : "Expand answer"}
        >
          {expanded ? <ChevronsDownUp className="size-4" /> : <ChevronsUpDown className="size-4" />}
        </button>
      </div>
      {expanded ? (
        <p className="font-inter font-medium text-[14px] leading-[22px] text-neutral-black">{answer}</p>
      ) : (
        <p className="font-inter font-medium italic text-[14px] leading-[22px] text-neutral-black">{tlDr}</p>
      )}
    </div>
  );
}
