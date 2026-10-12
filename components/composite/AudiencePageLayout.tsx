import EditorialPortfolio from "@/components/composite/EditorialPortfolio";
import type { AudienceMode } from "@/lib/audience";

export function AudiencePageLayout({ initialMode = "client" }: { initialMode?: AudienceMode }) {
  return <EditorialPortfolio initialMode={initialMode} />;
}
