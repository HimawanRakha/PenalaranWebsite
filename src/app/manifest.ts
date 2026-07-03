import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UKM Penalaran ITS",
    short_name: "Penalaran ITS",
    description: "UKM Penalaran ITS memberdayakan generasi peneliti dan pemikir kritis melalui riset, kompetisi penalaran, dan pengembangan karya tulis ilmiah.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f2265",
    icons: [
      {
        src: "/logo-penalaran.JPG",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
