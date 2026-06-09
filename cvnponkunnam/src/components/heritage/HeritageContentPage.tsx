import { HeritagePageHero } from "./HeritagePageHero";

type HeritageContentPageProps = {
  title: string;
  subtitle?: string;
  image?: string;
  children: React.ReactNode;
};

export function HeritageContentPage({ title, subtitle, image, children }: HeritageContentPageProps) {
  return (
    <main>
      <HeritagePageHero title={title} subtitle={subtitle} image={image} />
      <div className="py-16 md:py-20 bg-heritage-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">{children}</div>
      </div>
    </main>
  );
}
