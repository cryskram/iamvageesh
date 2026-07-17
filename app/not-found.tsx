import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200 px-6 text-center text-slate-800">
      <h1 className="text-6xl font-bold text-slate-400">404</h1>
      <p className="mt-4 text-lg text-slate-600">
        This page doesn&apos;t exist - maybe it never did.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
      >
        Go home
      </Link>
    </div>
  );
}
