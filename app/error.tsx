"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 px-6 text-center text-slate-800">
      <h1 className="text-4xl font-bold text-slate-400">
        Something went wrong
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-md bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
}
