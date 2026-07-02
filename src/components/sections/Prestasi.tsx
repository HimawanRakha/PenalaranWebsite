import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Prestasi() {
  return (
    <section id="prestasi" className="relative scroll-mt-20 overflow-hidden px-5 py-24 text-white md:px-10">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-jacket.JPG" alt="" fill sizes="100vw" className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      </div>
      <div className="pointer-events-none absolute -top-20 right-0 z-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 z-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="Prestasi & Pencapaian" description="Rekam jejak yang menempatkan UKM Penalaran ITS sebagai unit kegiatan mahasiswa dengan pencapaian terbaik." tone="dark" />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-16 flex flex-col items-center text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[110px]" />

            <span className="relative font-display text-[6.5rem] font-black leading-none text-primary drop-shadow-[0_0_80px_rgba(255,198,41,0.55)] sm:text-[9rem] md:text-[11rem]">#1</span>

            <p className="relative mt-2 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              UKM Terprestatif <span className="text-primary">se-ITS</span>
            </p>

            {/* <p className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-lg font-black text-primary-foreground shadow-lg shadow-primary/30 sm:text-xl">4 Kali Berturut-turut</p> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
