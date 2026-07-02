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
      card: "from-bso-pandawa-soft/12 via-bso-pandawa-blush/8 to-bso-pandawa-warm/15 border border-bso-pandawa-soft/15 shadow-md backdrop-blur-md",
      glowPrimary: "bg-bso-pandawa-accent/15",
      glowSecondary: "bg-accent-orange/15",
      stripe: "bg-gradient-to-b from-bso-pandawa-soft/50 via-bso-pandawa-blush/20 to-transparent",
      label: "text-bso-pandawa-soft font-bold",
      title: "text-ink",
      description: "text-ink/80",
      tag: "border border-bso-pandawa-soft/20 bg-bso-pandawa-soft/5 text-bso-pandawa-soft font-medium",
      cta: "bg-bso-pandawa-soft text-white hover:bg-bso-pandawa-soft/90 shadow-md shadow-bso-pandawa-soft/20",
      tabActive: "border border-transparent bg-bso-pandawa-accent text-white shadow-md",
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
      card: "from-bso-nalarfest-soft/12 via-bso-nalarfest-mist/8 to-bso-nalarfest-lilac/15 border border-bso-nalarfest-soft/15 shadow-md backdrop-blur-md",
      glowPrimary: "bg-bso-nalarfest-accent/15",
      glowSecondary: "bg-secondary/15",
      stripe: "bg-gradient-to-b from-bso-nalarfest-soft/50 via-bso-nalarfest-mist/20 to-transparent",
      label: "text-bso-nalarfest-soft font-bold",
      title: "text-ink",
      description: "text-ink/80",
      tag: "border border-bso-nalarfest-soft/20 bg-bso-nalarfest-soft/5 text-bso-nalarfest-soft font-medium",
      cta: "bg-bso-nalarfest-soft text-white hover:bg-bso-nalarfest-soft/90 shadow-md shadow-bso-nalarfest-soft/20",
      tabActive: "border border-transparent bg-bso-nalarfest-accent text-white shadow-md",
    },
    heroImage: "/nalarfestpost.png",
    heroImageAlt: "Poster Nalarfest",
    cta: "Lihat Event",
    ctaHref: "https://www.instagram.com/nalarfest/",
    focus: ["Event Nasional", "Seminar & Talkshow", "Pameran Inovasi"],
  },
];
