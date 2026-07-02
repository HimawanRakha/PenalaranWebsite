import Image from "next/image";
import { Award, Brain, FlaskConical, Lightbulb, TrendingUp, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentColors = ["text-accent-pink", "text-accent-blue", "text-secondary", "text-accent-orange"];

// const stats = [
//   { value: "500+", label: "Anggota Aktif" },
//   { value: "50+", label: "Penghargaan Diraih" },
//   { value: "100+", label: "PKM Terdanai" },
//   { value: "15+", label: "Tahun Berkarya" },
// ];

const benefits = [
  { icon: Users, label: "Jejaring Luas" },
  { icon: TrendingUp, label: "Peningkatan Skill" },
  { icon: Award, label: "Prestasi Akademik" },
  { icon: Brain, label: "Pola Pikir Kritis" },
];

const programs = [
  {
    icon: Lightbulb,
    title: "Pengembangan Nalar",
    description: "Melatih kemampuan berpikir kritis dan analitis melalui diskusi rutin serta kajian isu terkini yang relevan.",
    tone: "light" as const,
  },
  {
    icon: FlaskConical,
    title: "Pendampingan Riset",
    description: "Bimbingan intensif penyusunan karya tulis ilmiah dari tahap ideasi hingga publikasi di jurnal bereputasi.",
    tone: "solid" as const,
  },
  {
    icon: Trophy,
    title: "Persiapan Kompetisi",
    description: "Pelatihan komprehensif untuk menghadapi berbagai kompetisi penalaran tingkat nasional dan internasional.",
    tone: "light" as const,
  },
];

export function About() {
  return (
    <section id="tentang" className="relative scroll-mt-20 overflow-hidden px-5 py-24 md:px-10">
      <div className="absolute inset-0 z-0">
        <Image src="/bg-jakcket2.JPG" alt="" fill sizes="100vw" className="object-cover object-[center_35%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
      </div>
      <div className="pointer-events-none absolute -top-20 left-0 z-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 z-0 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="Bagaimana UKM Penalaran ITS Membantu Anda" description="Platform terpadu untuk mengembangkan nalar kritis dan kemampuan riset melalui program unggulan serta networking." tone="dark" />
        </Reveal>

        {/* <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
                <p className={`font-display text-3xl font-black sm:text-4xl ${accentColors[index % accentColors.length]}`}>{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div> */}

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {benefits.map((benefit, index) => (
              <span key={benefit.label} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink">
                <benefit.icon size={16} className={accentColors[index % accentColors.length]} strokeWidth={2.5} />
                {benefit.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => {
            const isSolid = program.tone === "solid";
            return (
              <Reveal key={program.title} delay={index * 120} className="h-full">
                <div
                  className={`flex h-full flex-col items-center rounded-[2rem] p-10 transition-all duration-300 ${isSolid ? "bg-secondary text-white shadow-xl hover:scale-[1.02]" : "border border-line bg-white shadow-sm hover:shadow-xl"}`}
                >
                  <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${isSolid ? "bg-white/20" : "bg-primary"}`}>
                    <program.icon size={28} className={isSolid ? "text-white" : "text-ink"} strokeWidth={2} />
                  </div>
                  <h3 className={`text-center font-display text-xl font-bold ${isSolid ? "text-white" : "text-ink"}`}>{program.title}</h3>
                  <p className={`mt-4 text-center text-sm leading-relaxed ${isSolid ? "text-white/90" : "text-muted"}`}>{program.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
