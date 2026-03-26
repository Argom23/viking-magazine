type Section = {
    title: string;
    description: string;
};

type SectionsGridProps = {
    sections: Section[];
    title?: string;
    subtitle?: string;
};

export default function SectionsGrid({
                                         sections,
                                         title = "Secciones de la revista",
                                         subtitle = "Arquitectura del sitio",
                                     }: SectionsGridProps) {
    return (
        <section
            id="secciones"
            className="border-y"
            style={{
                borderColor: "rgba(180, 210, 231, 0.12)",
                background:
                    "linear-gradient(180deg, rgba(12,116,137,0.12) 0%, rgba(19,80,91,0.24) 100%)",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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

                        <p
                            className="mt-6 max-w-xl leading-8"
                            style={{ color: "rgba(252,250,249,0.8)" }}
                        >
                            La estructura editorial organiza el contenido en bloques claros: reinos,
                            relatos, símbolos y mitología, permitiendo expandir la revista de forma escalable.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="rounded-[1.5rem] border p-6 transition hover:-translate-y-1"
                                style={{
                                    backgroundColor: "rgba(252, 250, 249, 0.06)",
                                    borderColor: "rgba(180, 210, 231, 0.16)",
                                }}
                            >
                                <h4 className="text-2xl font-semibold">
                                    {section.title}
                                </h4>

                                <p
                                    className="mt-3 leading-7"
                                    style={{ color: "rgba(252,250,249,0.78)" }}
                                >
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
