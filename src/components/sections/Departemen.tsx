import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { departemenList } from "@/data/departemen";

export function Departemen() {
  return (
    <section id="departemen" className="scroll-mt-20 bg-slate-50 px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="Departemen Internal" description="Bidang-bidang yang menjalankan operasional dan program kerja UKM Penalaran ITS sehari-hari." />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {departemenList.map((dept, index) => (
            <Reveal key={dept.name} delay={index * 80}>
              <div className={`group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br shadow-sm transition-shadow duration-300 hover:shadow-xl ${dept.gradient}`}>
                <div className="absolute inset-x-0 bottom-0 top-[34%] flex items-center justify-center p-6">
                  <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image src={dept.logo} alt={`Maskot/Logo Departemen ${dept.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain drop-shadow-xl" />
                  </div>
                </div>

                <div className="absolute inset-x-0 top-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/75">Departemen Internal</p>
                  <h3 className="mt-1 font-display text-xl font-bold leading-tight text-white sm:text-2xl">{dept.name}</h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-white font-bold">{dept.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
