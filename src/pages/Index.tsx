"use client";

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItHelpsSection from "@/components/HowItHelpsSection";
import WhyMyCampusSection from "@/components/WhyMyCampusSection";
import EventsSection from "@/components/EventsSection";
import CategoriesSection from "@/components/CategoriesSection";
import MeetingProposalCard from "@/components/MeetingProposalCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <>
      <Helmet>
        <title>MyCampus - Ogarnij swój dzień studencki</title>
        <meta name="description" content="MyCampus podpowiada gdzie i kiedy iść, z kim się spotkać i jak zdążyć bez stresu. MyCampus nie służy do odkrywania wydarzeń - służy do podejmowania decyzji w odpowiednim momencie." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col relative">
        <Navbar scrollProgress={scrollProgress} />
        <main className="flex-1 relative z-10">
          <HeroSection onScrollProgress={setScrollProgress} />
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <MeetingProposalCard />
            </div>
          </section>
          <HowItHelpsSection />
          <WhyMyCampusSection />
          <EventsSection />
          <CategoriesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
