import { AudiencePageLayout } from "@/components/composite/AudiencePageLayout";

export default async function Home({ searchParams }: { searchParams: Promise<{ view?: string }> }) {
  const { view } = await searchParams;
  const initialMode = view === "recruiter" ? "recruiter" : view === "all" ? "all" : "client";
  return <AudiencePageLayout initialMode={initialMode} />;
}
