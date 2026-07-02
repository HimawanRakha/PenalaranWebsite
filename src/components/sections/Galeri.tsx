import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galeriItems } from "@/data/galeri";

export function Galeri() {
  return (
    <section id="galeri" className="scroll-mt-20 bg-white px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="Galeri Kegiatan" description="Momen-momen dari pelatihan, kompetisi, hingga acara internal UKM Penalaran ITS." />
        </Reveal>

        <div className="mt-14 grid grid-flow-row-dense grid-cols-2 gap-4 auto-rows-[170px] sm:grid-cols-4 sm:auto-rows-[190px] sm:gap-5">
          {galeriItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 80} className={`h-full ${item.span ?? ""}`}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-surface-alt">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">{item.category}</span>
                  <p className="font-display text-sm font-bold text-white sm:text-base">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
