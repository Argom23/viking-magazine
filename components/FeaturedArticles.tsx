type Article = {
    category: string;
    title: string;
    excerpt: string;
    image: string;
    placeholder?: boolean;
};

type FeaturedArticlesProps = {
    articles: Article[];
    title?: string;
    subtitle?: string;
};

export default function FeaturedArticles({
                                             articles,
                                             title = "Visiones del mundo nórdico",
                                             subtitle = "Lecturas principales",
                                         }: FeaturedArticlesProps) {
    return (
        <section id="destacados" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                    <p
                        className="text-sm uppercase tracking-[0.35em]"
                        style={{ color: "#B4D2E7" }}
                    >
                        {subtitle}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                        {title}
                    </h3>
                </div>

                <p
                    className="hidden max-w-xl text-right md:block"
                    style={{ color: "rgba(252,250,249,0.72)" }}
                >
                    Las crónicas combinan historia, mito y narrativa editorial.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {articles.map((article, index) => (
                    <article
                        key={index}
                        className="overflow-hidden rounded-[1.75rem] border transition hover:-translate-y-1"
                        style={{
                            borderColor: "rgba(180, 210, 231, 0.16)",
                            backgroundColor: article.placeholder
                                ? "rgba(145,136,104,0.08)"
                                : "rgba(252, 250, 249, 0.05)",
                            opacity: article.placeholder ? 0.7 : 1,
                        }}
                    >
                        <div
                            className="h-64 w-full"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(12,116,137,0.06), rgba(19,80,91,0.22)), url('${article.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: article.placeholder ? "grayscale(60%)" : "none",
                            }}
                        />

                        <div className="p-6">
                            <p
                                className="text-xs uppercase tracking-[0.3em]"
                                style={{ color: "#B4D2E7" }}
                            >
                                {article.category}
                            </p>

                            <h4 className="mt-4 text-2xl font-semibold leading-snug">
                                {article.title}
                            </h4>

                            <p
                                className="mt-4 leading-7"
                                style={{ color: "rgba(252,250,249,0.82)" }}
                            >
                                {article.excerpt}
                            </p>

                            {!article.placeholder && (
                                <button
                                    className="mt-8 text-sm font-medium"
                                    style={{ color: "#918868" }}
                                >
                                    Leer artículo →
                                </button>
                            )}

                            {article.placeholder && (
                                <p
                                    className="mt-8 text-sm italic"
                                    style={{ color: "#918868" }}
                                >
                                    Próximamente...
                                </p>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
