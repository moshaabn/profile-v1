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
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mohamed Shaaban - Senior Software Engineer Portfolio",
  description: "Professional portfolio of Mohamed Shaaban - Senior Software Engineer with 7+ years of experience in designing and developing scalable web applications using .NET Core, Node.js, React, and TypeScript.",
};

export default function Home() {
  return (
    <div className={`min-h-screen ${tw.gradient.hero} ${tw.text.primary}`}>
      <JsonLd />
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
