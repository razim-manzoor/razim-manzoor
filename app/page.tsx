import NavBar from "@/components/NavBar";
import { AudiencePageLayout } from "@/components/composite/AudiencePageLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] bg-[var(--foreground)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--background)] focus:not-sr-only focus:outline-none"
      >
        Skip to content
      </a>
      <NavBar />
      <AudiencePageLayout />
    </div>
  );
}
