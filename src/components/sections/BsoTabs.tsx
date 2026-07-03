"use client";

import Image from "next/image";
import { useState } from "react";
import { bsoList, type Bso } from "@/data/bso";
import { LogoMark } from "@/components/ui/LogoMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function BsoPoster({ bso }: { bso: Bso }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-white/25" />
      <div className="relative -rotate-3 overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-2.5 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:rotate-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/70">
          {bso.heroImage ? (
            <Image
              src={bso.heroImage}
              alt={bso.heroImageAlt ?? `Poster ${bso.name}`}
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-contain object-center"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-center text-xs font-semibold uppercase tracking-wider opacity-60">Bingkai gambar</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function BsoTabs() {
  const [activeId, setActiveId] = useState(bsoList[0].id);
  const active = bsoList.find((bso) => bso.id === activeId) ?? bsoList[0];
  const { theme } = active;

  return (
    <section id="bso" className="scroll-mt-20 bg-white px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Badan Semi Otonom (BSO)"
            description="Wadah pengembangan minat dan bakat spesifik di bidang penalaran, riset, dan penyelenggaraan acara."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {bsoList.map((bso) => (
              <button
                key={bso.id}
                type="button"
                onClick={() => setActiveId(bso.id)}
                aria-pressed={activeId === bso.id}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold transition-all ${
                  activeId === bso.id
                    ? bso.theme.tabActive
                    : "border border-line bg-slate-50 text-muted hover:border-line hover:text-ink"
                }`}
              >
                <LogoMark src={bso.logo} alt={`Logo ${bso.name}`} className="h-5 w-5 rounded-md" padding="p-0.5" ring={false} />
                {bso.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div
            key={active.id}
            className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br p-8 [animation:fadeIn_0.4s_ease-out] sm:p-10 md:p-12 lg:p-16 ${theme.card}`}
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl ${theme.glowPrimary}`} />
            <div className={`pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full blur-3xl ${theme.glowSecondary}`} />

            <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <BsoPoster bso={active} />

              <div className="relative">
                <div className="pointer-events-none absolute -right-6 -top-12 z-0 h-56 w-56 opacity-[0.15] sm:h-72 sm:w-72 lg:-right-10">
                  <Image src={active.logo} alt={`Watermark Logo ${active.name}`} fill sizes="288px" className="object-contain" />
                </div>

                <div className="relative z-10">
                  <p className={`font-display text-sm font-bold uppercase tracking-wider ${theme.label}`}>{active.tagline}</p>
                  <h3 className={`mt-2 font-display text-5xl font-black leading-[0.95] sm:text-6xl md:text-7xl ${theme.title}`}>
                    {active.name}
                  </h3>
                  <p className={`mt-5 max-w-xl text-base leading-relaxed ${theme.description}`}>{active.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.focus.map((item) => (
                      <span key={item} className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={active.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex rounded-full px-6 py-3 font-display text-sm font-bold transition-transform hover:scale-105 ${theme.cta}`}
                  >
                    {active.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
