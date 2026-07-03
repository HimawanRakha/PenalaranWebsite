export type Testimoni = {
  name: string;
  role: string;
  message: string;
  photo: string;
};

/**
 * Placeholder data — nama, jabatan, pesan, dan foto masih dummy.
 * Ganti masing-masing field dan foto di /public setelah data asli tersedia.
 */
export const testimoniList: Testimoni[] = [
  {
    name: "Nama Anggota 1",
    role: "Ketua Umum UKM Penalaran ITS",
    message: "Testimoni masih data sementara — ceritakan pengalaman memimpin organisasi dan dampaknya bagi pengembangan diri di sini. ",
    photo: "/rakha2.jpg",
  },
  {
    name: "Nama Anggota 2",
    role: "Koordinator BSO Pandawa",
    message: "Testimoni masih data sementara — ceritakan pengalaman riset dan kepenulisan ilmiah bersama BSO Pandawa di sini.",
    photo: "/rakha2.jpg",
  },
  {
    name: "Nama Anggota 3",
    role: "Alumni, Angkatan 2021",
    message: "Testimoni masih data sementara — ceritakan manfaat jangka panjang berorganisasi di UKM Penalaran setelah lulus.",
    photo: "/rakha2.jpg",
  },
  {
    name: "Nama Anggota 4",
    role: "Staf Departemen Media Kreatif",
    message: "Testimoni masih data sementara — ceritakan pengalaman berkarya di bidang media dan publikasi di sini.",
    photo: "/rakha2.jpg",
  },
  {
    name: "Nama Anggota 5",
    role: "Peserta Diklat Dasar 2025",
    message: "Testimoni masih data sementara — ceritakan kesan pertama bergabung dengan UKM Penalaran ITS di sini.",
    photo: "/rakha2.jpg",
  },
];
