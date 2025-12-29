"use client";

import { useEffect, useRef, useState } from "react";
import HeroText from "./HeroText";
import PhoneStory from "./PhoneStory";
import SideNarration from "./SideNarration";

// Helper functions
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

interface HeroScrollStoryProps {
  onProgressChange?: (progress: number) => void;
}

export default function HeroScrollStory({ onProgressChange }: HeroScrollStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const start = sectionRef.current.offsetTop;
      const height = sectionRef.current.offsetHeight - window.innerHeight;

      const p = Math.min(Math.max((scrollY - start) / height, 0), 1);
      setProgress(p);
      
      // Only pass progress when actually scrolling in the section (progress > 0.05)
      // This prevents navbar from hiding immediately on page load
      if (p > 0.05) {
        onProgressChange?.(p);
      } else {
        onProgressChange?.(0);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [onProgressChange]);

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      {/* Sticky container - Apple pattern */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hero text layer */}
        <HeroText progress={progress} />

        {/* Phone story layer */}
        <PhoneStory progress={progress} />

        {/* Side narration layer */}
        <SideNarration progress={progress} />
      </div>
    </section>
  );
}

