"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
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

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B4D2E7]">
            Archivo editorial
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Artículos de Viking Magazine
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#FCFAF9]/75">
            Explora las crónicas, entrevistas, testimonios y ensayos que forman
            parte de esta edición inspirada en el mundo nórdico.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <article className="group overflow-hidden rounded-3xl border border-[#B4D2E7]/20 bg-[#FCFAF9]/5 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#B4D2E7]/50 hover:bg-[#FCFAF9]/10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081e24] via-[#081e24]/30 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#13505B]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#B4D2E7]">
                    {article.category} • {article.author}
                  </span>
                </div>

                <div className="flex min-h-[260px] flex-col p-6">
                  <span className="mb-4 text-sm text-[#918868]">
                    Artículo {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-2xl font-bold leading-tight text-[#FCFAF9]">
                    {article.title}
                  </h2>

                  <p className="mt-4 flex-1 text-base leading-7 text-[#FCFAF9]/70">
                    {article.excerpt}
                  </p>

                  <div className="mt-8">
                    <span className="inline-flex rounded-full bg-[#B4D2E7] px-5 py-3 text-sm font-semibold text-[#081e24] transition group-hover:bg-[#FCFAF9]">
                      Leer artículo
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}