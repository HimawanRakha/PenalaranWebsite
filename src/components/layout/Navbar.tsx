"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/ui/LogoMark";
import { navLinks } from "@/data/nav";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className={`border-b transition-colors duration-300 ${scrolled || open ? "border-line bg-background/90 backdrop-blur-md" : "border-transparent bg-background/60 backdrop-blur-sm"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-6 lg:px-10">
          <a href="#beranda" className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink">
            <LogoMark />
            UKM Penalaran ITS
          </a>

          <nav className="hidden items-center gap-4 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`relative whitespace-nowrap font-display text-sm font-semibold transition-colors ${active === link.href ? "text-ink" : "text-muted hover:text-ink"}`}>
                {link.label}
                {active === link.href ? <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" /> : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2 font-display text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95 sm:inline-block lg:px-5 lg:py-2.5"
            >
              Bergabung
            </a>
            <button type="button" onClick={() => setOpen((prev) => !prev)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-t border-line bg-background px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-display text-base font-semibold ${active === link.href ? "bg-surface-alt text-ink" : "text-muted"}`}>
                {link.label}
              </a>
            ))}
            <a href="#kontak" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-primary px-5 py-3 text-center font-display text-sm font-bold text-primary-foreground">
              Bergabung
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
