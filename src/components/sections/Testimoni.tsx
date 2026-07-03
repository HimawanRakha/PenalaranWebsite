"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimoniList } from "@/data/testimoni";

export function Testimoni() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(index);
  };

  return (
    <section id="testimoni" className="relative scroll-mt-20 overflow-hidden bg-ink px-5 py-24 text-white md:px-10">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-jacket3.JPG" alt="Latar belakang testimoni UKM Penalaran ITS" fill priority sizes="100vw" className="object-cover object-center blur-[2px] scale-105 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-ink/65 to-black/80" />
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading align="left" tone="dark" title="Apa Kata Mereka" description="Cerita dan kesan dari anggota, alumni UKM Penalaran ITS." />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(active - 1, 0))}
                aria-label="Testimoni sebelumnya"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(Math.min(active + 1, testimoniList.length - 1))}
                aria-label="Testimoni berikutnya"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div ref={trackRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimoniList.map((item) => (
              <div key={item.name} className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/15 sm:w-[60%] sm:flex-row lg:w-[38%]">
                <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-2/5">
                  <Image src={item.photo} alt={item.name} fill sizes="(min-width: 1024px) 220px, 60vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <Quote className="h-8 w-8 text-secondary" fill="currentColor" strokeWidth={0} />
                    <p className="mt-4 text-base font-medium leading-relaxed text-white/90">{item.message}</p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-white">{item.name}</p>
                    <p className="text-xs text-white/60">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2 sm:justify-start">
          {testimoniList.map((item, index) => (
            <button key={item.name} type="button" onClick={() => scrollToIndex(index)} aria-label={`Ke testimoni ${index + 1}`} className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-primary" : "w-2 bg-white/25"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
