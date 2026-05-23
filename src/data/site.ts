import {
  AudioLines,
  Clapperboard,
  Disc3,
  Mic2,
  PenLine,
  Radio,
  Send,
  SlidersHorizontal,
  Sparkles,
  Tv,
} from "lucide-react";
import { mediaUrl } from "@/lib/supabase/media";

export const navItems = [
  { label: "Concepto", href: "#concepto" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sonido", href: "#sonido" },
  { label: "Video", href: "#video" },
  { label: "Perfil", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
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
    description:
      "Creacion de beats, arreglos, melodias y direccion musical para canciones con identidad urbana, energia y proyeccion.",
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
      "Criterio para ordenar referencias, lenguaje, narrativa, imagen y decisiones esteticas durante todo el proceso.",
    icon: PenLine,
  },
  {
    title: "Marketing artistico",
    description:
      "Posicionamiento del artista en el lugar idoneo para desarrollar su carrera, con herramientas concretas para crecer.",
    icon: Sparkles,
  },
  {
    title: "Entrevistas radio y TV",
    description:
      "Gestion y preparacion de apariciones en medios para amplificar lanzamientos, colaboraciones y momentos clave.",
    icon: Tv,
  },
  {
    title: "Grabacion y edicion vocal",
    description:
      "Direccion de toma, comping, limpieza, afinacion transparente y edicion rítmica al servicio de la interpretacion.",
    icon: Mic2,
  },
  {
    title: "Videoclips y contenido",
    description:
      "Desarrollo de videoclips, piezas sociales y registros de estudio para que la cancion tenga presencia visual.",
    icon: Clapperboard,
  },
  {
    title: "Desarrollo de artistas",
    description:
      "Acompanamiento integral para nuevos talentos: voz, repertorio, colaboraciones, imagen y ruta comercial.",
    icon: Send,
  },
];

export const projects = [
  {
    title: "La Doble G",
    type: "Proyecto colaborativo / Soy Go Music",
    year: "2026",
    description:
      "Union creativa junto a Go para refrescar la escena con cruces de pop, urbano y energia de colaboracion.",
    palette: "from-[#d8b76b]/28 via-[#2a2418] to-[#060606]",
  },
  {
    title: "Antonio Rios",
    type: "Colaboracion internacional / Cumbia urbana",
    year: "2025",
    description:
      "Participaciones y producciones audiovisuales junto a El Maestro, conectando generaciones y escenas.",
    palette: "from-[#5d6b5c]/34 via-[#171d18] to-[#050505]",
  },
  {
    title: "Catalogo Genuino",
    type: "Singles / remixes / videoclips",
    year: "2025",
    description:
      "Historia, Diosa, Champagne, Caribe y piezas propias que sostienen una identidad urbana chilena en expansion.",
    palette: "from-[#a96f49]/32 via-[#23140f] to-[#070606]",
  },
];

export const tracks = [
  {
    title: "Historia",
    role: "Video oficial",
    duration: "02:48",
    mood: "Relato / identidad",
  },
  {
    title: "Champagne",
    role: "Fran G Genuino feat. Afy",
    duration: "01:36",
    mood: "Urbano / colaboracion",
  },
  {
    title: "Caribe",
    role: "Colaboracion oficial",
    duration: "03:21",
    mood: "Movimiento / verano",
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
