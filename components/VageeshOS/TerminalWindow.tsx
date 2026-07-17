"use client";

import { useEffect, useRef } from "react";

interface TerminalWindowProps {
  history: string[];
  command: string;
  setCommand: (value: string) => void;
  handleCommand: (e: React.FormEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  minimize: () => void;
}

export default function TerminalWindow({
  history,
  command,
  setCommand,
  handleCommand,
  handleKeyDown,
  minimize,
}: TerminalWindowProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-100">
            Digital Twin Active
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Ask anything about Vageesh
          </p>
        </div>

        <button
          onClick={minimize}
          className="text-xs text-slate-500 transition-colors hover:text-slate-200"
        >
          ESC
        </button>
      </div>

      <div
        ref={terminalRef}
        className="terminal-scrollbar flex-1 space-y-2 overflow-y-auto pr-2"
      >
        {history.map((line, index) => {
          const isCommand = line.startsWith(">");

          return (
            <div
              key={index}
              className={isCommand ? "text-blue-400" : "text-slate-300"}
            >
              {line}
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-slate-700 pt-4">
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-blue-400">vageesh</span>

          <span className="text-slate-500">@os</span>

          <span className="mx-2 text-slate-600">~</span>

          <span className="mr-2 text-slate-300">$</span>

          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder="type a command..."
            aria-label="Terminal command input"
            className="flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-600"
          />
        </form>
      </div>
    </div>
  );
}
