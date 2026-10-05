import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-lg text-center">
        <p className="text-6xl font-bold text-[var(--accent)]" aria-hidden="true">404</p>
        <h1 className="mt-5 text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">This address does not lead to a page. Return to the homepage to explore my services, background, or contact details.</p>
        <Link href="/" className="action-primary mt-7"><ArrowLeft size={17} aria-hidden="true" /> Return home</Link>
      </div>
    </main>
  );
}
