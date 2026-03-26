"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import SectionsGrid from "@/components/SectionsGrid";
import Newsletter from "@/components/Newsletter";

export default function Page() {
  const featuredStories = [
    {
      category: "Ensayo • Emilio",
      title: "Barcos vikingos: ingeniería del mar del norte",
      excerpt:
          "Cómo eran construidos, para qué servían, tipos de embarcaciones, materiales y detalles sobre los viajes a través de mares hostiles.",
      image: "/images/placeholder.png",
    },
    {
      category: "Periódico • Arturo",
      title: "La batalla de Stamford Bridge y el fin de una era",
      excerpt:
          "La derrota del rey Haraldo Hardrada marca el cierre de la era vikinga en un enfrentamiento decisivo en Inglaterra.",
      image: "/images/placeholder.png",
    },
    {
      category: "Diario • Andersson",
      title: "Relatos de un vikingo a su familia",
      excerpt:
          "Un guerrero regresa del mar y narra a su esposa e hijos sus travesías, peligros y descubrimientos en tierras lejanas.",
      image: "/images/placeholder.png",
    },
    {
      category: "Testimonio • Gabo",
      title: "Mujeres en la sociedad vikinga",
      excerpt:
          "Guerreras, líderes y figuras clave: privilegios, derechos y el verdadero rol de las mujeres en el mundo nórdico.",
      image: "/images/placeholder.png",
    },
    {
      category: "Entrevista • Cesar",
      title: "Conversación con Leif Eriksen",
      excerpt:
          "Una entrevista imaginaria con uno de los primeros europeos en llegar a América, explorando sus viajes, motivaciones y legado.",
      image: "/images/placeholder.png",
    },
    {
      category: "Próximamente",
      title: "Nuevo artículo en desarrollo",
      excerpt: "Este espacio está reservado para futuras crónicas del mundo nórdico.",
      image: "/images/placeholder.png",
      placeholder: true,
    },
  ];

  const sections = [
    {
      title: "Reinos",
      description:
          "Asgard, Midgard, Jotunheim y la cartografía simbólica del universo nórdico.",
    },
    {
      title: "Sagas",
      description:
          "Relatos extensos con tono editorial, héroes, batallas, exilio y destino.",
    },
    {
      title: "Arte y símbolos",
      description:
          "Runas, ornamentos, tejidos, madera tallada y estética ritual del norte.",
    },
    {
      title: "Dioses y mitos",
      description:
          "Odin, Thor, Freyja y las fuerzas que sostienen la visión del mundo vikingo.",
    },
  ];

  const highlights = [
    "Paleta fría con acentos piedra y mar",
    "Composición editorial inspirada en sagas nórdicas",
    "Grandes imágenes atmosféricas para portada",
    "Bloques listos para artículos y especiales",
  ];

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

        <Hero
            eyebrow="Edición de los nueve reinos"
            title="Una revista nórdica con niebla, piedra, dioses y memoria."
            description="La portada ahora toma una estética más mitológica y ceremonial, con composición inspirada en reinos elevados, arquitectura monumental y paisajes del norte."
            backgroundImage="/images/asgard.jpg"
            cardLabel="Portada"
            cardTitle="Donde los dioses observan, las sagas empiezan."
            highlights={highlights}
        />

        <FeaturedArticles
            articles={featuredStories}
            subtitle="Lecturas principales"
            title="Visiones del mundo nórdico"
        />

        <SectionsGrid
            sections={sections}
            subtitle="Arquitectura del sitio"
            title="Secciones de la revista"
        />

        <Newsletter
            title="Recibe nuevas crónicas del norte"
            description="Suscríbete para recibir nuevas historias, exploraciones y relatos del mundo vikingo directamente en tu bandeja."
            placeholder="tu@email.com"
            buttonLabel="Unirme"
        />
      </main>
  );
}
