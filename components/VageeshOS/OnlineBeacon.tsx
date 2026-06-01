"use client";

interface OnlineBeaconProps {
  onClick: () => void;
}

export default function OnlineBeacon({ onClick }: OnlineBeaconProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 z-50 rounded-full border border-slate-700 bg-slate-900/95 px-4 py-2 shadow-xl backdrop-blur-xl transition-all hover:scale-105 hover:border-green-500"
    >
      <span className="flex items-center gap-2 text-slate-200">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        online
      </span>
    </button>
  );
}
