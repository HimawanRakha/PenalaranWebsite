export type BsoTheme = {
  card: string;
  glowPrimary: string;
  glowSecondary: string;
  stripe: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  cta: string;
  tabActive: string;
};

export type Bso = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  theme: BsoTheme;
  heroImage?: string;
  heroImageAlt?: string;
  cta: string;
  ctaHref: string;
  focus: string[];
};

export const bsoList: Bso[] = [
  {
    id: "pandawa",
    name: "Pandawa",
    tagline: "Pusat Para Juara dan Pengembangan",
    description: "Fokus pada pendalaman materi riset, analisis data, dan pelatihan kepenulisan tingkat lanjut untuk mempersiapkan anggota menghadapi kompetisi karya tulis ilmiah.",
    logo: "/Pandawa.png",
    theme: {
      card: "from-accent-blue via-ink to-black border-transparent shadow-2xl text-white",
      glowPrimary: "bg-white/10",
      glowSecondary: "bg-white/5",
      stripe: "",
      label: "text-primary font-bold uppercase tracking-wider text-xs",
      title: "text-white drop-shadow-sm",
      description: "text-white/85 font-medium",
      tag: "border border-white/20 bg-white/10 text-white font-medium backdrop-blur-sm",
      cta: "bg-white text-ink hover:bg-white/95 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg shadow-black/10 font-bold",
      tabActive: "border border-transparent bg-accent-blue text-white shadow-md",
    },
    heroImage: "/nalarclass.png",
    heroImageAlt: "Poster program Nalar Class BSO Pandawa",
    cta: "Lihat Program",
    ctaHref: "https://www.instagram.com/p/DY4rwXGCXOQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    focus: ["Kajian & Riset", "Kepenulisan Ilmiah", "Analisis Data"],
  },
  {
    id: "nalarfest",
    name: "Nalarfest",
    tagline: "Festival Penalaran Nasional",
    description: "Penyelenggara acara kompetisi, seminar, dan pameran inovasi berskala nasional yang mempertemukan mahasiswa penalaran se-Indonesia.",
    logo: "/Nalarfest.png",
    theme: {
      card: "from-[#1f2265] via-bso-nalarfest-soft to-bso-nalarfest-mist border-transparent shadow-2xl text-white",
      glowPrimary: "bg-white/10",
      glowSecondary: "bg-white/5",
      stripe: "",
      label: "text-primary font-bold uppercase tracking-wider text-xs",
      title: "text-white drop-shadow-sm",
      description: "text-white/85 font-medium",
      tag: "border border-white/20 bg-white/10 text-white font-medium backdrop-blur-sm",
      cta: "bg-white text-bso-nalarfest-soft hover:bg-white/95 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg shadow-black/10 font-bold",
      tabActive: "border border-transparent bg-bso-nalarfest-accent text-white shadow-md",
    },
    heroImage: "/nalarfestpost.png",
    heroImageAlt: "Poster Nalarfest",
    cta: "Lihat Event",
    ctaHref: "https://www.instagram.com/nalarfest/",
    focus: ["Event Nasional", "Seminar & Talkshow", "Pameran Inovasi"],
  },
];
