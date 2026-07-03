import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://penalaran.its.ac.id"),
  title: {
    default: "UKM Penalaran ITS | Menalar Masa Depan, Mengukir Prestasi",
    template: "%s | UKM Penalaran ITS",
  },
  description:
    "UKM Penalaran ITS memberdayakan generasi peneliti dan pemikir kritis melalui riset, kompetisi penalaran, dan pengembangan karya tulis ilmiah.",
  keywords: [
    "UKM Penalaran ITS",
    "Penalaran ITS",
    "Riset ITS",
    "Karya Tulis Ilmiah",
    "Institut Teknologi Sepuluh Nopember",
    "LKTI",
    "Esai",
    "Lomba Mahasiswa",
    "Pandawa",
    "Nalarfest",
    "Peneliti Muda",
    "Berpikir Kritis",
    "ITS Surabaya",
    "KTI Mahasiswa"
  ],
  authors: [{ name: "UKM Penalaran ITS" }],
  creator: "UKM Penalaran ITS",
  publisher: "UKM Penalaran ITS",
  category: "Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://penalaran.its.ac.id",
    title: "UKM Penalaran ITS | Menalar Masa Depan, Mengukir Prestasi",
    description:
      "UKM Penalaran ITS memberdayakan generasi peneliti dan pemikir kritis melalui riset, kompetisi penalaran, dan pengembangan karya tulis ilmiah.",
    siteName: "UKM Penalaran ITS",
    images: [
      {
        url: "/logo-penalaran.JPG",
        width: 1200,
        height: 630,
        alt: "Logo Resmi UKM Penalaran ITS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UKM Penalaran ITS | Menalar Masa Depan, Mengukir Prestasi",
    description:
      "UKM Penalaran ITS memberdayakan generasi peneliti dan pemikir kritis melalui riset, kompetisi penalaran, dan pengembangan karya tulis ilmiah.",
    images: ["/logo-penalaran.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-penalaran.JPG", type: "image/jpeg" }
    ],
    shortcut: "/logo-penalaran.JPG",
    apple: [
      { url: "/logo-penalaran.JPG", sizes: "180x180", type: "image/jpeg" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${lexend.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "UKM Penalaran ITS",
              "alternateName": "Unit Kegiatan Mahasiswa Penalaran Institut Teknologi Sepuluh Nopember",
              "url": "https://penalaran.its.ac.id",
              "logo": "https://penalaran.its.ac.id/logo-penalaran.JPG",
              "description": "UKM Penalaran ITS memberdayakan generasi peneliti dan pemikir kritis melalui riset, kompetisi penalaran, dan pengembangan karya tulis ilmiah.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gedung SCC lt. 3 Ruang 309, Kampus ITS Sukolilo",
                "addressLocality": "Surabaya",
                "addressRegion": "Jawa Timur",
                "postalCode": "60111",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+6285867162251",
                "contactType": "Cooperation & Public Relations",
                "areaServed": "ID",
                "availableLanguage": "Indonesian"
              },
              "sameAs": [
                "https://www.instagram.com/penalaranits/",
                "https://www.linkedin.com/company/ukm-penalaran-its/",
                "https://www.youtube.com/@MediaKreatifUKMPenalaranITS"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
