'use client';

import { tw } from "@/lib/tailwind-theme";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress tracking
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    // Add smooth scroll behavior to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const link = e.target as HTMLAnchorElement;
      const targetId = link.getAttribute('href')?.substring(1);
      
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 100; // Offset for fixed navigation
          const elementPosition = element.offsetTop - navHeight;
          
          // Enhanced smooth scroll with easing
          const startPosition = window.pageYOffset;
          const distance = elementPosition - startPosition;
          const duration = 800; // 800ms duration
          let startTime: number | null = null;
          
          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };
          
          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * easedProgress);
            
            if (progress < 1) {
              requestAnimationFrame(animation);
            }
          };
          
          requestAnimationFrame(animation);
        }
      }
    };
    
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Add scroll progress listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Cleanup event listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav className="container mx-auto px-6 py-6 lg:py-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl lg:text-3xl font-bold font-heading cursor-pointer transition-all duration-500 hover:scale-110 pulse-animation">
            Mohamed Shaaban
          </a>
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <a href="#home" className={`${tw.nav.link} text-lg font-body font-medium transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
              Home
            </a>
            <a href="#about" className={`${tw.nav.link} text-lg font-body font-medium transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
              About
            </a>
            <a href="#experience" className={`${tw.nav.link} text-lg font-body font-medium transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
              Experience
            </a>
            <a href="#skills" className={`${tw.nav.link} text-lg font-body font-medium transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
              Skills
            </a>
            <a href="#contact" className={`${tw.nav.link} text-lg font-body font-medium transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
