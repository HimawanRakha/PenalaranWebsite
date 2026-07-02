import { LogoMark } from "@/components/ui/LogoMark";
import { navLinks } from "@/data/nav";

const programs = [
  { href: "#tentang", label: "Penalaran" },
  { href: "#bso", label: "Pandawa" },
  { href: "#bso", label: "Nalarfest" },
];

const socials = [
  { href: "https://www.instagram.com/penalaranits/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/ukm-penalaran-its/", label: "LinkedIn" },
  { href: "https://www.youtube.com/@MediaKreatifUKMPenalaranITS", label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="col-span-2 space-y-4 md:col-span-6">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold">
            <LogoMark />
            UKM Penalaran ITS
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">Menggerakkan tradisi riset dan penalaran kritis mahasiswa ITS melalui karya tulis ilmiah, kompetisi, dan kolaborasi lintas bidang sejak awal berdirinya.</p>
        </div>

        <FooterColumn title="Program" links={programs} />
        <FooterColumn title="Sosial Media" links={socials} />
        <FooterColumn title="Navigasi" links={navLinks} />
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 md:px-10">© {year} UKM Penalaran ITS. Seluruh hak cipta dilindungi.</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="col-span-1 space-y-4 md:col-span-2">
      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white/50">{title}</h4>
      <ul className="space-y-2 text-sm text-white/70">
        {links.map((link, index) => (
          <li key={`${link.href}-${link.label}-${index}`}>
            <a href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
