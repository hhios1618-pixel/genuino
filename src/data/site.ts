import { mediaUrl } from "@/lib/supabase/media";

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9JyMwYjBiMGInLz48L3N2Zz4=";

export const ytThumb = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
export const ytWatch = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`;

/* Miniaturas con franjas negras de formato cine: se amplían para llenar el cuadro */
const letterboxed = ["Q9wHNUH1eq8"];
export const ytZoom = (source: string) => (letterboxed.some((id) => source.includes(id)) ? 1.34 : 1);

export const contact = {
  email: "contacto@genuino.studio",
  instagram: { label: "Instagram", handle: "@franggenuino_", href: "https://instagram.com/franggenuino_" },
  youtube: { label: "YouTube", handle: "@genuinomusic", href: "https://youtube.com/@genuinomusic" },
  base: "Valparaíso — Santiago, Chile",
};

export const navItems = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Música", href: "/sonido" },
  { label: "Video", href: "/video" },
  { label: "Fran G", href: "/perfil" },
];

/* Firma del estudio que construyó el sitio; los UTM le permiten medir el tráfico que llega desde aquí */
export const siteCredit = {
  studio: "Altius Ignite",
  href: "https://www.altiusignite.com/?utm_source=genuino.studio&utm_medium=referral&utm_campaign=site-credit",
};

export const legalLinks = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

const backstagePoster = "/videos/sueltate-ma-backstage-poster.jpg";

export const media = {
  backstage: "/videos/sueltate-ma-backstage.mp4",
  backstagePoster,
};

/* Nombres con los que Genuino Family ha trabajado. Solo nombres confirmados por el cliente. */
export const artistCredits = [
  "Antonio Ríos",
  "Diego Smith",
  "GO",
  "Arte Elegante",
  "Hermanos Bernal",
  "Campbell G",
  "Modo Avión",
  "Afy",
];

export const outlets = ["TVN", "Chilevisión", "Vía X", "Zona Latina", "TNT Sports Chile", "BioBioChile"];

/* Proyectos que rotan en la portada */
export const heroReel = [
  { title: "Ella Baila Sola", artist: "GO feat. Fran G Genuino", role: "Radio y Vía X", videoId: "Q9wHNUH1eq8" },
  { title: "Suéltate Ma", artist: "Diego Smith", role: "Producción general", videoId: "eyr_XP440kE" },
  { title: "Venimos de Abajo", artist: "Arte Elegante × Genuino", role: "Single", videoId: "zH5C4T0C-F0" },
  { title: "Nunca Me Faltes (Remix)", artist: "Antonio Ríos con Angie Tu Cumbiera", role: "Dirección general", videoId: "Ll-l9N5NmlM" },
];

/* ---------- Casos principales ---------- */

export const cases = [
  {
    title: "Antonio Ríos",
    artist: "TVN · Chilevisión · Vía X · Zona Latina · BioBioChile",
    year: "2026",
    role: "Gestión de medios",
    scope: ["Televisión abierta", "Cable", "Prensa digital"],
    summary:
      "Plan de medios del maestro de la cumbia en Chile: seis apariciones en 2026 entre televisión abierta, cable y prensa digital.",
    videoId: "7NX2r1ivKmw",
    /* Foto de set en televisión enviada por el cliente */
    poster: "/cases/antonio-rios-set-tv.jpg",
    /* Cada aparición se reproduce dentro de la tarjeta; la primera es la que parte por defecto */
    appearances: [
      { outlet: "Chilevisión", program: "Club de la Comedia", minutes: 14, videoId: "7NX2r1ivKmw" },
      { outlet: "TVN", program: "El Medio Día", minutes: 80, videoId: "LHANSquhxqU" },
      { outlet: "Vía X", program: "Todo Va a Estar Bien", minutes: 25, videoId: "qaFtLN4hHj4" },
      { outlet: "Zona Latina", program: "Sabores", minutes: 57, videoId: "jGvm9IxyigA" },
      { outlet: "BioBioChile", program: "Entrevista en estudio", minutes: 25, videoId: "TMhuls1tWnU" },
      { outlet: "Vía X", program: "Especial en vivo", minutes: 84, videoId: "5Rxye57JIGI" },
    ],
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    year: "2026",
    role: "Producción general",
    scope: ["Producción general", "Equipo y rodaje", "Campaña de salida"],
    summary:
      "Producción general del single y del videoclip: conformación de equipo, rodaje y plan de lanzamiento.",
    videoId: "eyr_XP440kE",
  },
  {
    title: "Nunca Me Faltes",
    subtitle: "Remix",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    year: "2025",
    role: "Dirección general",
    scope: ["Dirección del single", "Producción", "Videoclip"],
    summary:
      "Single de Antonio Ríos con Angie Tu Cumbiera, dirigido por Fran G Genuino de principio a fin: concepto, producción, videoclip y salida en medios.",
    videoId: "Ll-l9N5NmlM",
  },
  {
    title: "Ella Baila Sola",
    artist: "La Doble G — GO feat. Fran G Genuino",
    year: "2026",
    role: "Single y medios",
    scope: ["Voz", "Rotación radial", "Vía X"],
    summary:
      "Single de La Doble G, dúo de GO y Fran G Genuino. Rotación en radio y emisión en Vía X.",
    videoId: "Q9wHNUH1eq8",
  },
];

/* ---------- Catálogo de medios ---------- */

export const catalogFilters = ["Todo", "Radio", "TV", "Prensa", "Producción"] as const;
export type CatalogFilter = (typeof catalogFilters)[number];

export const catalog: {
  title: string;
  artist: string;
  work: string;
  tags: CatalogFilter[];
  videoId: string;
}[] = [
  {
    title: "El Medio Día",
    artist: "Antonio Ríos en TVN",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "LHANSquhxqU",
  },
  {
    title: "Club de la Comedia",
    artist: "Antonio Ríos en Chilevisión",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "7NX2r1ivKmw",
  },
  {
    title: "Todo Va a Estar Bien",
    artist: "Antonio Ríos en Vía X",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "qaFtLN4hHj4",
  },
  {
    title: "Todo Va a Estar Bien, en vivo",
    artist: "Antonio Ríos en Vía X",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "5Rxye57JIGI",
  },
  {
    title: "Sabores",
    artist: "Antonio Ríos en Zona Latina",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "jGvm9IxyigA",
  },
  {
    title: "Pelota Parada",
    artist: "Antonio Ríos en TNT Sports Chile",
    work: "Booking televisión",
    tags: ["TV"],
    videoId: "lgo_FxrWILk",
  },
  {
    title: "“Me siento amado en Chile”",
    artist: "Antonio Ríos en BioBioChile",
    work: "Entrevista y prensa",
    tags: ["Prensa"],
    videoId: "TMhuls1tWnU",
  },
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    work: "Radio y Vía X",
    tags: ["Radio", "TV"],
    videoId: "Q9wHNUH1eq8",
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    work: "Producción general",
    tags: ["Producción"],
    videoId: "eyr_XP440kE",
  },
  {
    title: "Nunca Me Faltes (Remix)",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    work: "Dirección general",
    tags: ["Producción"],
    videoId: "Ll-l9N5NmlM",
  },
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante × Genuino",
    work: "Single y radio",
    tags: ["Radio"],
    videoId: "zH5C4T0C-F0",
  },
  {
    title: "ULALA (Ooh La-La)",
    artist: "Myke Towers, Daddy Yankee",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "9k3wMoQn-DQ",
  },
  {
    title: "Se Lo Juro Mor",
    artist: "Feid",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "mJlE0RwK_OY",
  },
  {
    title: "Corleone",
    artist: "Saiko × Yandel",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "xVzbKU66eMQ",
  },
  {
    title: "Kilerito",
    artist: "Brytiago & Anuel AA",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "dhPcSr0ah38",
  },
  {
    title: "La Plena",
    artist: "Beéle, Westcol, Ovy On The Drums",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "F1_aOX0acbY",
  },
  {
    title: "Lunares",
    artist: "Servando & Florentino",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "-YkA-t8CIOI",
  },
  {
    title: "No Te Deseo el Mal",
    artist: "Eladio Carrión feat. Karol G",
    work: "Difusión radial",
    tags: ["Radio"],
    videoId: "ZPJN-aWvj_U",
  },
];

/* ---------- Servicios ---------- */

export const disciplines = [
  {
    index: "01",
    name: "Música",
    line: "Composición, producción, grabación, mezcla y máster.",
    body:
      "Desarrollo completo de la obra: letra y línea melódica, producción, dirección vocal y entrega de másteres para plataformas digitales y radio.",
    image: "/servicios/musica-estudio.jpg",
    imagePosition: "50% 22%",
    items: [
      {
        title: "Composición",
        detail: "Letra, línea melódica y estructura de la canción.",
      },
      {
        title: "Producción musical",
        detail: "Producción, arreglos y dirección de sesión.",
      },
      {
        title: "Grabación y edición vocal",
        detail: "Dirección de voz, comping, afinación y edición.",
      },
      {
        title: "Mezcla y máster",
        detail: "Másteres para plataformas digitales y versión para radio.",
      },
    ],
  },
  {
    index: "02",
    name: "Imagen",
    line: "Videoclips, contenido y dirección de arte.",
    body:
      "Producción audiovisual para lanzamientos: guion, rodaje, postproducción y piezas para plataformas digitales.",
    image: "/servicios/imagen-rodaje.jpg",
    imagePosition: "50% 60%",
    items: [
      {
        title: "Videoclips",
        detail: "Guion, dirección, producción y postproducción.",
      },
      {
        title: "Contenido de lanzamiento",
        detail: "Adelantos, backstage y piezas verticales para redes sociales.",
      },
      {
        title: "Dirección artística",
        detail: "Concepto visual e imagen del artista para cada etapa del lanzamiento.",
      },
    ],
  },
  {
    index: "03",
    name: "Medios",
    line: "Radio, televisión y prensa.",
    body:
      "Gestión de medios en Chile: difusión radial, apariciones en televisión, entrevistas y prensa.",
    image: "/servicios/medios-set-tv.jpg",
    imagePosition: "50% 38%",
    items: [
      {
        title: "Booking radial",
        detail: "Presentación a radios nacionales y seguimiento de rotación.",
      },
      {
        title: "Televisión y prensa",
        detail: "Gestión de apariciones y entrevistas en medios nacionales.",
      },
      {
        title: "Plan de lanzamiento",
        detail: "Calendario, piezas y medios coordinados en una estrategia de salida.",
      },
    ],
  },
  {
    index: "04",
    name: "Management",
    line: "Desarrollo artístico, colaboraciones y logística.",
    body:
      "Acompañamiento de carrera para artistas en desarrollo y consolidados: repertorio, colaboraciones, negociación y logística.",
    image: "/servicios/management-mercado-central.jpg",
    imagePosition: "50% 40%",
    items: [
      {
        title: "Desarrollo de artistas",
        detail: "Repertorio, imagen y planificación de lanzamientos.",
      },
      {
        title: "Colaboraciones",
        detail: "Vinculación con artistas, productores, directores y sellos.",
      },
      {
        title: "Logística y negociación",
        detail: "Coordinación de equipos, proveedores, fechas y acuerdos.",
      },
    ],
  },
];

export const process = [
  {
    index: "01",
    title: "Diagnóstico",
    body: "Revisión del material, del momento del artista y de los objetivos del lanzamiento.",
  },
  {
    index: "02",
    title: "Propuesta",
    body: "Alcance, equipo, calendario y presupuesto.",
  },
  {
    index: "03",
    title: "Producción",
    body: "Música, audiovisual y contenidos.",
  },
  {
    index: "04",
    title: "Lanzamiento",
    body: "Estreno y gestión en radio, televisión y prensa, con seguimiento posterior.",
  },
];

export const serviceOptions = [
  "Canción / producción",
  "Mezcla y máster",
  "Videoclip",
  "Contenido de lanzamiento",
  "Radio y medios",
  "Management",
  "Prensa / booking",
  "Otro",
];

/* ---------- Trayectoria de Fran G Genuino ---------- */

export const timeline = [
  {
    mark: "14",
    unit: "años",
    title: "Balmaceda 1215",
    body: "Formación musical en Balmaceda 1215, Santiago.",
  },
  {
    mark: "JF2",
    title: "Lirical Templo",
    body: "Su grupo edita un disco con Warner Music, distribuido en Chile, Estados Unidos y España.",
  },
  {
    mark: "2007",
    title: "Solista",
    body: "Comienza su carrera como Fran G Genuino.",
  },
  {
    mark: "2015",
    title: "Caribe",
    body: "Con Vladi Cachai, DW y Solo di Medina.",
    videoId: "0cJH7mw8dKM",
  },
  {
    mark: "10",
    unit: "países",
    title: "Gira",
    body: "Estados Unidos, Suecia, Dinamarca, Perú, Argentina, Uruguay, Bolivia, México, Canadá y Colombia.",
    videoId: "uKG4RBnhghE",
  },
  {
    mark: "2022",
    title: "Venimos de Abajo",
    body: "Single y video oficial con Arte Elegante.",
    videoId: "zH5C4T0C-F0",
  },
  {
    mark: "2023",
    title: "Genuino Family",
    body: "Fundación de la productora, en agosto de 2023.",
  },
  {
    mark: "Hoy",
    title: "Antonio Ríos, Diego Smith, GO",
    body: "Producción general, dirección de singles y gestión de medios en TVN, Chilevisión y Vía X.",
    videoId: "Ll-l9N5NmlM",
  },
];

/* ---------- Música y video ---------- */

export const releases = [
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    note: "La Doble G. Radio y Vía X.",
    videoId: "Q9wHNUH1eq8",
    byFran: true,
  },
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante × Genuino",
    note: "Single y video oficial, 2022.",
    videoId: "zH5C4T0C-F0",
    byFran: true,
  },
  {
    title: "Lejos de Ti",
    artist: "Hermanos Bernal feat. Genuino",
    note: "Grabado en Suecia.",
    videoId: "uKG4RBnhghE",
    byFran: true,
  },
  {
    title: "Historia",
    artist: "Genuino × Campbell G",
    note: "Video oficial.",
    videoId: "aJG0zRex7EU",
    byFran: true,
  },
  {
    title: "Diosa",
    artist: "Genuino × Campbell G",
    note: "Video oficial.",
    videoId: "IMRNuKaX9qM",
    byFran: true,
  },
  {
    title: "Champagne",
    artist: "Fran G Genuino feat. Afy",
    note: "Video oficial.",
    videoId: "bPJhFwQz_Ok",
    byFran: true,
  },
  {
    title: "Pensándote",
    artist: "Fran G Genuino",
    note: "Lyric video.",
    videoId: "BJMqy8UdpK8",
    byFran: true,
  },
  {
    title: "Caribe",
    artist: "Vladi Cachai × DW × Solo di Medina × Fran G",
    note: "Video oficial, 2015.",
    videoId: "0cJH7mw8dKM",
    byFran: true,
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    note: "Producción general de Genuino Family.",
    videoId: "eyr_XP440kE",
    byFran: false,
  },
  {
    title: "Nunca Me Faltes (Remix)",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    note: "Dirección general de Fran G Genuino.",
    videoId: "Ll-l9N5NmlM",
    byFran: false,
  },
];

/* Registro de estudio y rodaje. Los clips viven en Supabase; si no cargan, se muestra el poster. */
export const reels = [
  {
    title: "Cocoa Record Studio",
    caption: "Antonio Ríos, Oreken el Track y Fran G Genuino.",
    src: mediaUrl("videos/cocoa-record-studio.mp4", media.backstage),
    poster: "/registro/cocoa-record-studio.jpg",
  },
  {
    title: "Rodaje Suéltate Ma",
    caption: "Diego Smith. Rodaje del videoclip.",
    src: media.backstage,
    poster: backstagePoster,
  },
  {
    title: "Sesión de estudio",
    caption: "Sesión de grabación.",
    src: mediaUrl("videos/studio-session.mp4", media.backstage),
    poster: ytThumb("bPJhFwQz_Ok"),
  },
  {
    title: "Modo Avión",
    caption: "Pieza vertical.",
    src: mediaUrl("videos/modo-avion.mp4", media.backstage),
    poster: ytThumb("IMRNuKaX9qM"),
  },
  {
    title: "Nuevo paso",
    caption: "Fran G Genuino.",
    src: mediaUrl("videos/nuevo-paso.mp4", media.backstage),
    poster: ytThumb("aJG0zRex7EU"),
  },
];

/* Fotografía de terreno: set de televisión, estudio y rodajes */
export const fieldPhotos = [
  {
    src: "/servicios/medios-set-tv.jpg",
    title: "Set de televisión",
    caption: "Antonio Ríos antes de salir al aire.",
    position: "50% 40%",
  },
  {
    src: "/registro/antonio-rios-estudio.jpg",
    title: "Estudio",
    caption: "Antonio Ríos entre tomas.",
    position: "50% 30%",
  },
  {
    src: "/registro/antonio-rios-mercado-central.jpg",
    title: "Mercado Central",
    caption: "Antonio Ríos en terreno, Santiago.",
    position: "50% 35%",
  },
  {
    src: "/registro/set-videoclip.jpg",
    title: "Set de videoclip",
    caption: "Elenco en set, antes de rodar.",
    position: "50% 40%",
  },
  {
    src: "/registro/foto-fija-rodaje.jpg",
    title: "Foto fija",
    caption: "Revisión de cámara durante el rodaje.",
    position: "50% 35%",
  },
  {
    src: "/registro/backstage-show.jpg",
    title: "Backstage",
    caption: "Minutos antes de subir al escenario.",
    position: "50% 30%",
  },
];

export const liveSession = {
  title: "Suéltate Ma en vivo",
  src: mediaUrl("videos/sueltate-ma-live.mp4", media.backstage),
  poster: ytThumb("eyr_XP440kE"),
};

export const profileImages = {
  studio: {
    src: "/profile/fran-g-studio-console.jpg",
    alt: "Fran G Genuino frente a la consola de su estudio",
  },
  street: {
    src: "/profile/fran-g-street-valparaiso.jpg",
    alt: "Fran G Genuino en la calle, en Valparaíso",
  },
};
