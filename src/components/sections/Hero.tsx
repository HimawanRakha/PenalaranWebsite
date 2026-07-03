import { LogoMark } from "@/components/ui/LogoMark";
import { Reveal } from "@/components/ui/Reveal";

const avatarStack = [
  { label: "RA", className: "bg-secondary" },
  { label: "PT", className: "bg-primary text-primary-foreground" },
  { label: "MK", className: "bg-ink" },
];

export function Hero() {
  return (
    <section id="beranda" className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden pb-20 pt-28">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          {/* <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-alt px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-secondary-dark">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Riset &amp; Penalaran ITS
            </span>
          </Reveal> */}

          <Reveal delay={100}>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Aku Ada Karena
              <br />
              <span className="relative inline-block">
                <span className="relative z-10"> Aku Berpikir.</span>
                <span className="absolute bottom-1 left-0 -z-0 h-4 w-full -rotate-1 bg-primary/70 sm:h-5" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              UKM PENALARAN ITS memberdayakan generasi peneliti dan pemikir kritis masa depan melalui tradisi akademik yang ketat, riset kolaboratif, dan inovasi yang berdampak nyata.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <a href="#kontak" className="rounded-full bg-primary px-8 py-4 text-center font-display text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95">
                Daftar Sekarang
              </a>
              <a href="#tentang" className="rounded-full bg-ink px-8 py-4 text-center font-display text-base font-bold text-white transition-colors hover:bg-ink/90">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </Reveal>

          {/* <Reveal delay={400}>
            <div className="flex items-center justify-center gap-4 pt-4 lg:justify-start">
              <div className="flex -space-x-3">
                {avatarStack.map((avatar) => (
                  <div key={avatar.label} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-background text-xs font-bold text-white ${avatar.className}`}>
                    {avatar.label}
                  </div>
                ))}
              </div>
              <span className="font-display text-sm font-semibold text-muted">+200 Anggota Aktif</span>
            </div>
          </Reveal> */}
        </div>

        <Reveal delay={200} className="relative hidden lg:block">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-3/4 w-3/4 rotate-12 rounded-[2.5rem] bg-primary" />
              <div className="absolute h-3/4 w-3/4 -rotate-6 rounded-[2.5rem] bg-secondary opacity-80 mix-blend-multiply" />
              <div className="absolute flex h-2/3 w-2/3 items-center justify-center rounded-[2rem] bg-white p-10 shadow-2xl">
                <LogoMark className="h-full w-full rounded-none" padding="p-0" ring={false} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
