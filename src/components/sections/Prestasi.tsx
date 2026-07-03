import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const topPhotos = [
  { src: "/prestasi1.jpeg", rotate: "-rotate-3", shift: "translate-y-3" },
  { src: "/prestasi2.jpeg", rotate: "rotate-2", shift: "-translate-y-4" },
  { src: "/prestasi3.jpeg", rotate: "-rotate-2", shift: "translate-y-2" },
  { src: "/prestasi4.jpeg", rotate: "rotate-3", shift: "-translate-y-2" },
];

const bottomPhotos = [
  { src: "/prestasi5.jpeg", rotate: "rotate-2", shift: "-translate-y-2" },
  { src: "/prestasi6.jpeg", rotate: "-rotate-3", shift: "translate-y-3" },
  { src: "/prestasi7.jpeg", rotate: "rotate-1", shift: "-translate-y-3" },
  { src: "/prestasi8.jpeg", rotate: "-rotate-2", shift: "translate-y-2" },
];

function PhotoCard({ src, rotate, shift, delay }: { src: string; rotate: string; shift: string; delay: number }) {
  return (
    <div className={shift}>
      <Reveal delay={delay}>
        <div
          className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-white/90 shadow-xl transition-all duration-300 hover:z-20 hover:rotate-0 hover:scale-105 ${rotate}`}
        >
          <Image src={src} alt="Dokumentasi prestasi UKM Penalaran ITS" fill sizes="(min-width: 640px) 160px, 45vw" className="object-cover" />
        </div>
      </Reveal>
    </div>
  );
}

export function Prestasi() {
  return (
    <section id="prestasi" className="relative scroll-mt-20 overflow-hidden px-5 py-24 text-white md:px-10">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-jacket.JPG" alt="Anggota UKM Penalaran ITS berkumpul bersama mengenakan jaket organisasi" fill sizes="100vw" className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      </div>
      <div className="pointer-events-none absolute -top-20 right-0 z-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 z-0 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="Prestasi & Pencapaian" description="Rekam jejak yang menempatkan UKM Penalaran ITS sebagai unit kegiatan mahasiswa dengan pencapaian terbaik." tone="dark" />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {topPhotos.map((photo, index) => (
            <PhotoCard key={photo.src} {...photo} delay={index * 80} />
          ))}
        </div>

        <Reveal delay={150}>
          <div className="relative my-10 flex flex-col items-center text-center sm:my-14">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[110px]" />

            <span className="relative font-display text-[6.5rem] font-black leading-none text-primary drop-shadow-[0_0_80px_rgba(255,198,41,0.55)] sm:text-[9rem] md:text-[11rem]">#1</span>

            <p className="relative mt-2 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              UKM Terprestatif <span className="text-primary">se-ITS</span>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {bottomPhotos.map((photo, index) => (
            <PhotoCard key={photo.src} {...photo} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
