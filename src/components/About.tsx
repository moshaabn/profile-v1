'use client';

import Image from "next/image";
import { tw } from "@/lib/tailwind-theme";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation();

  return (
    <section id="about" className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <h3 className="animate-bounce-in text-3xl lg:text-4xl font-bold mb-12 text-center font-heading">About Me</h3>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-left">
            <p className={`text-lg lg:text-xl ${tw.text.muted} mb-6 leading-relaxed font-body`}>
              Results-driven Senior Backend Engineer with 7+ years of experience in designing and developing scalable web applications. 
              Proficient in .NET Core and database optimization. Adept at resolving performance bottlenecks, mentoring teams, and aligning technical solutions with business objectives.
            </p>
            <p className={`text-lg lg:text-xl ${tw.text.muted} leading-relaxed font-body`}>
              Currently working as a Senior Software Engineer at AlexApps, where I develop and maintain RESTful APIs, 
              make decisions about tech stacks, and mentor junior and mid-level engineers.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center animate-slide-right">
            <div className={`w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-8 border-4 ${tw.border.primary} shadow-xl`}>
              <Image 
                src="/me.png" 
                alt="Mohamed Shaaban"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`${tw.bg.card} p-8 rounded-2xl w-full card-hover`}>
              <h4 className={`text-xl lg:text-2xl font-semibold mb-6 ${tw.text.primary} font-heading`}>Quick Facts</h4>
              <ul className={`space-y-3 ${tw.text.muted} font-body`}>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-lg">7+ years of experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="text-lg">Senior Backend Engineer</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-lg">Expert in .NET Core & Node.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  <span className="text-lg">Team mentor & technical leader</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg">Alexandria, Egypt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
