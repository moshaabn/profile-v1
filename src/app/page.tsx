import type { Metadata } from "next";
import { tw } from "@/lib/tailwind-theme";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimationInitializer from "@/components/ScrollAnimationInitializer";

export const metadata: Metadata = {
  title: "Home",
  description: "Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in designing and developing scalable web applications.",
};

export default function Home() {
  return (
    <div className={`min-h-screen ${tw.gradient.hero} ${tw.text.primary}`}>
      <ScrollAnimationInitializer />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
