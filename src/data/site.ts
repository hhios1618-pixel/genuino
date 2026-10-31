import type { L } from "@/i18n";
import { mediaUrl } from "@/lib/supabase/media";

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9JyMwYjBiMGInLz48L3N2Zz4=";

/* Videos sin miniatura en máxima calidad: se usa la siguiente disponible */
const noMaxres = ["nyTFrpVucUY", "aNly-s3WQBQ", "0I2huXieZhg"];
export const ytThumb = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/${noMaxres.includes(videoId) ? "sddefault" : "maxresdefault"}.jpg`;
export const ytWatch = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`;

/* Miniaturas con franjas negras de formato cine: se amplían para llenar el cuadro */
const letterboxed = ["Q9wHNUH1eq8", "0cJH7mw8dKM"];
export const ytZoom = (source: string) => (letterboxed.some((id) => source.includes(id)) ? 1.34 : 1);

export const contact = {
  email: "contacto@genuinofamily.cl",
  instagram: { label: "Instagram", handle: "@genuinofam", href: "https://instagram.com/genuinofam" },
  youtube: { label: "YouTube", handle: "@genuinomusic", href: "https://youtube.com/@genuinomusic" },
  base: "Valparaíso — Santiago, Chile",
};

export const navItems = [
  { label: { es: "Proyectos", en: "Projects" }, href: "/proyectos" },
  { label: { es: "Servicios", en: "Services" }, href: "/servicios" },
  { label: { es: "Música", en: "Music" }, href: "/sonido" },
  { label: { es: "Video", en: "Video" }, href: "/video" },
  { label: { es: "Fran G", en: "Fran G" }, href: "/perfil" },
];

export const contactNav = { label: { es: "Contacto", en: "Contact" }, href: "/contacto" };

/* Firma del estudio que construyó el sitio; los UTM le permiten medir el tráfico que llega desde aquí */
export const siteCredit = {
  studio: "Altius Ignite",
  href: "https://www.altiusignite.com/?utm_source=genuinofamily.cl&utm_medium=referral&utm_campaign=site-credit",
};

export const legalLinks = [
  { label: { es: "Privacidad", en: "Privacy" }, href: "/privacidad" },
  { label: { es: "Términos", en: "Terms" }, href: "/terminos" },
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
  "Vallejo 777",
];

export const outlets = ["TVN", "Chilevisión", "Vía X", "Zona Latina", "TNT Sports Chile", "BioBioChile"];

/* Roles que se repiten en portada, casos y catálogo */
const role = {
  production: { es: "Producción general", en: "Lead production" },
  direction: { es: "Dirección general", en: "Creative direction" },
  radio: { es: "Difusión radial", en: "Radio promotion" },
  tvBooking: { es: "Booking televisión", en: "TV booking" },
  radioViaX: { es: "Radio y Vía X", en: "Radio & Vía X" },
} satisfies Record<string, L>;

/* Proyectos que rotan en la portada */
export const heroReel: { title: string; artist: string; role: L; videoId: string }[] = [
  { title: "Around the Sky", artist: "Diego Smith", role: role.production, videoId: "2SsfMbwrMtg" },
  {
    title: "Negra Tomasa",
    artist: "Antonio Ríos × Genuino × Soy GO × Oreck",
    role: { es: "Música, video y medios", en: "Music, video & media" },
    videoId: "dNjJJdlnnso",
  },
  { title: "Ella Baila Sola", artist: "GO feat. Fran G Genuino", role: role.radioViaX, videoId: "Q9wHNUH1eq8" },
  { title: "Suéltate Ma", artist: "Diego Smith", role: role.production, videoId: "eyr_XP440kE" },
  { title: "Venimos de Abajo", artist: "Arte Elegante × Genuino", role: { es: "Single", en: "Single" }, videoId: "zH5C4T0C-F0" },
  { title: "Nunca Me Faltes (Remix)", artist: "Antonio Ríos con Angie Tu Cumbiera", role: role.direction, videoId: "Ll-l9N5NmlM" },
];

/* ---------- Casos principales ---------- */

export const cases: {
  title: string;
  subtitle?: string;
  artist: string | L;
  year: string;
  role: L;
  scope: L[];
  summary: L;
  videoId: string;
  poster?: string;
  appearances?: { outlet: string; program: string | L; minutes: number; videoId: string }[];
}[] = [
  {
    title: "Antonio Ríos",
    artist: "TVN · Chilevisión · Vía X · Zona Latina · BioBioChile",
    year: "2026",
    role: { es: "Gestión de medios", en: "Media relations" },
    scope: [
      { es: "Televisión abierta", en: "Network TV" },
      { es: "Cable", en: "Cable" },
      { es: "Prensa digital", en: "Digital press" },
    ],
    summary: {
      es: "Plan de medios del maestro de la cumbia en Chile: seis apariciones en 2026 entre televisión abierta, cable y prensa digital.",
      en: "Media campaign for the master of cumbia in Chile: six appearances in 2026 across network TV, cable and digital press.",
    },
    videoId: "7NX2r1ivKmw",
    /* Foto de set en televisión enviada por el cliente */
    poster: "/cases/antonio-rios-set-tv.jpg",
    /* Cada aparición se reproduce dentro de la tarjeta; la primera es la que parte por defecto */
    appearances: [
      { outlet: "Chilevisión", program: "Club de la Comedia", minutes: 14, videoId: "7NX2r1ivKmw" },
      { outlet: "TVN", program: "El Medio Día", minutes: 80, videoId: "LHANSquhxqU" },
      { outlet: "Vía X", program: "Todo Va a Estar Bien", minutes: 25, videoId: "qaFtLN4hHj4" },
      { outlet: "Zona Latina", program: "Sabores", minutes: 57, videoId: "jGvm9IxyigA" },
      {
        outlet: "BioBioChile",
        program: { es: "Entrevista en estudio", en: "In-studio interview" },
        minutes: 25,
        videoId: "TMhuls1tWnU",
      },
      { outlet: "Vía X", program: { es: "Especial en vivo", en: "Live special" }, minutes: 84, videoId: "5Rxye57JIGI" },
    ],
  },
  {
    title: "Caribe",
    artist: "Fran G Genuino feat. Solo di Medina & DW",
    year: "2015",
    role: role.production,
    scope: [
      { es: "Producción general", en: "Lead production" },
      { es: "Videoclip", en: "Music video" },
      { es: "Medios", en: "Media" },
      { es: "Conexión de artistas", en: "Artist collaboration" },
    ],
    summary: {
      es: "Uno de los singles principales de Fran G Genuino. La producción general del tema, el videoclip, la salida en medios y la conexión de los artistas estuvieron a cargo de Fran G.",
      en: "One of Fran G Genuino’s signature singles. Fran G led the track’s overall production, the music video, the media rollout and brought the artists together.",
    },
    videoId: "0cJH7mw8dKM",
  },
  {
    title: "Around the Sky",
    artist: "Diego Smith",
    year: "2026",
    role: role.production,
    scope: [
      { es: "Producción general y técnica", en: "Lead & technical production" },
      { es: "Producción ejecutiva", en: "Executive production" },
      { es: "Videoclip oficial", en: "Official music video" },
    ],
    summary: {
      es: "Producción general, técnica y ejecutiva del videoclip oficial de Diego Smith, junto a Touchsky Films en la dirección y Shash Crew en la producción ejecutiva.",
      en: "Lead, technical and executive production of Diego Smith’s official music video, with Touchsky Films directing and Shash Crew on executive production.",
    },
    videoId: "2SsfMbwrMtg",
  },
  {
    title: "Negra Tomasa",
    artist: "Antonio Ríos × Genuino × Soy GO × Oreck",
    year: "2026",
    role: { es: "Música, video y medios", en: "Music, video & media" },
    scope: [
      { es: "Conexión de artistas", en: "Artist collaboration" },
      { es: "Música y voz", en: "Music & vocals" },
      { es: "Videoclip", en: "Music video" },
      { es: "Medios", en: "Media" },
    ],
    summary: {
      es: "Fran G Genuino reunió a Antonio Ríos, Soy GO y Oreck, y se hizo cargo de la música, el video y la salida en medios. También canta en el tema.",
      en: "Fran G Genuino brought Antonio Ríos, Soy GO and Oreck together, then led the music, the video and the media rollout. He also sings on the track.",
    },
    videoId: "dNjJJdlnnso",
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    year: "2026",
    role: role.production,
    scope: [
      { es: "Producción general", en: "Lead production" },
      { es: "Equipo y rodaje", en: "Crew & shoot" },
      { es: "Campaña de salida", en: "Release campaign" },
    ],
    summary: {
      es: "Producción general del single y del videoclip: conformación de equipo, rodaje y plan de lanzamiento.",
      en: "Lead production of the single and its music video: crew, shoot and release plan.",
    },
    videoId: "eyr_XP440kE",
  },
  {
    title: "Nunca Me Faltes",
    subtitle: "Remix",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    year: "2025",
    role: role.direction,
    scope: [
      { es: "Dirección del single", en: "Single direction" },
      { es: "Producción", en: "Production" },
      { es: "Videoclip", en: "Music video" },
    ],
    summary: {
      es: "Single de Antonio Ríos con Angie Tu Cumbiera, dirigido por Fran G Genuino de principio a fin: concepto, producción, videoclip y salida en medios.",
      en: "Antonio Ríos’s single with Angie Tu Cumbiera, directed end to end by Fran G Genuino: concept, production, music video and media rollout.",
    },
    videoId: "Ll-l9N5NmlM",
  },
  {
    title: "Ella Baila Sola",
    artist: "La Doble G — GO feat. Fran G Genuino",
    year: "2026",
    role: { es: "Single y medios", en: "Single & media" },
    scope: [
      { es: "Voz", en: "Vocals" },
      { es: "Rotación radial", en: "Radio rotation" },
      { es: "Vía X", en: "Vía X" },
    ],
    summary: {
      es: "Single de La Doble G, dúo de GO y Fran G Genuino. Rotación en radio y emisión en Vía X.",
      en: "Single by La Doble G, the duo of GO and Fran G Genuino. Radio rotation and airplay on Vía X.",
    },
    videoId: "Q9wHNUH1eq8",
  },
];

/* ---------- Catálogo de medios ---------- */

export const catalogFilters = ["Todo", "Radio", "TV", "Prensa", "Producción"] as const;
export type CatalogFilter = (typeof catalogFilters)[number];
export const catalogFilterLabels: Record<CatalogFilter, L> = {
  Todo: { es: "Todo", en: "All" },
  Radio: { es: "Radio", en: "Radio" },
  TV: { es: "TV", en: "TV" },
  Prensa: { es: "Prensa", en: "Press" },
  Producción: { es: "Producción", en: "Production" },
};

export const catalog: {
  title: string | L;
  artist: string | L;
  work: L;
  tags: CatalogFilter[];
  videoId: string;
}[] = [
  {
    title: "El Medio Día",
    artist: { es: "Antonio Ríos en TVN", en: "Antonio Ríos on TVN" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "LHANSquhxqU",
  },
  {
    title: "Club de la Comedia",
    artist: { es: "Antonio Ríos en Chilevisión", en: "Antonio Ríos on Chilevisión" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "7NX2r1ivKmw",
  },
  {
    title: "Todo Va a Estar Bien",
    artist: { es: "Antonio Ríos en Vía X", en: "Antonio Ríos on Vía X" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "qaFtLN4hHj4",
  },
  {
    title: { es: "Todo Va a Estar Bien, en vivo", en: "Todo Va a Estar Bien, live" },
    artist: { es: "Antonio Ríos en Vía X", en: "Antonio Ríos on Vía X" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "5Rxye57JIGI",
  },
  {
    title: "Sabores",
    artist: { es: "Antonio Ríos en Zona Latina", en: "Antonio Ríos on Zona Latina" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "jGvm9IxyigA",
  },
  {
    title: "Pelota Parada",
    artist: { es: "Antonio Ríos en TNT Sports Chile", en: "Antonio Ríos on TNT Sports Chile" },
    work: role.tvBooking,
    tags: ["TV"],
    videoId: "lgo_FxrWILk",
  },
  {
    title: { es: "“Me siento amado en Chile”", en: "“I Feel Loved in Chile”" },
    artist: { es: "Antonio Ríos en BioBioChile", en: "Antonio Ríos on BioBioChile" },
    work: { es: "Entrevista y prensa", en: "Interview & press" },
    tags: ["Prensa"],
    videoId: "TMhuls1tWnU",
  },
  {
    title: "Negra Tomasa",
    artist: "Antonio Ríos × Genuino × Soy GO × Oreck",
    work: { es: "Conexión, música, video, voz y medios", en: "Collab, music, video, vocals & media" },
    tags: ["Producción", "Radio", "Prensa"],
    videoId: "dNjJJdlnnso",
  },
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    work: { es: "Single, radio y Vía X", en: "Single, radio & Vía X" },
    tags: ["Producción", "Radio", "TV"],
    videoId: "Q9wHNUH1eq8",
  },
  {
    title: "Around the Sky",
    artist: "Diego Smith",
    work: role.production,
    tags: ["Producción"],
    videoId: "2SsfMbwrMtg",
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    work: role.production,
    tags: ["Producción"],
    videoId: "eyr_XP440kE",
  },
  {
    title: "Nunca Me Faltes (Remix)",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    work: role.direction,
    tags: ["Producción"],
    videoId: "Ll-l9N5NmlM",
  },
  {
    title: "Caribe",
    artist: "Fran G Genuino feat. Solo di Medina & DW",
    work: { es: "Producción general, videoclip y medios", en: "Lead production, music video & media" },
    tags: ["Producción"],
    videoId: "0cJH7mw8dKM",
  },
  {
    title: "Historia",
    artist: "Genuino × Campbell G",
    work: { es: "Video en Miami, producido en Chile", en: "Shot in Miami, produced in Chile" },
    tags: ["Producción"],
    videoId: "aJG0zRex7EU",
  },
  {
    title: "Lejos de Ti",
    artist: "Hermanos Bernal feat. Genuino",
    work: { es: "Single grabado en Suecia", en: "Single recorded in Sweden" },
    tags: ["Producción"],
    videoId: "uKG4RBnhghE",
  },
  {
    title: "Diosa",
    artist: "Genuino × Campbell G",
    work: { es: "Single y video oficial", en: "Single & official video" },
    tags: ["Producción"],
    videoId: "IMRNuKaX9qM",
  },
  {
    title: "Champagne",
    artist: "Fran G Genuino feat. Afy",
    work: { es: "Single y video oficial", en: "Single & official video" },
    tags: ["Producción"],
    videoId: "bPJhFwQz_Ok",
  },
  {
    title: "Pensándote",
    artist: "Fran G Genuino",
    work: { es: "Single y lyric video", en: "Single & lyric video" },
    tags: ["Producción"],
    videoId: "BJMqy8UdpK8",
  },
  {
    title: "No, No, No",
    artist: "Blue Mary feat. Rami, DW & Genuino",
    work: { es: "Conexión, composición e interpretación", en: "Collab, songwriting & performance" },
    tags: ["Producción"],
    videoId: "Yt6wtTU5Eb8",
  },
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante × Genuino",
    work: { es: "Single, video y radio", en: "Single, video & radio" },
    tags: ["Producción", "Radio"],
    videoId: "zH5C4T0C-F0",
  },
  {
    title: "Un Regalo (Remix)",
    artist: "Arte Elegante & Mayel Jiménez",
    work: role.radio,
    tags: ["Radio"],
    videoId: "TVKexFEsf6M",
  },
  {
    title: "Dándole",
    artist: "Arte Elegante & AK4:20",
    work: role.radio,
    tags: ["Radio"],
    videoId: "teyyiHkEwqY",
  },
  {
    title: "Bandida",
    artist: "Vallejo 777",
    work: { es: "Difusión radial · N.º 1 en Chile", en: "Radio promotion · #1 in Chile" },
    tags: ["Radio"],
    videoId: "aNly-s3WQBQ",
  },
  {
    title: "Weekend",
    artist: "Vallejo 777",
    work: { es: "Difusión radial · N.º 1 en Chile", en: "Radio promotion · #1 in Chile" },
    tags: ["Radio"],
    videoId: "CbR3gr1kHxI",
  },
  {
    title: "Adicta al Perreo",
    artist: "Fariana",
    work: role.radio,
    tags: ["Radio"],
    videoId: "0I2huXieZhg",
  },
  {
    title: "Feel the Fire",
    artist: "Eterno Packto",
    work: role.radio,
    tags: ["Radio"],
    videoId: "c-4WXFScpLQ",
  },
  {
    title: "TQMQA",
    artist: "Eladio Carrión",
    work: { es: "Radio y prensa", en: "Radio & press" },
    tags: ["Radio", "Prensa"],
    videoId: "EXyzhaakdVg",
  },
  {
    title: "Brickell",
    artist: "Feid, Yandel",
    work: { es: "Radio y medios", en: "Radio & media" },
    tags: ["Radio", "Prensa"],
    videoId: "2p6O7EmroEs",
  },
  {
    title: "Cartas Sobre la Mesa",
    artist: "Gilberto Santa Rosa",
    work: role.radio,
    tags: ["Radio"],
    videoId: "nyTFrpVucUY",
  },
  {
    title: "ULALA (Ooh La-La)",
    artist: "Myke Towers, Daddy Yankee",
    work: role.radio,
    tags: ["Radio"],
    videoId: "9k3wMoQn-DQ",
  },
  {
    title: "Se Lo Juro Mor",
    artist: "Feid",
    work: role.radio,
    tags: ["Radio"],
    videoId: "mJlE0RwK_OY",
  },
  {
    title: "Corleone",
    artist: "Saiko × Yandel",
    work: role.radio,
    tags: ["Radio"],
    videoId: "xVzbKU66eMQ",
  },
  {
    title: "Kilerito",
    artist: "Brytiago & Anuel AA",
    work: role.radio,
    tags: ["Radio"],
    videoId: "dhPcSr0ah38",
  },
  {
    title: "La Plena",
    artist: "Beéle, Westcol, Ovy On The Drums",
    work: role.radio,
    tags: ["Radio"],
    videoId: "F1_aOX0acbY",
  },
  {
    title: "Lunares",
    artist: "Servando & Florentino",
    work: role.radio,
    tags: ["Radio"],
    videoId: "-YkA-t8CIOI",
  },
  {
    title: "No Te Deseo el Mal",
    artist: "Eladio Carrión feat. Karol G",
    work: role.radio,
    tags: ["Radio"],
    videoId: "ZPJN-aWvj_U",
  },
];

/* ---------- Servicios ---------- */

export const disciplines: {
  index: string;
  name: L;
  line: L;
  body: L;
  image: string;
  imagePosition: string;
  items: { title: L; detail: L }[];
}[] = [
  {
    index: "01",
    name: { es: "Música", en: "Music" },
    line: {
      es: "Composición, producción, grabación, mezcla y máster.",
      en: "Songwriting, production, recording, mixing and mastering.",
    },
    body: {
      es: "Desarrollo completo de la obra: letra y línea melódica, producción, dirección vocal y entrega de másteres para plataformas digitales y radio.",
      en: "The whole song, start to finish: lyrics and melody, production, vocal direction and masters delivered for streaming and radio.",
    },
    image: "/servicios/musica-estudio.jpg",
    imagePosition: "50% 22%",
    items: [
      {
        title: { es: "Composición", en: "Songwriting" },
        detail: { es: "Letra, línea melódica y estructura de la canción.", en: "Lyrics, melody and song structure." },
      },
      {
        title: { es: "Producción musical", en: "Music production" },
        detail: { es: "Producción, arreglos y dirección de sesión.", en: "Production, arrangements and session direction." },
      },
      {
        title: { es: "Grabación y edición vocal", en: "Vocal recording & editing" },
        detail: {
          es: "Dirección de voz, comping, afinación y edición.",
          en: "Vocal direction, comping, tuning and editing.",
        },
      },
      {
        title: { es: "Mezcla y máster", en: "Mixing & mastering" },
        detail: {
          es: "Másteres para plataformas digitales y versión para radio.",
          en: "Streaming-ready masters plus a radio edit.",
        },
      },
    ],
  },
  {
    index: "02",
    name: { es: "Imagen", en: "Visuals" },
    line: {
      es: "Videoclips, contenido y dirección de arte.",
      en: "Music videos, content and art direction.",
    },
    body: {
      es: "Producción audiovisual para lanzamientos: guion, rodaje, postproducción y piezas para plataformas digitales.",
      en: "Video production for releases: script, shoot, post-production and assets for every platform.",
    },
    image: "/servicios/imagen-rodaje.jpg",
    imagePosition: "50% 60%",
    items: [
      {
        title: { es: "Videoclips", en: "Music videos" },
        detail: {
          es: "Guion, dirección, producción y postproducción.",
          en: "Script, direction, production and post-production.",
        },
      },
      {
        title: { es: "Contenido de lanzamiento", en: "Release content" },
        detail: {
          es: "Adelantos, backstage y piezas verticales para redes sociales.",
          en: "Teasers, behind-the-scenes and vertical cuts for social media.",
        },
      },
      {
        title: { es: "Dirección artística", en: "Art direction" },
        detail: {
          es: "Concepto visual e imagen del artista para cada etapa del lanzamiento.",
          en: "Visual concept and artist image for every stage of the release.",
        },
      },
    ],
  },
  {
    index: "03",
    name: { es: "Medios", en: "Media" },
    line: { es: "Radio, televisión y prensa.", en: "Radio, TV and press." },
    body: {
      es: "Gestión de medios en Chile: difusión radial, apariciones en televisión, entrevistas y prensa.",
      en: "Media relations in Chile: radio promotion, TV appearances, interviews and press.",
    },
    image: "/servicios/medios-set-tv.jpg",
    imagePosition: "50% 38%",
    items: [
      {
        title: { es: "Booking radial", en: "Radio promotion" },
        detail: {
          es: "Presentación a radios nacionales y seguimiento de rotación.",
          en: "Pitching to national radio and tracking rotation.",
        },
      },
      {
        title: { es: "Televisión y prensa", en: "TV & press" },
        detail: {
          es: "Gestión de apariciones y entrevistas en medios nacionales.",
          en: "Booking appearances and interviews with national outlets.",
        },
      },
      {
        title: { es: "Plan de lanzamiento", en: "Release plan" },
        detail: {
          es: "Calendario, piezas y medios coordinados en una estrategia de salida.",
          en: "Timeline, assets and media coordinated into one rollout strategy.",
        },
      },
    ],
  },
  {
    index: "04",
    name: { es: "Management", en: "Management" },
    line: {
      es: "Desarrollo artístico, colaboraciones y logística.",
      en: "Artist development, collaborations and logistics.",
    },
    body: {
      es: "Acompañamiento de carrera para artistas en desarrollo y consolidados: repertorio, colaboraciones, negociación y logística.",
      en: "Career support for emerging and established artists: repertoire, collaborations, deal-making and logistics.",
    },
    image: "/servicios/management-mercado-central.jpg",
    imagePosition: "50% 40%",
    items: [
      {
        title: { es: "Desarrollo de artistas", en: "Artist development" },
        detail: {
          es: "Repertorio, imagen y planificación de lanzamientos.",
          en: "Repertoire, image and release planning.",
        },
      },
      {
        title: { es: "Colaboraciones", en: "Collaborations" },
        detail: {
          es: "Vinculación con artistas, productores, directores y sellos.",
          en: "Connections with artists, producers, directors and labels.",
        },
      },
      {
        title: { es: "Logística y negociación", en: "Logistics & deals" },
        detail: {
          es: "Coordinación de equipos, proveedores, fechas y acuerdos.",
          en: "Coordinating crews, vendors, dates and agreements.",
        },
      },
    ],
  },
];

export const process: { index: string; title: L; body: L }[] = [
  {
    index: "01",
    title: { es: "Diagnóstico", en: "Discovery" },
    body: {
      es: "Revisión del material, del momento del artista y de los objetivos del lanzamiento.",
      en: "We review the material, where the artist is right now and what the release needs to achieve.",
    },
  },
  {
    index: "02",
    title: { es: "Propuesta", en: "Proposal" },
    body: { es: "Alcance, equipo, calendario y presupuesto.", en: "Scope, team, timeline and budget." },
  },
  {
    index: "03",
    title: { es: "Producción", en: "Production" },
    body: { es: "Música, audiovisual y contenidos.", en: "Music, video and content." },
  },
  {
    index: "04",
    title: { es: "Lanzamiento", en: "Release" },
    body: {
      es: "Estreno y gestión en radio, televisión y prensa, con seguimiento posterior.",
      en: "Premiere plus radio, TV and press, with follow-up after launch.",
    },
  },
];

/* El valor en español es el que llega en la solicitud, sea cual sea el idioma del formulario */
export const serviceOptions: L[] = [
  { es: "Canción / producción", en: "Song / production" },
  { es: "Mezcla y máster", en: "Mixing & mastering" },
  { es: "Videoclip", en: "Music video" },
  { es: "Contenido de lanzamiento", en: "Release content" },
  { es: "Radio y medios", en: "Radio & media" },
  { es: "Management", en: "Management" },
  { es: "Prensa / booking", en: "Press / booking" },
  { es: "Otro", en: "Other" },
];

/* ---------- Trayectoria de Fran G Genuino ---------- */

export const timeline: { mark: string | L; unit?: L; title: string | L; body: L; videoId?: string; family?: boolean }[] = [
  {
    mark: "14",
    unit: { es: "años", en: "years old" },
    title: "Balmaceda 1215",
    body: { es: "Formación musical en Balmaceda 1215, Santiago.", en: "Music training at Balmaceda 1215, Santiago." },
  },
  {
    mark: "JF2",
    title: "Lirical Templo",
    body: {
      es: "Su grupo edita un disco con Warner Music, distribuido en Chile, Estados Unidos y España.",
      en: "His group releases an album with Warner Music, distributed in Chile, the US and Spain.",
    },
  },
  {
    mark: "2007",
    title: { es: "Solista", en: "Solo career" },
    body: { es: "Comienza su carrera como Fran G Genuino.", en: "Launches his career as Fran G Genuino." },
  },
  {
    mark: "2015",
    title: "Caribe",
    body: {
      es: "Single con Solo di Medina y DW: producción general, videoclip y medios de Fran G.",
      en: "Single with Solo di Medina and DW: lead production, music video and media by Fran G.",
    },
    videoId: "0cJH7mw8dKM",
  },
  {
    mark: "10",
    unit: { es: "países", en: "countries" },
    title: { es: "Gira", en: "On tour" },
    body: {
      es: "Estados Unidos, Suecia, Dinamarca, Perú, Argentina, Uruguay, Bolivia, México, Canadá y Colombia.",
      en: "United States, Sweden, Denmark, Peru, Argentina, Uruguay, Bolivia, Mexico, Canada and Colombia.",
    },
    videoId: "uKG4RBnhghE",
  },
  {
    mark: "2022",
    title: "Venimos de Abajo",
    body: { es: "Single y video oficial con Arte Elegante.", en: "Single and official video with Arte Elegante." },
    videoId: "zH5C4T0C-F0",
  },
  {
    mark: "2023",
    title: "Genuino Family",
    body: { es: "Fundación de la productora, en agosto de 2023.", en: "Founds the production company in August 2023." },
    family: true,
  },
  {
    mark: { es: "Hoy", en: "Now" },
    title: "Antonio Ríos, Diego Smith, GO",
    body: {
      es: "Producción general, dirección de singles y gestión de medios en TVN, Chilevisión y Vía X.",
      en: "Lead production, single direction and media relations on TVN, Chilevisión and Vía X.",
    },
    videoId: "Ll-l9N5NmlM",
  },
];

/* ---------- Música y video ---------- */

export const releases: { title: string; artist: string; note: L; videoId: string; byFran: boolean }[] = [
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    note: { es: "La Doble G. Radio y Vía X.", en: "La Doble G. Radio & Vía X." },
    videoId: "Q9wHNUH1eq8",
    byFran: true,
  },
  {
    title: "Negra Tomasa",
    artist: "Antonio Ríos × Genuino × Soy GO × Oreck",
    note: { es: "Conexión, música, video, voz y medios.", en: "Collab, music, video, vocals & media." },
    videoId: "dNjJJdlnnso",
    byFran: true,
  },
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante × Genuino",
    note: { es: "Single y video oficial, 2022.", en: "Single and official video, 2022." },
    videoId: "zH5C4T0C-F0",
    byFran: true,
  },
  {
    title: "No, No, No",
    artist: "Blue Mary feat. Rami, DW & Genuino",
    note: { es: "Conexión, composición e interpretación.", en: "Collab, songwriting & performance." },
    videoId: "Yt6wtTU5Eb8",
    byFran: true,
  },
  {
    title: "Lejos de Ti",
    artist: "Hermanos Bernal feat. Genuino",
    note: { es: "Grabado en Suecia.", en: "Recorded in Sweden." },
    videoId: "uKG4RBnhghE",
    byFran: true,
  },
  {
    title: "Historia",
    artist: "Genuino × Campbell G",
    note: {
      es: "Grabado en Miami en 2016 por Jay Vega, producido en Chile.",
      en: "Shot in Miami in 2016 by Jay Vega, produced in Chile.",
    },
    videoId: "aJG0zRex7EU",
    byFran: true,
  },
  {
    title: "Diosa",
    artist: "Genuino × Campbell G",
    note: { es: "Video oficial.", en: "Official video." },
    videoId: "IMRNuKaX9qM",
    byFran: true,
  },
  {
    title: "Champagne",
    artist: "Fran G Genuino feat. Afy",
    note: { es: "Video oficial.", en: "Official video." },
    videoId: "bPJhFwQz_Ok",
    byFran: true,
  },
  {
    title: "Pensándote",
    artist: "Fran G Genuino",
    note: { es: "Lyric video.", en: "Lyric video." },
    videoId: "BJMqy8UdpK8",
    byFran: true,
  },
  {
    title: "Caribe",
    artist: "Fran G Genuino feat. Solo di Medina & DW",
    note: {
      es: "Producción general, videoclip, medios y conexión de artistas de Fran G. 2015.",
      en: "Lead production, music video, media and artist collab by Fran G. 2015.",
    },
    videoId: "0cJH7mw8dKM",
    byFran: true,
  },
  {
    title: "Around the Sky",
    artist: "Diego Smith",
    note: { es: "Producción general de Genuino Family.", en: "Lead production by Genuino Family." },
    videoId: "2SsfMbwrMtg",
    byFran: false,
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    note: { es: "Producción general de Genuino Family.", en: "Lead production by Genuino Family." },
    videoId: "eyr_XP440kE",
    byFran: false,
  },
  {
    title: "Nunca Me Faltes (Remix)",
    artist: "Antonio Ríos con Angie Tu Cumbiera",
    note: { es: "Dirección general de Fran G Genuino.", en: "Creative direction by Fran G Genuino." },
    videoId: "Ll-l9N5NmlM",
    byFran: false,
  },
];

/* Registro de estudio y rodaje. Los clips viven en Supabase; si no cargan, se muestra el poster. */
export const reels: { title: string | L; caption: L; src: string; poster: string }[] = [
  {
    title: "Cocoa Record Studio",
    caption: {
      es: "Antonio Ríos, Oreken el Track y Fran G Genuino.",
      en: "Antonio Ríos, Oreken el Track and Fran G Genuino.",
    },
    src: mediaUrl("videos/cocoa-record-studio.mp4", media.backstage),
    poster: "/registro/cocoa-record-studio.jpg",
  },
  {
    title: { es: "Rodaje Suéltate Ma", en: "Suéltate Ma shoot" },
    caption: { es: "Diego Smith. Rodaje del videoclip.", en: "Diego Smith. On set for the music video." },
    src: media.backstage,
    poster: backstagePoster,
  },
  {
    title: { es: "Sesión de estudio", en: "Studio session" },
    caption: { es: "Sesión de grabación.", en: "Recording session." },
    src: mediaUrl("videos/studio-session.mp4", media.backstage),
    poster: ytThumb("bPJhFwQz_Ok"),
  },
  {
    title: "Modo Avión",
    caption: { es: "Pieza vertical.", en: "Vertical cut." },
    src: mediaUrl("videos/modo-avion.mp4", media.backstage),
    poster: ytThumb("IMRNuKaX9qM"),
  },
  {
    title: { es: "Nuevo paso", en: "Next step" },
    caption: { es: "Fran G Genuino.", en: "Fran G Genuino." },
    src: mediaUrl("videos/nuevo-paso.mp4", media.backstage),
    poster: ytThumb("aJG0zRex7EU"),
  },
];

/* Fotografía de terreno: set de televisión, estudio y rodajes */
export const fieldPhotos: { src: string; title: L; caption: L; position: string }[] = [
  {
    src: "/servicios/medios-set-tv.jpg",
    title: { es: "Set de televisión", en: "TV set" },
    caption: { es: "Antonio Ríos antes de salir al aire.", en: "Antonio Ríos moments before going on air." },
    position: "50% 40%",
  },
  {
    src: "/registro/antonio-rios-estudio.jpg",
    title: { es: "Estudio", en: "Studio" },
    caption: { es: "Antonio Ríos entre tomas.", en: "Antonio Ríos between takes." },
    position: "50% 30%",
  },
  {
    src: "/registro/antonio-rios-mercado-central.jpg",
    title: { es: "Mercado Central", en: "Mercado Central" },
    caption: { es: "Antonio Ríos en terreno, Santiago.", en: "Antonio Ríos on location, Santiago." },
    position: "50% 35%",
  },
  {
    src: "/registro/set-videoclip.jpg",
    title: { es: "Set de videoclip", en: "Music video set" },
    caption: { es: "Elenco en set, antes de rodar.", en: "Cast on set, before rolling." },
    position: "50% 40%",
  },
  {
    src: "/registro/foto-fija-rodaje.jpg",
    title: { es: "Foto fija", en: "Stills" },
    caption: { es: "Revisión de cámara durante el rodaje.", en: "Checking the monitor during the shoot." },
    position: "50% 35%",
  },
  {
    src: "/registro/backstage-show.jpg",
    title: { es: "Backstage", en: "Backstage" },
    caption: { es: "Minutos antes de subir al escenario.", en: "Minutes before going on stage." },
    position: "50% 30%",
  },
];

export const liveSession = {
  title: { es: "Suéltate Ma en vivo", en: "Suéltate Ma live" },
  src: mediaUrl("videos/sueltate-ma-live.mp4", media.backstage),
  poster: ytThumb("eyr_XP440kE"),
};

export const profileImages = {
  studio: {
    src: "/profile/fran-g-studio-console.jpg",
    alt: { es: "Fran G Genuino frente a la consola de su estudio", en: "Fran G Genuino at the console in his studio" },
  },
  street: {
    src: "/profile/fran-g-street-valparaiso.jpg",
    alt: { es: "Fran G Genuino en la calle, en Valparaíso", en: "Fran G Genuino on the street in Valparaíso" },
  },
};

/* ---------- Volumen de trabajo ---------- */

/* Cada video cuenta una sola vez entre casos, apariciones, catálogo y música */
export const workVideos = Array.from(
  new Set([
    ...cases.flatMap((item) => [item.videoId, ...(item.appearances?.map((appearance) => appearance.videoId) ?? [])]),
    ...catalog.map((item) => item.videoId),
    ...releases.map((item) => item.videoId),
  ]),
);

/* Áreas del volumen de trabajo: cada una abre su lista filtrada en el catálogo */
export const workAreas: { filter: CatalogFilter; label: L; detail: L }[] = [
  {
    filter: "Producción",
    label: { es: "Producción y música", en: "Production & music" },
    detail: {
      es: "Producción general, singles propios y videoclips.",
      en: "Lead production, original singles and music videos.",
    },
  },
  {
    filter: "Radio",
    label: { es: "Radio", en: "Radio" },
    detail: { es: "Difusión radial, con singles N.º 1 en Chile.", en: "Radio promotion, with #1 singles in Chile." },
  },
  {
    filter: "TV",
    label: { es: "Televisión", en: "Television" },
    detail: { es: "TVN, Chilevisión, Vía X, Zona Latina y TNT Sports.", en: "TVN, Chilevisión, Vía X, Zona Latina and TNT Sports." },
  },
  {
    filter: "Prensa",
    label: { es: "Prensa", en: "Press" },
    detail: { es: "Entrevistas y notas en medios nacionales.", en: "Interviews and features in national outlets." },
  },
];
