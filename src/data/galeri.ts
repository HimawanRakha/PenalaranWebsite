export type GaleriItem = {
  title: string;
  category: string;
  src: string;
  span?: string;
};

export const galeriItems: GaleriItem[] = [
  { title: "Studi Banding", category: "Kunjungan", src: "/studi-banding.JPG", span: "col-span-2 row-span-2" },

  {
    title: "Wisuda Alumni",
    category: "Seremoni",
    src: "/wisuda-alumni.jpeg",
    span: "row-span-2",
  },
  { title: "Dies Natalis", category: "Perayaan", src: "/diesnatalis.jpeg" },
  {
    title: "Internalisasi",
    category: "Pembinaan Anggota",
    src: "/internalisasi.JPG",
  },
  {
    title: "Rapat Kuartal",
    category: "Internal",
    src: "/rapatkuartal.jpeg",
    span: "col-span-2",
  },
  {
    title: "Welcoming Party Staff",
    category: "Kekeluargaan",
    src: "/welparstaff.jpg",
    span: "col-span-2",
  },
];
