import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { BsoTabs } from "@/components/sections/BsoTabs";
import { Departemen } from "@/components/sections/Departemen";
import { Galeri } from "@/components/sections/Galeri";
import { Hero } from "@/components/sections/Hero";
import { Kontak } from "@/components/sections/Kontak";
import { Prestasi } from "@/components/sections/Prestasi";
import { Testimoni } from "@/components/sections/Testimoni";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <BsoTabs />
        <Departemen />
        <Prestasi />
        <Galeri />
        <Testimoni />
        <Kontak />
      </main>
      <Footer />
    </>
  );
}
