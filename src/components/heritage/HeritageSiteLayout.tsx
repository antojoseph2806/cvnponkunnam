import { HeritageNavigation } from "./HeritageNavigation";
import { HeritageFooter } from "./HeritageFooter";
import StickyContactButtons from "@/components/StickyContactButtons";

export function HeritageSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-heritage-cream font-body">
      <HeritageNavigation />
      {children}
      <HeritageFooter />
      <StickyContactButtons />
    </div>
  );
}
