"use client";

import Image from "next/image";
import { useState } from "react";
import { bsoList, type Bso } from "@/data/bso";
import { LogoMark } from "@/components/ui/LogoMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function BsoHeroFrame({ bso }: { bso: Bso }) {
  return (
    <div className="mx-auto w-full max-w-sm lg:mx-0 lg:h-full lg:max-w-none">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-2.5 shadow-md backdrop-blur-sm">
        <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-xl bg-white/70 sm:min-h-[320px] lg:min-h-[360px]">
          {bso.heroImage ? (
            <Image
              src={bso.heroImage}
              alt={bso.heroImageAlt ?? `Gambar ${bso.name}`}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, 100vw"
              className="object-contain object-center"
            />
          ) : (
            <div className={`flex h-full min-h-[280px] items-center justify-center rounded-xl border-2 border-dashed sm:min-h-[320px] lg:min-h-[360px] ${bso.theme.tag}`}>
              <span className="px-6 text-center text-xs font-semibold uppercase tracking-wider opacity-70">Bingkai gambar</span>
            </div>
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
                <LogoMark src={bso.logo} alt="" className="h-5 w-5 rounded-md" padding="p-0.5" ring={false} />
                {bso.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div
            key={active.id}
            className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br p-8 shadow-xl [animation:fadeIn_0.4s_ease-out] sm:p-10 md:p-12 lg:p-14 ${theme.card}`}
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl ${theme.glowPrimary}`} />
            <div className={`pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full blur-3xl ${theme.glowSecondary}`} />
            <div className={`absolute inset-y-8 left-0 w-1 rounded-full ${theme.stripe}`} />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,30%)] lg:items-stretch lg:gap-10">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/90 shadow-sm backdrop-blur-sm">
                  <LogoMark src={active.logo} alt={`Logo ${active.name}`} className="h-full w-full rounded-xl" padding="p-2" ring={false} />
                </div>
                <div>
                  <p className={`font-display text-sm font-bold uppercase tracking-wider ${theme.label}`}>{active.tagline}</p>
                  <h3 className={`mt-2 font-display text-3xl font-bold ${theme.title}`}>{active.name}</h3>
                  <p className={`mt-4 max-w-2xl text-base leading-relaxed ${theme.description}`}>{active.description}</p>
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

              <BsoHeroFrame bso={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
