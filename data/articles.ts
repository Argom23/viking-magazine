export type ArticleContentBlock =
  | {
    type: "paragraph";
    text: string;
  }
  | {
    type: "subtitle";
    text: string;
  }
  | {
    type: "image";
    src: string;
    alt: string;
    caption?: string;
  }
  | {
    type: "quote";
    text: string;
    author?: string;
  }
  | {
    type: "references";
    items: string[];
  }
  |  {
      type: "note";
      title?: string;
      text: string;
  };

export type Article = {
  slug: string;
  category: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
  content: ArticleContentBlock[];
};


export const articles: Article[] = [
  {
    slug: "barcos-vikingos",
    category: "Ensayo",
    author: "Emilio",
    title: "Barcos vikingos: ingeniería del mar del norte",
    excerpt:
      "Cómo eran construidos, para qué servían, tipos de embarcaciones, materiales y detalles sobre los viajes a través de mares hostiles.",
    image: "/Images/placeholder.png",
    content: [
      {
        type: "paragraph",
        text: "Los barcos vikingos fueron una de las principales herramientas de expansión del mundo nórdico.",
      },
      {
        type: "image",
        src: "/Images/barco-vikingo.jpg",
        alt: "Barco vikingo navegando en el mar",
        caption: "Representación visual de una embarcación vikinga.",
      },
    ],
  },
  {
    slug: "stamford-bridge",
    category: "Periódico",
    author: "Arturo",
    title: "La batalla de Stamford Bridge y el fin de una era",
    excerpt:
      "La derrota del rey Haraldo Hardrada marca el cierre de la era vikinga en un enfrentamiento decisivo en Inglaterra.",
    image: "/Images/placeholder.png",
    content: [
      {
        type: "paragraph",
        text: "Los barcos vikingos fueron una de las principales herramientas de expansión del mundo nórdico.",
      },
      {
        type: "image",
        src: "/Images/barco-vikingo.jpg",
        alt: "Barco vikingo navegando en el mar",
        caption: "Representación visual de una embarcación vikinga.",
      },
    ],
  },
  {
    slug: "relatos-vikingos",
    category: "Diario",
    author: "Andersson",
    title: "Un vikingo contándole a su esposa e hijos sus historias de viaje por los mares",
    excerpt:
      "Significado de los tatuajes y símbolos de los guerreros vikingos.",
    image: "/Images/Valhallaa.jpg",
    content: [
      {
        type: "paragraph",
        text: "Los pueblos nórdicos han conseguido despertar un sentimiento de asombro e intriga alrededor del mundo. Esto mayormente debido a la figura de los vikingos, esos impresionantes guerreros que en palabras de Focio eran “Una nación oscura e insignificante, bárbara y arrogante, súbitamente ha caído sobre nosotros, como una ola del mar, y como un jabalí salvaje ha devorado a los habitantes de esta tierra como si fuera hierba”  (Focio, citado en Velasco M, 2012, p. 7).",
      },
      {
        type: "paragraph",
        text: "Una de las características relacionadas con la figura de los vikingos son sus emblemáticos tatuajes, esas marcas en la piel que no estaban ahí solo por estar sino que eran un recordatorio de su origen, símbolos tanto religiosos como místicos. Los tatuajes son una técnica de modificación corporal en la que se dibuja una imagen en la piel aplicando tinta o algún tipo de pigmento en la primera capa de esta, por medio de agujas u otro instrumento. Aunque el pensamiento colectivo llega a ser que los tatuajes son un estilo artístico moderno, la realidad es que estos existen desde hace miles de años y en gran variedad de culturas, desde las tribus polinesias donde se utilizaban para dar un aspecto más intimidante, como en los pueblos mesoamericanos donde estaban más relacionados con sus espirituales.",
      },
      {
        type: "image",
        src: "/Images/placeholder.png",
        alt: "Tatauaje Facial Maori",
        caption: "Tatauaje Facial Maorí.",
      },
      {
        type: "paragraph",
        text: "En el caso de los vikingos, los utilizaban como un estilo de amuleto o símbolo protector en batalla, estos llenaban de manera permanente sus cuerpos con símbolos que les otorgaban diversas bendiciones, desde fuerza, protección o efectos curativos. Las imágenes que adornaban el cuerpo de estos hombres y mujeres eran símbolos rúnicos. Las runas son una serie de letras que se utilizaban como sistema alfabético en gran variedad de lenguas germanas, pero también tenían una connotación mágica y misteriosa. De hecho, en algunos idiomas célticos y germánicos la palabra runa significa “secreto”, las más antiguas datan cerca del año 150 d.C., Y, aunque existen gran variedad de versiones, el más conocido es el “futhark”, nombre derivado de las seis primeras letras de este.",
      },
      {
        type: "image",
        src: "/Images/placeholder.png",
        alt: "Runas vikingas",
        caption: "",
      },
      {
        type: "paragraph",
        text: "En la mitología nórdica se encuentra el origen mítico de estos símbolos, se cuenta en la Edda Poética que el dios Odín se colgó de una de las ramas del árbol Yggdrasil durante nueve días y nueve noches, sin consumir alimento o bebida alguna siendo atravesado por su lanza Gungnir, sacrificando su cuerpo a cambio del conocimiento místico de las runas cayendo al suelo.",
      },
      {
        type: "note",
        text: "Yo sé que estuve colgado, durante nueve noches enteras, de un árbol que el viento hacía murmurar. Un venablo me había herido. Ofrecido á Odin, fui consagrado á este árbol, del que nadie conoce las raices. \n\n No me alimenté con pan , ni con hidromiel. Me inclinaba para recoger las runas, y las aprendia llorando; en seguida caí al suelo. (Sturleson & Sigfusson, 1856, p. 149)",
      },
      {
        type: "paragraph",
        text: "El nombre de cada una de las runas se les otorgó según el sonido del primer fonema del nombre, con la opción de Ingwaz y Algiz.  A pesar de que los nombres de estos símbolos tienen este origen, también se supone que cada una posee un significado literal y místico correspondiendo a nombres de cosas. \n Además de los símbolos rúnicos, los tatuajes vikingos también representan sentimientos abstractos u objetos de la vida cotidiana o mitológica y que les aportan a estas runas su significado. Ejemplo son las múltiples imágenes que hacen referencia al martillo Mjolnir, que llevaban para recibir la fuerza de Thor durante la batalla, o el Valknut, un símbolo de Odín, por lo que se lo tatuaban para ser merecedores de entrar al Valhalla. \n Estas hermosas representaciones de la esencia de una cultura no se quedaron solo en la antigüedad, han llegado hasta nuestros tiempos y se han mantenido presentes en la cultura pop siendo el personaje del dios Baldur en el videojuego God of War uno de sus mayores representantes teniendo gran variedad de ejemplares de estos tatuajes, muchas personas hoy en día siguen utilizando los  ya sea por razones místicas o simple gusto personal.",
      },
      {
        type: "references",
        items: [
          "Velasco, M. (2012). Breve historia de los vikingos (edición digital).",
          "Sturleson, S., & Sigfusson, S. (1856). Los Eddas: Traducción del antiguo idioma scandinavo (D. A. de los Ríos., Trad.). Imprenta de la Esperanza.",
        ],
      },
    ],
  },
  {
    slug: "mujeres-vikingas",
    category: "Testimonio",
    author: "Gabo",
    title: "Mujeres en la sociedad vikinga",
    excerpt:
      "Guerreras, líderes y figuras clave: privilegios, derechos y el verdadero rol de las mujeres en el mundo nórdico.",
    image: "/Images/placeholder.png",
    content: [
      {
        type: "paragraph",
        text: "Los barcos vikingos fueron una de las principales herramientas de expansión del mundo nórdico.",
      },
      {
        type: "image",
        src: "/Images/barco-vikingo.jpg",
        alt: "Barco vikingo navegando en el mar",
        caption: "Representación visual de una embarcación vikinga.",
      },
    ],
  },
  {
    slug: "leif-eriksen",
    category: "Entrevista",
    author: "Cesar",
    title: "Conversación con Leif Eriksen",
    excerpt:
      "Una entrevista imaginaria con uno de los primeros europeos en llegar a América, explorando sus viajes, motivaciones y legado.",
    image: "/Images/placeholder.png",
    content: [
      {
        type: "paragraph",
        text: "Los barcos vikingos fueron una de las principales herramientas de expansión del mundo nórdico.",
      },
      {
        type: "image",
        src: "/Images/barco-vikingo.jpg",
        alt: "Barco vikingo navegando en el mar",
        caption: "Representación visual de una embarcación vikinga.",
      },
    ],
  },
];