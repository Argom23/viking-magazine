type NewsletterProps = {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonLabel?: string;
};

export default function Newsletter({
                                       title = "Recibe nuevas crónicas del norte",
                                       description =
                                       "Suscríbete para recibir nuevas historias, exploraciones y relatos del mundo vikingo directamente en tu bandeja.",
                                       placeholder = "tu@email.com",
                                       buttonLabel = "Unirme",
                                   }: NewsletterProps) {
    return (
        <section id="newsletter" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div
                className="rounded-[2rem] border p-8 md:p-12"
                style={{
                    borderColor: "rgba(145, 136, 104, 0.34)",
                    background:
                        "linear-gradient(90deg, rgba(19,80,91,0.95) 0%, rgba(12,116,137,0.7) 100%)",
                }}
            >
                <p
                    className="text-sm uppercase tracking-[0.35em]"
                    style={{ color: "#B4D2E7" }}
                >
                    Comunidad
                </p>

                <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <h3 className="text-3xl font-semibold md:text-4xl">
                            {title}
                        </h3>

                        <p
                            className="mt-4 max-w-2xl leading-8"
                            style={{ color: "rgba(252,250,249,0.86)" }}
                        >
                            {description}
                        </p>
                    </div>

                    <form
                        className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Funcionalidad de newsletter pendiente ⚔️");
                        }}
                    >
                        <input
                            type="email"
                            required
                            placeholder={placeholder}
                            className="min-w-0 flex-1 rounded-full px-5 py-3 outline-none ring-0 placeholder:text-white/50"
                            style={{
                                backgroundColor: "rgba(252, 250, 249, 0.12)",
                                border: "1px solid rgba(252, 250, 249, 0.14)",
                                color: "#FCFAF9",
                            }}
                        />

                        <button
                            type="submit"
                            className="rounded-full px-6 py-3 font-medium transition hover:scale-[1.02]"
                            style={{ backgroundColor: "#918868", color: "#FCFAF9" }}
                        >
                            {buttonLabel}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
