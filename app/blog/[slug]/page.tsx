import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/posts";
import Contact from "@/components/Contact";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — Desnis" };
  return {
    title: `${post.title} — Desnis`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      <article>
        <header className="relative overflow-hidden pt-36 md:pt-48 pb-16 md:pb-24 section-p mx-auto max-w-[1100px]">
          <div className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-25"
            style={{ backgroundImage: post.gradient }}
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors mb-10"
          >
            <span>←</span> Back to journal
          </Link>

          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/50 mb-6">
            <span style={{ color: post.accent }}>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{post.readMinutes} min read</span>
          </div>

          <h1 className="font-display text-5xl md:text-[5.5rem] leading-[0.98] tracking-[-0.03em]">
            {post.title}
          </h1>

          <p className="mt-8 text-xl text-foreground/75 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </header>

        <div
          className="h-[40vh] md:h-[55vh] w-full"
          style={{ backgroundImage: post.gradient, backgroundSize: "cover" }}
          aria-hidden
        />

        <div className="section-p mx-auto max-w-[720px] py-16 md:py-24 prose-desnis">
          {post.content}
        </div>

        <div className="section-p mx-auto max-w-[1100px] pb-12 flex items-center justify-between border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>←</span> All articles
          </Link>
          <a
            href={`mailto:hello@desnis.studio?subject=Re: ${encodeURIComponent(post.title)}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Reply by email <span>↗</span>
          </a>
        </div>
      </article>

      <section className="section-p mx-auto max-w-[1600px] py-16 md:py-24 border-t border-border">
        <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40 mb-8">
          ( Keep reading )
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {otherPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              data-hover
              className="group flex flex-col rounded-3xl border border-border bg-[#10121f] overflow-hidden"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <div
                  className="absolute inset-0 scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
                  style={{ backgroundImage: p.gradient, backgroundSize: "cover" }}
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em]" style={{ color: p.accent }}>
                  {p.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl leading-[1.1] tracking-[-0.02em]">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
