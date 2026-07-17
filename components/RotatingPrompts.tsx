"use client";

import { useEffect, useState } from "react";

const prompts = [
  "tell me about circulet",
  "what projects are you working on?",
  "show me your skills",
  "how can i contact you?",
];

export default function RotatingPrompt() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prompts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 text-blue-400" aria-live="polite">
      &gt; {prompts[index]}
      <span className="animate-pulse">|</span>
    </div>
  );
}
