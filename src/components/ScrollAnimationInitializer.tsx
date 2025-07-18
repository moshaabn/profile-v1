'use client';

import { useEffect } from 'react';

export default function ScrollAnimationInitializer() {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-bounce-in'
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
}
