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
    "/¡Así se vive una sesión con los grandes! 🎥🔥Les dejamos un minuto de pura magia en el estudio. .mp4",
  ),
  phoneMoment: mediaUrl(
    "videos/modo-avion.mp4",
    "/Pongan Sus Telefonos Celulares En ✈️🎹🎙️🔴.mp4",
  ),
  liveSession: mediaUrl(
    "videos/sueltate-ma-live.mp4",
    "/Suéltate Ma en Vivo por x IG 🎄🧡 Sorpresa para ustedes! Feliz navidad 🎁 %23SueltateMaLive.mp4",
  ),
  careerStep: mediaUrl(
    "videos/nuevo-paso.mp4",
    "/Me siento muy feliz y orgulloso de este nuevo paso en mi carrera junto a uno de los más grandes .mp4",
  ),
  cocoaCollaboration: mediaUrl(
    "videos/cocoa-record-studio.mp4",
    "/En mi amado @cocoarecordstudio junto a @antoniorioseloriginalok @orekeneltrack @franggenuino_ Sa.mp4",
  ),
};

export const artistProfileImages = [
  {
    src: mediaUrl("profile/fran-g-studio.jpg", "/profile/fran-g-studio.jpg"),
    alt: "Fran G Genuino en cabina de grabacion",
    label: "Cabina / voz",
  },
  {
    src: mediaUrl("profile/fran-g-collab.jpg", "/profile/fran-g-collab.jpg"),
    alt: "Fran G Genuino en instancia de colaboracion musical",
    label: "Colaboraciones",
  },
  {
    src: mediaUrl("profile/fran-g-red-carpet.jpg", "/profile/fran-g-red-carpet.jpg"),
    alt: "Fran G Genuino en alfombra roja",
    label: "Presencia publica",
  },
  {
    src: mediaUrl("profile/fran-g-hall.jpg", "/profile/fran-g-hall.jpg"),
    alt: "Fran G Genuino en interior cinematografico",
    label: "Imagen artistica",
  },
];

export const services = [
  {
    title: "Produccion musical",
    kicker: "Idea / Beat / Cancion",
    description:
      "Creacion de beats, arreglos, melodias y direccion musical para canciones con identidad urbana, energia y proyeccion.",
    detail:
      "Trabajo desde la idea inicial hasta una maqueta solida: beat, estructura, referencias, tono artistico y direccion de la sesion para que la cancion tenga caracter propio.",
    image: artistProfileImages[0].src,
    imageAlt: "Sesion de produccion musical en estudio",
    icon: Disc3,
    deliverables: ["Beat o produccion original", "Direccion de estructura", "Sesion guiada en estudio"],
  },
  {
    title: "Mezcla y mastering",
    kicker: "Balance / Presencia / Final",
    description:
      "Balance, profundidad, traduccion y acabado final para que cada cancion respire con presencia en cualquier sistema.",
    detail:
      "Proceso tecnico y musical para que la voz, el bajo, el beat y los detalles convivan con claridad, volumen competitivo y una terminacion lista para plataformas.",
    image: "https://i.ytimg.com/vi/aJG0zRex7EU/hqdefault.jpg",
    imageAlt: "Referencia visual de catalogo musical Genuino",
    icon: Headphones,
    deliverables: ["Mezcla stereo", "Master para plataformas", "Revision de traduccion sonora"],
  },
  {
    title: "Direccion artistica",
    kicker: "Criterio / Lenguaje / Ruta",
    description:
      "Criterio para ordenar referencias, lenguaje, narrativa, imagen y decisiones esteticas durante todo el proceso.",
    detail:
      "Acompanamiento para ordenar el universo del artista: que se dice, como se muestra, que referencias sirven y que decisiones conviene tomar antes de grabar o lanzar.",
    image: artistProfileImages[3].src,
    imageAlt: "Imagen artistica de Fran G Genuino",
    icon: PenLine,
    deliverables: ["Mapa de referencias", "Direccion de identidad", "Criterio para lanzamientos"],
  },
  {
    title: "Marketing artistico",
    kicker: "Posicion / Campana / Crecimiento",
    description:
      "Posicionamiento del artista en el lugar idoneo para desarrollar su carrera, con herramientas concretas para crecer.",
    detail:
      "Lectura comercial para transformar una cancion o etapa artistica en presencia: relato, piezas, calendario, colaboraciones y acciones que muevan audiencia real.",
    image: artistProfileImages[2].src,
    imageAlt: "Presencia publica de Fran G Genuino",
    icon: Megaphone,
    deliverables: ["Estrategia de salida", "Piezas para redes", "Ruta de visibilidad"],
  },
  {
    title: "Entrevistas radio y TV",
    kicker: "Medios / Prensa / Escena",
    description:
      "Gestion y preparacion de apariciones en medios para amplificar lanzamientos, colaboraciones y momentos clave.",
    detail:
      "Preparacion de mensaje, foco del lanzamiento y gestion de instancias donde la historia del artista pueda presentarse con contexto profesional.",
    image: artistProfileImages[1].src,
    imageAlt: "Colaboracion y aparicion publica en medios",
    icon: Tv,
    deliverables: ["Preparacion de entrevista", "Foco comunicacional", "Gestion de oportunidades"],
  },
  {
    title: "Grabacion y edicion vocal",
    kicker: "Cabina / Toma / Edicion",
    description:
      "Direccion de toma, comping, limpieza, afinacion transparente y edicion rítmica al servicio de la interpretacion.",
    detail:
      "Sesion enfocada en sacar una interpretacion con intencion: direccion de voz, seleccion de tomas, limpieza, afinacion musical y edicion sin perder humanidad.",
    image: artistProfileImages[0].src,
    imageAlt: "Fran G Genuino en cabina de grabacion",
    icon: Mic2,
    deliverables: ["Direccion de toma vocal", "Comping y limpieza", "Afinacion y timing"],
  },
  {
    title: "Videoclips y contenido",
    kicker: "Video / Reels / Presencia",
    description:
      "Desarrollo de videoclips, piezas sociales y registros de estudio para que la cancion tenga presencia visual.",
    detail:
      "Contenido pensado para el ciclo real de una cancion: pieza principal, cortes sociales, registro de proceso y material que sostenga el lanzamiento sin verse generico.",
    image: "https://i.ytimg.com/vi/bPJhFwQz_Ok/hqdefault.jpg",
    imageAlt: "Referencia audiovisual para videoclips y contenido",
    icon: Clapperboard,
    deliverables: ["Concepto audiovisual", "Piezas para redes", "Direccion de registro"],
  },
  {
    title: "Desarrollo de artistas",
    kicker: "Vision / Red / Carrera",
    description:
      "Acompanamiento integral para nuevos talentos: voz, repertorio, colaboraciones, imagen y ruta comercial.",
    detail:
      "Proceso de mediano plazo para construir repertorio, mejorar presencia, elegir colaboraciones y tomar decisiones con sentido de carrera.",
    image: artistProfileImages[1].src,
    imageAlt: "Red de colaboraciones de Genuino",
    icon: UsersRound,
    deliverables: ["Plan de repertorio", "Ruta de colaboraciones", "Acompanamiento creativo"],
  },
];

export const projects = [
  {
    title: "La Doble G",
    type: "Alta rotacion / Soy Go Music",
    year: "2026",
    description:
      '"Ella Baila Sola" junto a GO: una union creativa con presencia en radios, Via X y circuito urbano chileno.',
    image: "https://i.ytimg.com/vi/Q9wHNUH1eq8/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=Q9wHNUH1eq8",
    palette: "from-[#d8b76b]/28 via-[#2a2418] to-[#060606]",
  },
  {
    title: "Antonio Rios x Angie",
    type: "Union artistica / Logistica video",
    year: "2025",
    description:
      "Gestion de la union entre artistas y coordinacion logistica para un cruce de cumbia popular y lenguaje actual.",
    image: "https://i.ytimg.com/vi/Ll-l9N5NmlM/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=Ll-l9N5NmlM",
    palette: "from-[#5d6b5c]/34 via-[#171d18] to-[#050505]",
  },
  {
    title: "Diego Smith",
    type: "Produccion general / Genuino Family",
    year: "2026",
    description:
      'Produccion general para "Sueltate Ma", conectando equipo, criterio audiovisual y ejecucion desde Genuino Family.',
    image: "https://i.ytimg.com/vi/eyr_XP440kE/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=eyr_XP440kE",
    palette: "from-[#a96f49]/32 via-[#23140f] to-[#070606]",
  },
];

export const tracks = [
  {
    title: "Historia",
    role: "GENUINO \"HISTORIA\"",
    duration: "YouTube",
    mood: "Narrativa de origen, identidad y presencia GFam.",
    href: "https://www.youtube.com/watch?v=aJG0zRex7EU",
    videoId: "aJG0zRex7EU",
  },
  {
    title: "Champagne",
    role: "Fran G Genuino feat. Afy",
    duration: "YouTube",
    mood: "Colaboracion urbana con lectura de lanzamiento.",
    href: "https://www.youtube.com/watch?v=bPJhFwQz_Ok",
    videoId: "bPJhFwQz_Ok",
  },
  {
    title: "Caribe",
    role: "Colaboracion oficial",
    duration: "YouTube",
    mood: "Cruce de artistas, energia radial y audiovisual.",
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
    title: "Pensandote",
    role: "Fran G Genuino",
    duration: "YouTube",
    mood: "Lyrics video para sostener catalogo y audiencia.",
    href: "https://www.youtube.com/watch?v=BJMqy8UdpK8",
    videoId: "BJMqy8UdpK8",
  },
];

export const gallery = [
  {
    label: "Cabina de voz",
    category: "Produccion musical",
    src: artistProfileImages[0].src,
  },
  {
    label: "Red de colaboraciones",
    category: "TV / escena",
    src: artistProfileImages[1].src,
  },
  {
    label: "Presencia publica",
    category: "Posicionamiento",
    src: artistProfileImages[2].src,
  },
  {
    label: "Imagen artistica",
    category: "Direccion visual",
    src: artistProfileImages[3].src,
  },
  {
    label: "Cocoa Record Studio",
    category: "Colaboracion",
    src: media.cocoaCollaboration,
    kind: "video",
  },
  {
    label: "Sesion Genuino",
    category: "Estudio",
    src: media.studioSession,
    kind: "video",
  },
];

export const videos = [
  {
    title: "Cocoa Record Studio",
    description:
      "Colaboracion en estudio junto a Antonio Rios, Oreken el Track y Fran G Genuino: una senal clara de red, oficio y presente creativo.",
    meta: "Colaboracion / estudio",
    src: media.cocoaCollaboration,
    format: "portrait",
  },
  {
    title: "Sesion con los grandes",
    description:
      "Un registro de estudio con energia real: direccion, interpretacion y criterio musical ocurriendo en la misma sala.",
    meta: "Estudio / vertical",
    src: media.studioSession,
    format: "portrait",
  },
  {
    title: "Suéltate Ma en vivo",
    description:
      "Performance extendida para mostrar presencia, audiencia y oficio en un formato listo para campanas y lanzamientos.",
    meta: "Live / horizontal",
    src: media.liveSession,
    format: "wide",
  },
  {
    title: "Modo avion",
    description:
      "Un momento breve, directo y memorable: ideal para piezas sociales con impacto inmediato y lectura musical clara.",
    meta: "Social / vertical",
    src: media.phoneMoment,
    format: "portrait",
  },
  {
    title: "Nuevo paso",
    description:
      "Contenido emocional de carrera, pensado para amplificar hitos artisticos con una narrativa visual cuidada.",
    meta: "Artist story / vertical",
    src: media.careerStep,
    format: "portrait",
  },
];

export const officialProductions = [
  {
    title: "Venimos de abajo",
    artist: "Arte Elegante & Genuino",
    year: "Video oficial",
    videoId: "zH5C4T0C-F0",
    description:
      "Colaboracion con Arte Elegante, presentada como una pieza de calle, relato y estrategia dentro del catalogo Genuino.",
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
    year: "Radio / Via X",
    videoId: "Q9wHNUH1eq8",
    description:
      "Cancion de La Doble G con alta rotacion en radios y Via X, conectando colaboracion artistica con visibilidad de medios.",
  },
  {
    title: "Sueltate Ma",
    artist: "Diego Smith",
    year: "Produccion general",
    videoId: "eyr_XP440kE",
    description:
      "Produccion general realizada desde Genuino Family para Diego Smith, artista vinculado al hit global Iluminaty junto a Kidd Tetoon y Ozuna.",
  },
  {
    title: "Nunca Me Faltes Remix",
    artist: "Angie Tu Cumbiera x Antonio Rios",
    year: "Gestion y logistica",
    videoId: "Ll-l9N5NmlM",
    description:
      "Genuino gestiono la union de los artistas y la logistica del video, conectando cumbia, equipo tecnico y ejecucion de lanzamiento.",
  },
  {
    title: 'GENUINO "HISTORIA"',
    artist: "Campbell G / Fran G Genuino",
    year: "Video oficial",
    videoId: "aJG0zRex7EU",
    description:
      "Una pieza clave para presentar la identidad de Genuino desde relato, caracter y presencia artistica.",
  },
  {
    title: "Diosa",
    artist: "Genuino x Campbell G",
    year: "Genuino Family Inc.",
    videoId: "IMRNuKaX9qM",
    description:
      "Produccion de alto alcance para mostrar colaboracion, lenguaje urbano y direccion visual consolidada.",
  },
  {
    title: "Champagne",
    artist: "Fran G Genuino feat. Afy",
    year: "Produccion musical",
    videoId: "bPJhFwQz_Ok",
    description:
      "Cancion y audiovisual con foco en colaboracion, identidad vocal y una estetica directa de lanzamiento.",
  },
  {
    title: "Pensandote",
    artist: "Fran G Genuino",
    year: "Lyrics video",
    videoId: "BJMqy8UdpK8",
    description:
      "Formato lirico para ampliar vida digital de una cancion y sostener cercania con audiencia.",
  },
  {
    title: "Caribe",
    artist: "Vladi Cachai x DW x Solo di Medina x Fran G",
    year: "Official video",
    videoId: "0cJH7mw8dKM",
    description:
      "Participacion en una produccion colaborativa con lectura audiovisual y proyeccion de catalogo.",
  },
];

export const collaborationHighlights = [
  {
    title: "Booking radial y medios",
    kicker: "Radios / TV / Prensa",
    description:
      "Gestion para que canciones y artistas entren en radios, television y medios relevantes de Chile, con foco en rotacion, viralizacion y competencia anual.",
    icon: Radio,
  },
  {
    title: "Produccion y logistica audiovisual",
    kicker: "Videoclips / Reels / Backstage",
    description:
      "Coordinacion de guiones, registros previos, rodaje, contenido posterior y piezas sociales que sostienen el ciclo completo de una cancion.",
    icon: Clapperboard,
  },
  {
    title: "Uniones artisticas",
    kicker: "Colaboraciones / Red",
    description:
      "Cruces entre artistas, productores, directores y equipos de negocio para convertir una cancion en una oportunidad real de carrera.",
    icon: UsersRound,
  },
  {
    title: "Desarrollo integral",
    kicker: "Letra / Melodia / Ruta",
    description:
      "Capacidad de entrar desde la escritura, linea melodica y direccion musical hasta la estrategia de medios y posicionamiento publico.",
    icon: Mic2,
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
  "Produccion musical",
  "Mezcla y mastering",
  "Direccion artistica",
  "Marketing artistico",
  "Entrevistas radio y TV",
  "Videoclips y contenido",
  "Grabacion vocal",
  "Desarrollo de artistas",
];

export const footerLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Vimeo", href: "https://vimeo.com" },
  { label: "Email", href: "mailto:contacto@genuino.studio" },
];

export const contactChannels = [
  { label: "Comercial", value: "contacto@genuino.studio", icon: Radio },
  { label: "Estudio", value: "Santiago / remoto", icon: AudioLines },
];
