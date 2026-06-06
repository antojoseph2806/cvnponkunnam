import type { Metadata } from "next";
import Link from "next/link";
import { HeritageSiteLayout, HeritagePageHero } from "@/components/heritage";
import { HeritageImage } from "@/components/heritage/HeritageImage";

export const metadata: Metadata = {
  title: "Blog | Kalaripayattu & Traditional Healing Insights",
  description:
    "Articles about Kalaripayattu training, Marma Chikilsa, traditional healing, and wellness from AKM Sree Rudra.",
};

const blogPosts = [
  {
    slug: "benefits-of-kalaripayattu-training",
    title: "10 Life-Changing Benefits of Kalaripayattu Training",
    excerpt:
      "Discover how Kerala's ancient martial art can transform your physical fitness, mental focus, and overall wellbeing.",
    date: "2024-01-15",
    category: "Training",
    image: "/assets/kalari-training-hero.png",
  },
  {
    slug: "what-is-marma-chikitsa",
    title: "What is Marma Chikitsa? Understanding Kerala's Traditional Healing",
    excerpt:
      "Learn about the ancient science of Marma therapy and how it can help with pain relief, injury recovery, and wellness.",
    date: "2024-01-10",
    category: "Healing",
    image: "/assets/marma-chikilsa-background.jpeg",
  },
  {
    slug: "beginner-guide-kalaripayattu",
    title: "Beginner's Guide to Starting Kalaripayattu Training",
    excerpt:
      "Everything you need to know before starting your Kalaripayattu journey, from what to expect to how to prepare.",
    date: "2024-01-05",
    category: "Training",
    image: "/assets/kalari-training-landscape.jpg",
  },
];

export default function BlogPage() {
  return (
    <HeritageSiteLayout>
      <main>
        <HeritagePageHero title="Blog" subtitle="Knowledge from the Kalari tradition" />
        <section className="py-20 bg-heritage-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-heritage-green/10 hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-video">
                    <HeritageImage src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs mb-3">
                      <span className="font-semibold uppercase tracking-wider text-temple-gold-dark">
                        {post.category}
                      </span>
                      <span className="text-bronze">{post.date}</span>
                    </div>
                    <h2 className="font-display text-xl text-heritage-green leading-tight">{post.title}</h2>
                    <p className="mt-3 text-sm text-bronze leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-heritage-green hover:text-temple-gold-dark"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center text-bronze text-sm mt-12">
              Connect Sanity CMS to publish new articles dynamically. See .env.example
            </p>
          </div>
        </section>
      </main>
    </HeritageSiteLayout>
  );
}
