import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MyCampus - Platforma wydarzeń studenckich</title>
        <meta name="description" content="Odkrywaj wydarzenia studenckie, dołączaj do grup i nawiązuj przyjaźnie na kampusie. MyCampus łączy studentów poprzez wspólne pasje." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">
          <HeroSection />
          <EventsSection />
          <CategoriesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
