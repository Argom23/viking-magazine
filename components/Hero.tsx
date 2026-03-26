type HeroProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
    backgroundImage?: string;
    cardLabel?: string;
    cardTitle?: string;
    highlights?: string[];
};

const defaultHighlights = [
    "Paleta fría con acentos piedra y mar",
    "Composición editorial inspirada en sagas nórdicas",
    "Grandes imágenes atmosféricas para portada",
    "Bloques listos para artículos y especiales",
];

export default function Hero({
                                 eyebrow = "Edición de los nueve reinos",
                                 title = "Una revista nórdica con niebla, piedra, dioses y memoria.",
                                 description =
                                 "La portada ahora toma una estética más mitológica y ceremonial, con composición inspirada en reinos elevados, arquitectura monumental y paisajes del norte.",
                                 primaryCtaLabel = "Ver edición",
                                 primaryCtaHref = "#destacados",
                                 secondaryCtaLabel = "Suscribirse",
                                 secondaryCtaHref = "#newsletter",
                                 backgroundImage = "/images/asgard.jpg",
                                 cardLabel = "Portada",
                                 cardTitle = "Donde los dioses observan, las sagas empiezan.",
                                 highlights = defaultHighlights,
                             }: HeroProps) {
    return (
        <section id="inicio" className="relative overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19,80,91,0.92) 10%, rgba(19,80,91,0.55) 45%, rgba(19,80,91,0.82) 100%), url('${backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(12,116,137,0.18) 0%, rgba(0,0,0,0.08) 40%, rgba(8,30,36,0.75) 100%)",
                }}
            />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-32">
                <div>
                    <p
                        className="mb-4 text-sm uppercase tracking-[0.42em]"
                        style={{ color: "#B4D2E7" }}
                    >
                        {eyebrow}
                    </p>
                    <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                        {title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "#FCFAF9" }}>
                        {description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href={primaryCtaHref}
                            className="rounded-full px-6 py-3 font-medium transition hover:scale-[1.02]"
                            style={{ backgroundColor: "#918868", color: "#FCFAF9" }}
                        >
                            {primaryCtaLabel}
                        </a>
                        <a
                            href={secondaryCtaHref}
                            className="rounded-full border px-6 py-3 font-medium transition hover:opacity-90"
                            style={{ borderColor: "#B4D2E7", color: "#B4D2E7" }}
                        >
                            {secondaryCtaLabel}
                        </a>
                    </div>
                </div>

                <div
                    className="rounded-[2rem] border p-6 shadow-2xl"
                    style={{
                        backgroundColor: "rgba(252, 250, 249, 0.08)",
                        borderColor: "rgba(180, 210, 231, 0.22)",
                    }}
                >
                    <div
                        className="flex h-full min-h-[420px] flex-col justify-between rounded-[1.5rem] border p-6"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(12,116,137,0.18) 0%, rgba(19,80,91,0.36) 100%)",
                            borderColor: "rgba(252, 250, 249, 0.1)",
                        }}
                    >
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#B4D2E7" }}>
                                {cardLabel}
                            </p>
                            <h3 className="mt-4 text-3xl font-semibold leading-snug">{cardTitle}</h3>
                        </div>

                        <div className="space-y-3 border-t pt-6" style={{ borderColor: "rgba(252,250,249,0.12)" }}>
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3 text-sm" style={{ color: "#FCFAF9" }}>
                  <span
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: "#918868" }}
                  />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
