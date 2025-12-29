"use client";

import { useState } from "react";
import HeroStatic from "./hero/HeroStatic";
import HeroScrollStory from "./hero/HeroScrollStory";

interface HeroSectionProps {
  onScrollProgress?: (progress: number) => void;
}

const HeroSection = ({ onScrollProgress }: HeroSectionProps) => {
  return (
    <>
      <HeroStatic />
      <HeroScrollStory onProgressChange={onScrollProgress} />
    </>
  );
};

export default HeroSection;
