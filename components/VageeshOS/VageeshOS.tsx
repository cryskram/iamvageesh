"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TerminalWindow from "./TerminalWindow";
import OnlineBeacon from "./OnlineBeacon";
import RotatingPrompt from "../RotatingPrompts";
import TypingPrompt from "./TypingPrompt";

type TerminalState = "ready" | "expanded";

export default function VageeshOS() {
  const [state, setState] = useState<TerminalState>("ready");
  const [showBeacon, setShowBeacon] = useState(false);

  const [command, setCommand] = useState("");

  const [history, setHistory] = useState([
    "",
    "VageeshOS v0.2",
    "Digital Twin Ready",
    "",
    "Type 'help' to begin.",
    "",
  ]);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const addOutput = (...output: string[]) => {
    setHistory((prev) => [...prev, ...output]);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();

    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    setHistory((prev) => [...prev, `> ${cmd}`]);

    setCommand("");

    switch (cmd) {
      case "help":
        addOutput(
          "",
          "Available Commands",
          "----------------",
          "about",
          "projects",
          "contact",
          "skills",
          "resume",
          "clear",
        );
        break;

      case "about":
        addOutput("", "Querying profile database...", "Profile found...");

        setTimeout(() => navigateTo("about"), 800);

        break;

      case "projects":
        addOutput("", "Searching project database...", "Projects indexed...");

        setTimeout(() => navigateTo("projects"), 800);

        break;

      case "contact":
        addOutput("", "Opening communication channels...");

        setTimeout(() => navigateTo("contact"), 800);

        break;

      case "resume":
        window.open("/files/Resume.pdf", "_blank");

        addOutput("", "Opening resume...");

        break;

      case "skills":
        addOutput(
          "",
          "Frontend",
          "- Next.js",
          "- TailwindCSS",
          "- Flutter",
          "",
          "Backend",
          "- GraphQL",
          "- FastAPI",
          "- Prisma",
          "- Express",
        );
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        addOutput("", `Unknown command: ${cmd}`);
    }
  };

  const launchOS = () => {
    setState("expanded");
    setShowBeacon(true);
  };

  return (
    <>
      <motion.div
        layout
        className="terminal-glow overflow-hidden rounded-lg border border-slate-800 bg-slate-900/95 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div>
            <h3 className="font-semibold text-slate-200">VageeshOS</h3>

            <p className="text-xs text-slate-500">Digital Twin Interface</p>
          </div>

          <div className="text-xs text-slate-500">Digital Twin</div>
        </div>

        <div
          className={`bg-slate-800 font-mono text-slate-200 transition-all duration-500 ${state === "expanded" ? "h-[420px] p-6" : "min-h-[140px] p-4"} `}
        >
          {state === "ready" && (
            <>
              <div className="text-lg font-medium text-slate-200">
                VageeshOS
              </div>

              <div className="mt-2 text-slate-500">Digital Twin Ready</div>

              <TypingPrompt />

              <div className="mt-6">
                <p className="mb-3 text-xs text-slate-500">Try:</p>

                <div className="flex flex-wrap gap-2">
                  {["projects", "skills", "contact", "resume"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-700/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={launchOS}
                className="mt-8 w-full rounded-lg bg-slate-700 py-3 text-slate-100 transition-all hover:bg-slate-600"
              >
                Launch VageeshOS &gt;
              </button>
            </>
          )}

          {state === "expanded" && (
            <TerminalWindow
              history={history}
              command={command}
              setCommand={setCommand}
              handleCommand={handleCommand}
              minimize={() => setState("ready")}
            />
          )}
        </div>
      </motion.div>

      {showBeacon && (
        <OnlineBeacon
          onClick={() => {
            document.getElementById("landing")?.scrollIntoView({
              behavior: "smooth",
            });

            setState("expanded");
          }}
        />
      )}
    </>
  );
}
