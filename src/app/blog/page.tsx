import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Kalaripayattu Training Tips & Traditional Healing Insights | CVN Kalari",
  description:
    "Read expert articles about Kalaripayattu training, Marma Chikitsa, traditional healing, and wellness from AKM Sree Rudra CVN Kalari. Learn about Kerala's ancient martial arts and healing traditions.",
  keywords:
    "Kalaripayattu blog, martial arts tips, Marma Chikitsa articles, traditional healing Kerala, Kalari training guide, wellness blog Kerala",
};

// Sample blog posts - you can move this to a database later
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
    <div className="min-h-screen bg-[#f6f4ec]">
      <Header />
      <main className="pt-20">
        <section className="px-4 py-16 md:px-8 lg:px-16 lg:py-24">
          <div className="container-narrow">
            <div className="text-center">
              <p className="section-eyebrow">Knowledge & Insights</p>
              <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground md:text-6xl">
                Kalari Blog
              </h1>
              <p className="mx-auto mt-5 max-w-2xl section-copy">
                Explore articles about Kalaripayattu training, traditional healing, and wellness wisdom from Kerala.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white shadow-[0_24px_60px_-46px_rgba(18,41,25,0.48)] transition-all hover:shadow-[0_32px_80px_-46px_rgba(18,41,25,0.62)]"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-semibold uppercase tracking-[0.14em] text-highlight">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="mt-3 font-heading text-xl leading-tight text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-highlight hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                More articles coming soon. Follow us on social media for updates.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
