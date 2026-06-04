import {
  AudioLines,
  Clapperboard,
  Disc3,
  Headphones,
  Megaphone,
  Mic2,
  PenLine,
  Radio,
  Tv,
  UsersRound,
} from "lucide-react";
import { mediaUrl } from "@/lib/supabase/media";

export const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9JyMwNTA1MDUnLz48Y2lyY2xlIGN4PScxMicgY3k9JzYnIHI9JzYnIGZpbGw9JyNkOGI3NmInIG9wYWNpdHk9Jy4zJy8+PC9zdmc+";

export const navItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Sonido", href: "/sonido" },
  { label: "Video", href: "/video" },
  { label: "Perfil", href: "/perfil" },
  { label: "Contacto", href: "/contacto" },
];

export const media = {
  logo: mediaUrl("brand/genuino-logo.svg", "/genuino-logo.svg"),
  studioSession: mediaUrl(
    "videos/studio-session.mp4",
    "/videos/sueltate-ma-backstage.mp4",
  ),
  phoneMoment: mediaUrl(
    "videos/modo-avion.mp4",
    "/videos/sueltate-ma-backstage.mp4",
  ),
  liveSession: mediaUrl(
    "videos/sueltate-ma-live.mp4",
    "/videos/sueltate-ma-backstage.mp4",
  ),
  sueltateBackstage: "/videos/sueltate-ma-backstage.mp4",
  sueltateBackstagePoster: "/videos/sueltate-ma-backstage-poster.jpg",
  careerStep: mediaUrl(
    "videos/nuevo-paso.mp4",
    "/videos/sueltate-ma-backstage.mp4",
  ),
  cocoaCollaboration: mediaUrl(
    "videos/cocoa-record-studio.mp4",
    "/videos/sueltate-ma-backstage.mp4",
  ),
};

export const artistProfileImages = [
  {
    src: "/profile/fran-g-studio-console.jpg",
    alt: "Fran G Genuino en estudio frente a consola y monitores",
    label: "Estudio / producción",
  },
  {
    src: "/profile/fran-g-street-valparaiso.jpg",
    alt: "Fran G Genuino en exterior urbano en Valparaíso",
    label: "Territorio / presencia",
  },
  {
    src: mediaUrl("profile/fran-g-collab.jpg", "/profile/fran-g-collab.jpg"),
    alt: "Fran G Genuino en instancia de colaboración musical",
    label: "Red artística",
  },
  {
    src: mediaUrl("profile/fran-g-hall.jpg", "/profile/fran-g-hall.jpg"),
    alt: "Fran G Genuino en interior cinematográfico",
    label: "Imagen artística",
  },
];

export const services = [
  {
    title: "Producción musical",
    kicker: "Idea / Beat / Canción",
    description:
      "Creación de beats, arreglos, melodías y dirección musical para canciones con identidad urbana, energía y proyección.",
    detail:
      "Trabajo desde la idea inicial hasta una maqueta sólida: beat, estructura, referencias, tono artístico y dirección de la sesión para que la canción tenga carácter propio.",
    image: "https://i.ytimg.com/vi/aJG0zRex7EU/maxresdefault.jpg",
    imageAlt: "Sesión de producción musical en estudio",
    icon: Disc3,
    deliverables: ["Beat o producción original", "Dirección de estructura", "Sesión guiada en estudio"],
  },
  {
    title: "Mezcla y mastering",
    kicker: "Balance / Presencia / Final",
    description:
      "Balance, profundidad, traducción y acabado final para que cada canción suene con presencia en cualquier sistema.",
    detail:
      "Proceso técnico y musical para que la voz, el bajo, el beat y los detalles convivan con claridad, volumen competitivo y una terminación lista para plataformas.",
    image: "https://i.ytimg.com/vi/0cJH7mw8dKM/maxresdefault.jpg",
    imageAlt: "Referencia visual de catálogo musical Genuino",
    icon: Headphones,
    deliverables: ["Mezcla estéreo", "Master para plataformas", "Revisión de traducción sonora"],
  },
  {
    title: "Dirección artística",
    kicker: "Criterio / Lenguaje / Ruta",
    description:
      "Criterio para ordenar referencias, lenguaje, narrativa, imagen y decisiones estéticas durante todo el proceso.",
    detail:
      "Acompañamiento para ordenar el universo del artista: qué se dice, cómo se muestra, qué referencias sirven y qué decisiones conviene tomar antes de grabar o lanzar.",
    image: "https://i.ytimg.com/vi/zH5C4T0C-F0/maxresdefault.jpg",
    imageAlt: "Imagen artística de Fran G Genuino",
    icon: PenLine,
    deliverables: ["Mapa de referencias", "Dirección de identidad", "Criterio para lanzamientos"],
  },
  {
    title: "Marketing artístico",
    kicker: "Posición / Campaña / Crecimiento",
    description:
      "Posicionamiento del artista en el lugar idóneo para desarrollar su carrera, con herramientas concretas para crecer.",
    detail:
      "Lectura comercial para transformar una canción o etapa artística en presencia: relato, piezas, calendario, colaboraciones y acciones que muevan audiencia real.",
    image: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
    imageAlt: "Presencia pública de Fran G Genuino",
    icon: Megaphone,
    deliverables: ["Estrategia de salida", "Piezas para redes", "Ruta de visibilidad"],
  },
  {
    title: "Entrevistas radio y TV",
    kicker: "Medios / Prensa / Escena",
    description:
      "Gestión y preparación de apariciones en medios para amplificar lanzamientos, colaboraciones y momentos clave.",
    detail:
      "Preparación de mensaje, foco del lanzamiento y gestión de instancias donde la historia del artista pueda presentarse con contexto profesional.",
    image: "https://i.ytimg.com/vi/eyr_XP440kE/maxresdefault.jpg",
    imageAlt: "Colaboración y aparición pública en medios",
    icon: Tv,
    deliverables: ["Preparación de entrevista", "Foco comunicacional", "Gestión de oportunidades"],
  },
  {
    title: "Grabación y edición vocal",
    kicker: "Cabina / Toma / Edición",
    description:
      "Dirección de toma, comping, limpieza, afinación transparente y edición rítmica al servicio de la interpretación.",
    detail:
      "Sesión enfocada en sacar una interpretación con intención: dirección de voz, selección de tomas, limpieza, afinación musical y edición sin perder humanidad.",
    image: "https://i.ytimg.com/vi/bPJhFwQz_Ok/maxresdefault.jpg",
    imageAlt: "Fran G Genuino en cabina de grabación",
    icon: Mic2,
    deliverables: ["Dirección de toma vocal", "Comping y limpieza", "Afinación y timing"],
  },
  {
    title: "Videoclips y contenido",
    kicker: "Video / Reels / Presencia",
    description:
      "Desarrollo de videoclips, piezas sociales y registros de estudio para que la canción tenga presencia visual.",
    detail:
      "Contenido pensado para el ciclo real de una canción: pieza principal, cortes sociales, registro de proceso y material que sostenga el lanzamiento sin verse genérico.",
    image: "https://i.ytimg.com/vi/Ll-l9N5NmlM/maxresdefault.jpg",
    imageAlt: "Referencia audiovisual para videoclips y contenido",
    icon: Clapperboard,
    deliverables: ["Concepto audiovisual", "Piezas para redes", "Dirección de registro"],
  },
  {
    title: "Desarrollo de artistas",
    kicker: "Visión / Red / Carrera",
    description:
      "Acompañamiento integral para nuevos talentos: voz, repertorio, colaboraciones, imagen y ruta comercial.",
    detail:
      "Proceso de mediano plazo para construir repertorio, mejorar presencia, elegir colaboraciones y tomar decisiones con sentido de carrera.",
    image: "https://i.ytimg.com/vi/uKG4RBnhghE/maxresdefault.jpg",
    imageAlt: "Red de colaboraciones de Genuino",
    icon: UsersRound,
    deliverables: ["Plan de repertorio", "Ruta de colaboraciones", "Acompañamiento creativo"],
  },
];

export const projects = [
  {
    title: "La Doble G",
    type: "Alta rotación / Soy Go Music",
    year: "2026",
    description:
      '"Ella Baila Sola" junto a GO: una unión creativa con presencia en radios, Vía X y circuito urbano chileno.',
    image: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Q9wHNUH1eq8",
    palette: "from-[#d8b76b]/28 via-[#2a2418] to-[#060606]",
  },
  {
    title: "Antonio Ríos x Angie",
    type: "Unión artística / Logística video",
    year: "2025",
    description:
      "Gestión de la unión entre artistas y coordinación logística para un cruce de cumbia popular y lenguaje actual.",
    image: "https://i.ytimg.com/vi/Ll-l9N5NmlM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Ll-l9N5NmlM",
    palette: "from-[#5d6b5c]/34 via-[#171d18] to-[#050505]",
  },
  {
    title: "Diego Smith",
    type: "Producción general / Genuino Family",
    year: "2026",
    description:
      'Producción general para "Suéltate Ma", conectando equipo, criterio audiovisual y ejecución desde Genuino Family.',
    image: "https://i.ytimg.com/vi/eyr_XP440kE/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=eyr_XP440kE",
    palette: "from-[#a96f49]/32 via-[#23140f] to-[#070606]",
  },
];

export const tracks = [
  {
    title: "Historia",
    role: "GENUINO \"HISTORIA\"",
    duration: "YouTube",
    mood: "Narrativa de origen, identidad y presencia Genuino Family.",
    href: "https://www.youtube.com/watch?v=aJG0zRex7EU",
    videoId: "aJG0zRex7EU",
  },
  {
    title: "Champagne",
    role: "Fran G Genuino feat. Afy",
    duration: "YouTube",
    mood: "Colaboración urbana con lectura de lanzamiento.",
    href: "https://www.youtube.com/watch?v=bPJhFwQz_Ok",
    videoId: "bPJhFwQz_Ok",
  },
  {
    title: "Caribe",
    role: "Colaboración oficial",
    duration: "YouTube",
    mood: "Cruce de artistas, energía radial y audiovisual.",
    href: "https://www.youtube.com/watch?v=0cJH7mw8dKM",
    videoId: "0cJH7mw8dKM",
  },
  {
    title: "Diosa",
    role: "Genuino x Campbell G",
    duration: "YouTube",
    mood: "Video oficial con lenguaje urbano y marca Genuino Family.",
    href: "https://www.youtube.com/watch?v=IMRNuKaX9qM",
    videoId: "IMRNuKaX9qM",
  },
  {
    title: "Pensándote",
    role: "Fran G Genuino",
    duration: "YouTube",
    mood: "Video con letra para sostener catálogo y audiencia.",
    href: "https://www.youtube.com/watch?v=BJMqy8UdpK8",
    videoId: "BJMqy8UdpK8",
  },
];

export const workedSongs = [
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    role: "Radio / TV / single",
    outcome: "Trabajo de visibilidad para radios, Vía X y circuito urbano chileno.",
    videoId: "Q9wHNUH1eq8",
    href: "https://www.youtube.com/watch?v=Q9wHNUH1eq8",
    tags: ["Radio", "TV", "Lanzamiento"],
    featured: true,
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    role: "Producción general",
    outcome: "Coordinación de equipo, campaña, audiovisual y ejecución desde Genuino Family.",
    videoId: "eyr_XP440kE",
    href: "https://www.youtube.com/watch?v=eyr_XP440kE",
    tags: ["Producción", "Video", "Campaña"],
    featured: true,
  },
  {
    title: "Nunca Me Faltes Remix",
    artist: "Angie Tu Cumbiera x Antonio Ríos",
    role: "Unión artística / logística",
    outcome: "Gestión de la colaboración y logística para una pieza de alcance popular.",
    videoId: "Ll-l9N5NmlM",
    href: "https://www.youtube.com/watch?v=Ll-l9N5NmlM",
    tags: ["Colaboración", "Video", "Medios"],
    featured: true,
  },
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante x Genuino",
    role: "Catálogo / presencia",
    outcome: "Cruce artístico con relato de calle, identidad y proyección en Chile.",
    videoId: "zH5C4T0C-F0",
    href: "https://www.youtube.com/watch?v=zH5C4T0C-F0",
    tags: ["Catálogo", "Colaboración"],
    featured: true,
  },
  {
    title: "ULALA (OOH LA-LA)",
    artist: "Myke Towers, Daddy Yankee",
    role: "Booking radial y medios",
    outcome: "Referencia de canción trabajada para posicionamiento radial.",
    videoId: "9k3wMoQn-DQ",
    href: "https://www.youtube.com/watch?v=9k3wMoQn-DQ",
    tags: ["Radio", "Medios"],
  },
  {
    title: "Se Lo Juro Mor",
    artist: "Feid",
    role: "Booking radial y medios",
    outcome: "Referencia de campaña para radios y medios de comunicación.",
    videoId: "mJlE0RwK_OY",
    href: "https://www.youtube.com/watch?v=mJlE0RwK_OY",
    tags: ["Radio", "Medios"],
  },
  {
    title: "CORLEONE",
    artist: "Saiko x Yandel",
    role: "Booking radial y medios",
    outcome: "Trabajo de visibilidad dentro del circuito musical urbano.",
    videoId: "xVzbKU66eMQ",
    href: "https://www.youtube.com/watch?v=xVzbKU66eMQ",
    tags: ["Radio", "Medios"],
  },
  {
    title: "Kilerito",
    artist: "Brytiago & Anuel AA",
    role: "Booking radial y medios",
    outcome: "Referencia de canción trabajada en difusión y posicionamiento.",
    videoId: "dhPcSr0ah38",
    href: "https://www.youtube.com/watch?v=dhPcSr0ah38",
    tags: ["Radio", "Medios"],
  },
  {
    title: "La Plena",
    artist: "Beele, Westcol, Ovy On The Drums",
    role: "Booking radial y medios",
    outcome: "Referencia para gestión de canción en medios.",
    videoId: "F1_aOX0acbY",
    href: "https://www.youtube.com/watch?v=F1_aOX0acbY",
    tags: ["Radio", "Medios"],
  },
  {
    title: "Lunares",
    artist: "Servando & Florentino",
    role: "Booking radial y medios",
    outcome: "Referencia de difusión radial y conexión con medios.",
    videoId: "-YkA-t8CIOI",
    href: "https://www.youtube.com/watch?v=-YkA-t8CIOI",
    tags: ["Radio", "Medios"],
  },
  {
    title: "No Te Deseo el Mal",
    artist: "Eladio Carrion feat. Karol G",
    role: "Booking radial y medios",
    outcome: "Referencia de canción trabajada para presencia en medios.",
    videoId: "ZPJN-aWvj_U",
    href: "https://www.youtube.com/watch?v=ZPJN-aWvj_U",
    tags: ["Radio", "Medios"],
  },
];

export const gallery = [
  {
    label: "Venimos de Abajo",
    category: "Arte Elegante x Genuino",
    src: "https://i.ytimg.com/vi/zH5C4T0C-F0/maxresdefault.jpg",
  },
  {
    label: "Ella Baila Sola",
    category: "GO feat. Fran G Genuino",
    src: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
  },
  {
    label: "Lejos de ti",
    category: "Hermanos Bernal feat. Genuino",
    src: "https://i.ytimg.com/vi/uKG4RBnhghE/maxresdefault.jpg",
  },
  {
    label: "Suéltate Ma",
    category: "Diego Smith / Producción general",
    src: "https://i.ytimg.com/vi/eyr_XP440kE/maxresdefault.jpg",
  },
  {
    label: "Cocoa Record Studio",
    category: "Colaboración",
    src: media.cocoaCollaboration,
    kind: "video",
  },
  {
    label: "Fran en estudio",
    category: "Consola / producción",
    src: "/profile/fran-g-studio-console.jpg",
  },
];

export const careerMilestones = [
  {
    year: "2015",
    title: "Caribe",
    eyebrow: "Catálogo temprano",
    body:
      "Primeras señales de catálogo en plataformas con Caribe, una pieza que posiciona a Genuino en música latina desde una etapa inicial.",
    image: "https://i.ytimg.com/vi/0cJH7mw8dKM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=0cJH7mw8dKM",
  },
  {
    year: "2022",
    title: "Venimos de Abajo",
    eyebrow: "Arte Elegante x Genuino",
    body:
      "Colaboración editada como single y video oficial, con una lectura de resiliencia, calle y alcance radial en Chile.",
    image: "https://i.ytimg.com/vi/zH5C4T0C-F0/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=zH5C4T0C-F0",
  },
  {
    year: "La Doble G",
    title: "Ella Baila Sola",
    eyebrow: "GO feat. Fran G Genuino",
    body:
      "Cruce de R&B, soul, rap y urbano junto a GO, desarrollado como parte de una estrategia de singles y presencia en vivo.",
    image: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Q9wHNUH1eq8",
  },
  {
    year: "Genuino Family",
    title: "Gestión de medios",
    eyebrow: "Radio / TV / videos",
    body:
      "Trabajo detrás de la canción: booking radial, gestión de televisión, logística de videoclips, contenido social y uniones artísticas.",
    image: "https://i.ytimg.com/vi/Ll-l9N5NmlM/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=Ll-l9N5NmlM",
  },
];

export const proofStats = [
  { value: "2015", label: "catálogo en plataformas" },
  { value: "2022", label: "single con Arte Elegante" },
  { value: "Top 100", label: "radial en Chile" },
  { value: "360", label: "sonido, video y medios" },
];

export const videos = [
  {
    title: "Cocoa Record Studio",
    description:
      "Colaboración en estudio junto a Antonio Ríos, Oreken el Track y Fran G Genuino: una señal clara de red, oficio y presente creativo.",
    meta: "Colaboración / estudio",
    src: media.cocoaCollaboration,
    format: "portrait",
  },
  {
    title: "Sesión con los grandes",
    description:
      "Un registro de estudio con energía real: dirección, interpretación y criterio musical ocurriendo en la misma sala.",
    meta: "Estudio / vertical",
    src: media.studioSession,
    format: "portrait",
  },
  {
    title: "Suéltate Ma en vivo",
    description:
      "Presentación en vivo para mostrar presencia, audiencia y oficio en un formato listo para campañas y lanzamientos.",
    meta: "Live / horizontal",
    src: media.liveSession,
    format: "wide",
  },
  {
    title: "Modo avión",
    description:
      "Un momento breve, directo y memorable: ideal para piezas sociales con impacto inmediato y lectura musical clara.",
    meta: "Social / vertical",
    src: media.phoneMoment,
    format: "portrait",
  },
  {
    title: "Nuevo paso",
    description:
      "Contenido emocional de carrera, pensado para amplificar hitos artísticos con una narrativa visual cuidada.",
    meta: "Artist story / vertical",
    src: media.careerStep,
    format: "portrait",
  },
];

export const officialProductions = [
  {
    title: "Venimos de Abajo",
    artist: "Arte Elegante & Genuino",
    year: "Video oficial",
    videoId: "zH5C4T0C-F0",
    description:
      "Colaboración con Arte Elegante, presentada como una pieza de calle, relato y estrategia dentro del catálogo Genuino.",
  },
  {
    title: "Lejos de ti",
    artist: "Hermanos Bernal feat. Genuino",
    year: "Grabado en Suecia",
    videoId: "uKG4RBnhghE",
    description:
      "Video registrado durante una gira por Dinamarca y Suecia, ampliando la historia de Genuino hacia una escala internacional.",
  },
  {
    title: "Ella Baila Sola",
    artist: "GO feat. Fran G Genuino",
    year: "Radio / Vía X",
    videoId: "Q9wHNUH1eq8",
    description:
      "Canción de La Doble G con alta rotación en radios y Vía X, conectando colaboración artística con visibilidad de medios.",
  },
  {
    title: "Suéltate Ma",
    artist: "Diego Smith",
    year: "Producción general",
    videoId: "eyr_XP440kE",
    description:
      "Producción general realizada desde Genuino Family para Diego Smith, artista vinculado a Iluminaty junto a Kidd Tetoon y Ozuna.",
  },
  {
    title: "Nunca Me Faltes Remix",
    artist: "Angie Tu Cumbiera x Antonio Ríos",
    year: "Gestión y logística",
    videoId: "Ll-l9N5NmlM",
    description:
      "Genuino gestionó la unión de los artistas y la logística del video, conectando cumbia, equipo técnico y ejecución de lanzamiento.",
  },
  {
    title: 'GENUINO "HISTORIA"',
    artist: "Campbell G / Fran G Genuino",
    year: "Video oficial",
    videoId: "aJG0zRex7EU",
    description:
      "Una pieza clave para presentar la identidad de Genuino desde relato, carácter y presencia artística.",
  },
  {
    title: "Diosa",
    artist: "Genuino x Campbell G",
    year: "Genuino Family Inc.",
    videoId: "IMRNuKaX9qM",
    description:
      "Producción de alto alcance para mostrar colaboración, lenguaje urbano y dirección visual consolidada.",
  },
  {
    title: "Champagne",
    artist: "Fran G Genuino feat. Afy",
    year: "Producción musical",
    videoId: "bPJhFwQz_Ok",
    description:
      "Canción y audiovisual con foco en colaboración, identidad vocal y una estética directa de lanzamiento.",
  },
  {
    title: "Pensándote",
    artist: "Fran G Genuino",
    year: "Video con letra",
    videoId: "BJMqy8UdpK8",
    description:
      "Formato lírico para ampliar vida digital de una canción y sostener cercanía con audiencia.",
  },
  {
    title: "Caribe",
    artist: "Vladi Cachai x DW x Solo di Medina x Fran G",
    year: "Video oficial",
    videoId: "0cJH7mw8dKM",
    description:
      "Participación en una producción colaborativa con lectura audiovisual y proyección de catálogo.",
  },
];

export const collaborationHighlights = [
  {
    title: "Booking radial y medios",
    kicker: "Radios / TV / Prensa",
    description:
      "Gestión para presentar canciones y artistas ante radios, televisión y medios relevantes en Chile, con foco en rotación, visibilidad y oportunidades de prensa.",
    icon: Radio,
  },
  {
    title: "Producción y logística audiovisual",
    kicker: "Videoclips / Reels / Backstage",
    description:
      "Coordinación de guiones, registros previos, rodaje, contenido posterior y piezas sociales que sostienen el ciclo completo de una canción.",
    icon: Clapperboard,
  },
  {
    title: "Uniones artísticas",
    kicker: "Colaboraciones / Red",
    description:
      "Cruces entre artistas, productores, directores y equipos de negocio para convertir una canción en una oportunidad real de carrera.",
    icon: UsersRound,
  },
  {
    title: "Desarrollo integral",
    kicker: "Letra / Melodía / Ruta",
    description:
      "Capacidad de entrar desde la escritura, línea melódica y dirección musical hasta la estrategia de medios y posicionamiento público.",
    icon: Mic2,
  },
];

export const portalAccessRoles = [
  {
    title: "Administración",
    description:
      "Vista para ordenar solicitudes, datos comerciales, documentos y próximos pasos del proyecto.",
  },
  {
    title: "Legal",
    description:
      "Acceso preparado para revisar términos, privacidad, marca, contratos y uso de materiales.",
  },
  {
    title: "Equipo creativo",
    description:
      "Espacio para compartir referencias, versiones, feedback y entregas sin perder contexto.",
  },
];

export const mediaCampaignReferences = [
  {
    title: "ULALA (OOH LA-LA)",
    artist: "Myke Towers, Daddy Yankee",
    videoId: "9k3wMoQn-DQ",
  },
  {
    title: "Se Lo Juro Mor",
    artist: "Feid",
    videoId: "mJlE0RwK_OY",
  },
  {
    title: "CORLEONE",
    artist: "Saiko x Yandel",
    videoId: "xVzbKU66eMQ",
  },
  {
    title: "Kilerito",
    artist: "Brytiago & Anuel AA",
    videoId: "dhPcSr0ah38",
  },
  {
    title: "La Plena",
    artist: "Beele, Westcol, Ovy On The Drums",
    videoId: "F1_aOX0acbY",
  },
  {
    title: "Lunares",
    artist: "Servando & Florentino",
    videoId: "-YkA-t8CIOI",
  },
  {
    title: "No Te Deseo el Mal",
    artist: "Eladio Carrion feat. Karol G",
    videoId: "ZPJN-aWvj_U",
  },
];

export const serviceOptions = [
  "Producción musical",
  "Mezcla y mastering",
  "Dirección artística",
  "Marketing artístico",
  "Booking radial y medios",
  "Entrevistas radio y TV",
  "Videoclips y contenido",
  "Grabación vocal",
  "Desarrollo de artistas",
  "Acceso administrativo / legal",
];

export const footerLinks = [
  { label: "Instagram", href: "https://instagram.com/franggenuino_" },
  { label: "YouTube", href: "https://youtube.com/@genuinomusic" },
  { label: "Email", href: "mailto:contacto@genuino.studio" },
];

export const legalLinks = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

export const contactChannels = [
  { label: "Comercial", value: "contacto@genuino.studio", icon: Radio },
  { label: "Estudio", value: "Santiago / remoto", icon: AudioLines },
  { label: "Portal", value: "Administración, legal y clientes", icon: UsersRound },
];

export const audiovisualTestimonials = [
  {
    artist: "Arte Elegante",
    role: "Colaboración oficial",
    title: "Venimos de Abajo",
    quote:
      "Una unión de calle, relato y criterio de producción que puso el foco en interpretación, identidad y presencia visual.",
    videoSrc: media.sueltateBackstage,
    poster: "https://i.ytimg.com/vi/zH5C4T0C-F0/maxresdefault.jpg",
    proof: "Video oficial / catálogo urbano",
  },
  {
    artist: "GO",
    role: "La Doble G",
    title: "Ella Baila Sola",
    quote:
      "Cruce vocal y audiovisual con lectura radial, contenido para pantalla y una dirección pensada para sostener el single.",
    videoSrc: media.liveSession,
    poster: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
    proof: "Radio / Vía X / single",
  },
  {
    artist: "Diego Smith",
    role: "Producción general",
    title: "Suéltate Ma",
    quote:
      "Coordinación de estudio, video, logística y relato público para transformar una canción en una campaña visible.",
    videoSrc: media.sueltateBackstage,
    poster: "https://i.ytimg.com/vi/eyr_XP440kE/maxresdefault.jpg",
    proof: "Backstage / lanzamiento",
  },
];

export const studioGear = [
  {
    name: "Control room",
    category: "Monitoreo y decisión",
    image: "/profile/fran-g-studio-console.jpg",
    specs: ["Escucha de referencia", "Revisión de traducción", "A/B de mezcla"],
    description:
      "Sala preparada para decidir bajo, voz y presencia con lectura de plataforma, club, auto y teléfono.",
  },
  {
    name: "Cadena vocal",
    category: "Toma y edición",
    image: mediaUrl("profile/fran-g-vocal-chain.jpg", "/profile/fran-g-studio-console.jpg"),
    specs: ["Dirección de toma", "Comping", "Afinación musical"],
    description:
      "Flujo enfocado en capturar intención: selección de tomas, limpieza, timing y edición transparente.",
  },
  {
    name: "Beat station",
    category: "Producción urbana",
    image: "https://i.ytimg.com/vi/aJG0zRex7EU/maxresdefault.jpg",
    specs: ["Drums con pegada", "808 controlado", "Arreglo para voz"],
    description:
      "Mesa creativa para convertir referencias en un beat con espacio, energía y una estructura lista para grabar.",
  },
  {
    name: "Media desk",
    category: "Contenido y campaña",
    image: "https://i.ytimg.com/vi/Ll-l9N5NmlM/maxresdefault.jpg",
    specs: ["Reels", "Backstage", "Piezas de prensa"],
    description:
      "Producción de material visual para sostener el lanzamiento antes, durante y después del estreno.",
  },
];

export const insideBeatSteps = [
  {
    label: "Referencia",
    title: "Se define el mundo del artista",
    body:
      "Antes de tocar la sesión se ordena el lenguaje: tono, referencias, público, visuales y objetivo del lanzamiento.",
    image: "/profile/fran-g-street-valparaiso.jpg",
  },
  {
    label: "Beat",
    title: "El ritmo deja espacio para la voz",
    body:
      "La producción se construye alrededor de interpretación, bajo y hook. Cada elemento tiene una función narrativa.",
    image: "/profile/fran-g-studio-console.jpg",
  },
  {
    label: "Voz",
    title: "Dirección de toma con intención",
    body:
      "Se trabaja fraseo, energía, respiración y edición para que la voz llegue frontal sin perder humanidad.",
    image: "https://i.ytimg.com/vi/bPJhFwQz_Ok/maxresdefault.jpg",
  },
  {
    label: "Salida",
    title: "La canción se convierte en campaña",
    body:
      "Master, contenido, calendario, prensa y colaboraciones se conectan para que el lanzamiento tenga tracción real.",
    image: "https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg",
  },
];

export const clientPortalDemos = [
  {
    title: "Maqueta privada 01",
    artist: "Cliente Genuino",
    status: "Mix v2",
    duration: "02:48",
    comments: [
      { time: "00:18", author: "Artista", body: "Subir presencia del lead antes del drop." },
      { time: "01:06", author: "Fran", body: "Revisar respiración y doblaje en el hook." },
      { time: "02:12", author: "Equipo", body: "Preparar versión clean para pauta radial." },
    ],
  },
  {
    title: "Single campaña",
    artist: "Genuino Family",
    status: "Master check",
    duration: "03:11",
    comments: [
      { time: "00:42", author: "Fran", body: "El bajo traduce mejor en la segunda versión." },
      { time: "01:34", author: "Marketing", body: "Cortar reel vertical desde este hook." },
    ],
  },
];
