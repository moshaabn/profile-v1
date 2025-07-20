'use client';

import { tw } from "@/lib/tailwind-theme";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  useScrollAnimation();

  return (
    <main id="home" className="container mx-auto px-6 py-20 lg:py-32 relative">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className={`animate-bounce-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${tw.gradient.text} leading-tight`}>
          Mohamed Shaaban - Senior Software Engineer & Backend Team Lead
        </h1>
        <p className={`animate-on-scroll text-lg md:text-xl lg:text-2xl mb-12 ${tw.text.muted} max-w-3xl mx-auto leading-relaxed font-body`}>
          Senior Backend Engineer and Team Lead with 7+ years of proven expertise in building scalable enterprise applications. 
          Specialized in .NET Core, Node.js, microservices architecture, and leading high-performing backend development teams.
        </p>
        <div className="animate-slide-left flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#skills" 
            className={`${tw.button.primary} font-semibold py-4 px-8 rounded-xl text-lg font-body transition-all duration-500 transform hover:scale-110 pulse-animation`}
          >
            View My Skills
          </a>
          <a 
            href="#contact" 
            className={`${tw.button.secondary} font-semibold py-4 px-8 rounded-xl text-lg font-body transition-all duration-500 transform hover:scale-110`}
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-animation absolute top-20 left-10 w-4 h-4 bg-emerald-500 rounded-full opacity-30" style={{ animationDelay: '0s' }}></div>
        <div className="float-animation absolute top-40 right-20 w-6 h-6 bg-emerald-400 rounded-full opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="float-animation absolute bottom-20 left-20 w-5 h-5 bg-emerald-300 rounded-full opacity-25" style={{ animationDelay: '2s' }}></div>
        <div className="float-animation absolute bottom-40 right-10 w-3 h-3 bg-emerald-500 rounded-full opacity-35" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </main>
  );
}
