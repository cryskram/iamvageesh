"use client";

import { useEffect, useState } from "react";

const prompts = [
  "tell me about circulet",
  "what projects are you working on?",
  "show me your skills",
  "how can i contact you?",
  "what are you building right now?",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_TIME = 1800;

export default function TypingPrompt() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPrompt = prompts[promptIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentPrompt.length) {
        timeout = setTimeout(() => {
          setText(currentPrompt.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_TIME);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPrompt.slice(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);

        setPromptIndex((prev) => (prev + 1) % prompts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, promptIndex]);

  return (
    <div className="mt-4 text-blue-400">
      &gt; {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}
