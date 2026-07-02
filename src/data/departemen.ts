export type Departemen = {
  name: string;
  description: string;
  logo: string;
  gradient: string;
};

/**
 * Ordered top-to-bottom along a warm-to-cool color spectrum to match each
 * department's logo (pink/orange -> magenta/purple -> blue).
 */
export const departemenList: Departemen[] = [
  {
    name: "Badan Pengurus Harian",
    description: "Menggerakkan roda organisasi sehari-hari dan mengoordinasikan seluruh bidang di UKM Penalaran ITS.",
    logo: "/BadanPengurusHarian.png",
    gradient: "from-accent-pink to-accent-orange",
  },
  {
    name: "Kajian Kasusastraan",
    description: "Wadah diskusi sastra, budaya, dan isu sosial melalui kajian rutin serta karya tulis kreatif.",
    logo: "/KajianKasusastraan.png",
    gradient: "from-secondary to-secondary-dark",
  },
  {
    name: "Penelitian & Keilmiahan",
    description: "Mendorong budaya riset melalui pendampingan dan publikasi ilmiah.",
    logo: "/PenelitianKeilmiahan.png",
    gradient: "from-secondary-dark to-accent-blue",
  },
  {
    name: "Kaderisasi",
    description: "Bertanggung jawab atas regenerasi, pembinaan karakter, dan jenjang kaderisasi anggota.",
    logo: "/Kaderisasi.png",
    gradient: "from-accent-blue to-secondary",
  },
  {
    name: "Eternal",
    description: "Merawat kekeluargaan dan hubungan jangka panjang antar anggota, pengurus, dan alumni.",
    logo: "/Eternal.png",
    gradient: "from-secondary to-accent-blue",
  },
  {
    name: "Media Kreatif",
    description: "Mengelola desain, konten, dan publikasi digital untuk memperkuat citra UKM Penalaran.",
    logo: "/MediaKreatif.png",
    gradient: "from-ink to-accent-blue",
  },
];
