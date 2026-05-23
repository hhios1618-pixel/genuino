import {
  AudioLines,
  Clapperboard,
  Disc3,
  Mic2,
  PenLine,
  Radio,
  SlidersHorizontal,
} from "lucide-react";

export const navItems = [
  { label: "Concepto", href: "#concepto" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sonido", href: "#sonido" },
  { label: "Video", href: "#video" },
  { label: "Contacto", href: "#contacto" },
];

export const media = {
  studioSession:
    "/¡Así se vive una sesión con los grandes! 🎥🔥Les dejamos un minuto de pura magia en el estudio. .mp4",
  phoneMoment: "/Pongan Sus Telefonos Celulares En ✈️🎹🎙️🔴.mp4",
  liveSession:
    "/Suéltate Ma en Vivo por x IG 🎄🧡 Sorpresa para ustedes! Feliz navidad 🎁 %23SueltateMaLive.mp4",
  careerStep:
    "/Me siento muy feliz y orgulloso de este nuevo paso en mi carrera junto a uno de los más grandes .mp4",
  cocoaCollaboration:
    "/En mi amado @cocoarecordstudio junto a @antoniorioseloriginalok @orekeneltrack @franggenuino_ Sa.mp4",
};

export const services = [
  {
    title: "Produccion musical",
    description:
      "Arquitectura sonora desde la idea inicial hasta una pieza lista para publicar, con foco en identidad, intencion y detalle.",
    icon: Disc3,
  },
  {
    title: "Mezcla y mastering",
    description:
      "Balance, profundidad, traduccion y acabado final para que cada cancion respire con presencia en cualquier sistema.",
    icon: SlidersHorizontal,
  },
  {
    title: "Direccion artistica",
    description:
      "Criterio creativo para ordenar referencias, lenguaje, narrativa y decisiones esteticas durante todo el proceso.",
    icon: PenLine,
  },
  {
    title: "Musica para marcas",
    description:
      "Piezas originales, adaptaciones y sistemas sonoros para contenido audiovisual, campanas y experiencias digitales.",
    icon: Clapperboard,
  },
  {
    title: "Grabacion y edicion vocal",
    description:
      "Direccion de toma, comping, limpieza, afinacion transparente y edicion rítmica al servicio de la interpretacion.",
    icon: Mic2,
  },
  {
    title: "Desarrollo de artistas",
    description:
      "Acompanamiento musical y estrategico para encontrar un universo propio sin perder precision tecnica ni honestidad.",
    icon: AudioLines,
  },
];

export const projects = [
  {
    title: "Materia Viva",
    type: "EP / Produccion integral",
    year: "2026",
    description:
      "Cinco canciones construidas desde percusion organica, sintetizadores discretos y una voz al frente, intima y precisa.",
    palette: "from-[#d8b76b]/28 via-[#2a2418] to-[#060606]",
  },
  {
    title: "Norte Interior",
    type: "Single / Mezcla y direccion",
    year: "2025",
    description:
      "Un cruce entre pop alternativo y textura analogica, con espacio, tension y una mezcla pensada para escucha inmersiva.",
    palette: "from-[#5d6b5c]/34 via-[#171d18] to-[#050505]",
  },
  {
    title: "Casa 04",
    type: "Marca / Identidad sonora",
    year: "2025",
    description:
      "Sistema musical breve para piezas audiovisuales: motivos, golpes, ambientes y variaciones listas para contenido.",
    palette: "from-[#a96f49]/32 via-[#23140f] to-[#070606]",
  },
];

export const tracks = [
  {
    title: "Toma 07",
    role: "Demo vocal",
    duration: "02:48",
    mood: "Cercano / nocturno",
  },
  {
    title: "Pulso de sala",
    role: "Banda sonora",
    duration: "01:36",
    mood: "Tension / aire",
  },
  {
    title: "Despues del ruido",
    role: "Mezcla final",
    duration: "03:21",
    mood: "Calido / frontal",
  },
];

export const gallery = [
  { label: "Sala de control", tone: "from-[#1b1712] to-[#050505]" },
  { label: "Sesion vocal", tone: "from-[#24170f] to-[#080706]" },
  { label: "Sintesis", tone: "from-[#162018] to-[#050505]" },
  { label: "Rodaje", tone: "from-[#241f15] to-[#070707]" },
  { label: "Ensayo", tone: "from-[#161616] to-[#080807]" },
  { label: "Detalle analogico", tone: "from-[#2a1a11] to-[#050505]" },
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

export const serviceOptions = [
  "Produccion musical",
  "Mezcla y mastering",
  "Direccion artistica",
  "Musica para marcas",
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
