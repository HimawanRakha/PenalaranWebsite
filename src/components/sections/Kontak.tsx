"use client";

import { useState } from "react";
import { AtSign, ExternalLink, FileText, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sopList } from "@/data/sop";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Gedung SCC lt. 3 Ruang 309, Kampus ITS Sukolilo, Surabaya, Indonesia 60111" },
  { icon: Mail, label: "Kerja Sama", value: "+62 858-6716-2251 (Nayla - Eternal)" },
  { icon: AtSign, label: "Instagram", value: "@penalaranits" },
];

export function Kontak() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.nama || "Website"}`);
    const body = encodeURIComponent(`${form.pesan}\n\nBalas ke: ${form.email}`);
    window.location.href = `mailto:ukmpenalaran@its.ac.id?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="kontak" className="scroll-mt-20 bg-slate-50 px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title="Mari Terhubung" description="Punya pertanyaan seputar program, BSO, atau ingin berkolaborasi? Sampaikan pesan Anda kepada kami." />
        </Reveal>

        <div className="mt-14 grid place-items-center">
          <Reveal className="w-full max-w-lg lg:max-w-5xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="space-y-5 rounded-[2rem] border border-line bg-white p-8 lg:flex-1">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-ink">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{info.label}</p>
                      <p className="font-display text-sm font-semibold text-ink">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-8 text-white lg:flex-1">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <h3 className="relative font-display text-xl font-bold">Siap Bergabung?</h3>
                <p className="relative mt-2 text-sm text-white/85">Isi formulir pendaftaran resmi melalui Google Form untuk menjadi bagian dari UKM Penalaran ITS.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-sm font-bold text-secondary transition-transform hover:scale-105"
                >
                  Daftar via Google Form
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="w-full max-w-lg lg:max-w-5xl">
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {sopList.map((sop) => (
                <a
                  key={sop.title}
                  href={sop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] ${sop.gradient}`}
                >
                  <sop.icon className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-white/15 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  <div className="relative z-10">
                    {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                      <FileText size={12} />
                      Dokumen SOP
                    </span> */}
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug">{sop.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{sop.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold">
                      Lihat Dokumen
                      <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-line bg-white p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="mb-1.5 block text-sm font-semibold text-ink">
                    Nama
                  </label>
                  <input
                    id="nama"
                    required
                    value={form.nama}
                    onChange={(event) => setForm((f) => ({ ...f, nama: event.target.value }))}
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm((f) => ({ ...f, email: event.target.value }))}
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="pesan" className="mb-1.5 block text-sm font-semibold text-ink">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  required
                  rows={5}
                  value={form.pesan}
                  onChange={(event) => setForm((f) => ({ ...f, pesan: event.target.value }))}
                  className="w-full resize-none rounded-xl border border-line px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
                  placeholder="Tulis pesan Anda..."
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95">
                <Send size={16} />
                Kirim Pesan
              </button>
              {sent ? <p className="text-sm font-medium text-secondary-dark">Membuka aplikasi email Anda…</p> : null}
            </form>

            <div className="mt-6 overflow-hidden rounded-[2rem] border border-line">
              <iframe title="Lokasi ITS Surabaya" src="https://www.google.com/maps?q=Institut+Teknologi+Sepuluh+Nopember,+Surabaya&output=embed" className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
