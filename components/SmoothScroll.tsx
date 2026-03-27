"use client"
import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    function easeOutQuart(t: number) { return 1 - (--t) * t * t * t; }

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      if (!id.startsWith('#')) return; // Ignore non-hash links
      const target = document.querySelector(id);
      if (!target) return;
      
      e.preventDefault();
      const hH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80;
      const offset = hH + 10;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutQuart(progress);
        window.scrollTo(0, startPosition + (distance * ease));
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
      requestAnimationFrame(animation);
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  return null;
}
