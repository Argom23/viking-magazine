type NavItem = {
    label: string;
    href: string;
};

type NavbarProps = {
    brand?: string;
    subtitle?: string;
    items?: NavItem[];
};

const defaultItems: NavItem[] = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Secciones", href: "#secciones" },
    { label: "Newsletter", href: "#newsletter" },
];

export default function Navbar({
                                   brand = "Vikingr Magazine",
                                   subtitle = "Nordic Archive",
                                   items = defaultItems,
                               }: NavbarProps) {
    return (
        <header
            className="sticky top-0 z-50 border-b backdrop-blur"
            style={{
                backgroundColor: "rgba(12, 116, 137, 0.18)",
                borderColor: "rgba(180, 210, 231, 0.18)",
            }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <div>
                    <p
                        className="text-xs uppercase tracking-[0.38em]"
                        style={{ color: "#B4D2E7" }}
                    >
                        {subtitle}
                    </p>
                    <h1 className="text-xl font-semibold tracking-[0.08em]">{brand}</h1>
                </div>

                <nav className="hidden gap-8 text-sm md:flex">
                    {items.map((item) => (
                        <a key={item.href} href={item.href} className="transition hover:opacity-80">
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="md:hidden rounded-full border px-4 py-2 text-sm"
                    style={{
                        borderColor: "rgba(180, 210, 231, 0.24)",
                        color: "#B4D2E7",
                    }}
                    aria-label="Abrir menú"
                    type="button"
                >
                    Menú
                </button>
            </div>
        </header>
    );
}
