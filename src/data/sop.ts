import type { LucideIcon } from "lucide-react";
import { Building2, Handshake } from "lucide-react";

export type Sop = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
};

export const sopList: Sop[] = [
  {
    title: "SOP Media Partner",
    description: "Panduan resmi bagi pihak eksternal yang ingin menjalin kerja sama media partner dengan UKM Penalaran ITS.",
    href: "https://drive.google.com/file/d/160Brh4cuczupLvoJDIHQHMMkYhcS4U6g/view?usp=sharing",
    icon: Handshake,
    gradient: "from-accent-blue to-secondary",
  },
  {
    title: "SOP Studi Banding & Kolaborasi",
    description: "Panduan resmi pengajuan studi banding, benchmarking, dan kolaborasi antar lembaga dengan UKM Penalaran ITS.",
    href: "https://drive.google.com/file/d/1RtpFLc318Jp5munp2PW_3qn4dVTANkKI/view?usp=sharing",
    icon: Building2,
    gradient: "from-accent-orange to-accent-pink",
  },
];
