import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

type ArticlePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;

    const article = articles.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main
            className="min-h-screen"
            style={{
                background:
                    "linear-gradient(180deg, #13505B 0%, #0b2f36 45%, #081e24 100%)",
                color: "#FCFAF9",
            }}
        >
            <Navbar />

            <section className="relative min-h-[75vh] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover opacity-45"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#13505B]/70 via-[#0b2f36]/80 to-[#081e24]" />

                <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-32">
                    <Link
                        href="/articles"
                        className="mb-8 w-fit rounded-full border border-[#B4D2E7]/30 px-4 py-2 text-sm text-[#B4D2E7] transition hover:bg-[#B4D2E7]/10"
                    >
                        ← Volver a artículos
                    </Link>

                    <span className="mb-4 w-fit rounded-full bg-[#918868]/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B4D2E7]">
                        {article.category} • {article.author}
                    </span>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                        {article.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FCFAF9]/80">
                        {article.excerpt}
                    </p>
                </div>
            </section>

            <article className="mx-auto max-w-3xl px-6 py-16">
                <div className="mb-12 border-l-4 border-[#918868] pl-6">
                    <p className="text-xl italic leading-9 text-[#B4D2E7]">
                        {article.excerpt}
                    </p>
                </div>

                <div className="space-y-10">
                    {article.content.map((block, index) => {
                        if (block.type === "paragraph") {
                            return (
                                <p
                                    key={index}
                                    className="whitespace-pre-line text-lg leading-9 text-[#FCFAF9]/85"
                                >
                                    {block.text}
                                </p>
                            );
                        }

                        if (block.type === "quote") {
                            return (
                                <blockquote
                                    key={index}
                                    className="rounded-3xl border border-[#B4D2E7]/20 bg-[#13505B]/40 p-8"
                                >
                                    <p className="text-2xl italic leading-10 text-[#B4D2E7]">
                                        “{block.text}”
                                    </p>

                                    {block.author && (
                                        <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FCFAF9]/50">
                                            {block.author}
                                        </footer>
                                    )}
                                </blockquote>
                            );
                        }

                        if (block.type === "note") {
                            return (
                                <aside
                                    key={index}
                                    className="rounded-3xl border-l-4 border-[#918868] bg-[#FCFAF9]/5 p-6"
                                >
                                    {block.title && (
                                        <h3 className="mb-3 text-lg font-bold text-[#B4D2E7]">
                                            {block.title}
                                        </h3>
                                    )}

                                    <p className="whitespace-pre-line text-base leading-8 text-[#FCFAF9]/75">
                                        {block.text}
                                    </p>
                                </aside>
                            );
                        }

                        if (block.type === "subtitle") {
                            return (
                                <h2
                                    key={index}
                                    className="pt-6 text-3xl font-bold leading-tight text-[#B4D2E7]"
                                >
                                    {block.text}
                                </h2>
                            );
                        }

                        if (block.type === "image") {
                            return (
                                <figure key={index} className="overflow-hidden rounded-3xl">
                                    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#B4D2E7]/20">
                                        <Image
                                            src={block.src}
                                            alt={block.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {block.caption && (
                                        <figcaption className="mt-3 text-center text-sm italic text-[#FCFAF9]/60">
                                            {block.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            );
                        }

                        if (block.type === "references") {
                            return (
                                <section
                                    key={index}
                                    className="mt-16 rounded-3xl border border-[#B4D2E7]/20 bg-[#FCFAF9]/5 p-6 md:p-8"
                                >
                                    <h2 className="mb-6 text-2xl font-bold text-[#B4D2E7]">
                                        Referencias
                                    </h2>

                                    <ol className="space-y-4 list-decimal pl-5">
                                        {block.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="pl-2 text-base leading-7 text-[#FCFAF9]/75"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ol>
                                </section>
                            );
                        }

                        return null;
                    })}
                </div>
            </article>
        </main>
    );
}