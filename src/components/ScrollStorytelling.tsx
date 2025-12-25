import { useEffect, useRef, useState } from "react";
import { Users, Clock, ShoppingBag, Handshake, Bus, Calendar, MapPin, Film, Send, Plus, X, ArrowLeft, Settings, Home, School, Lock, Ban, Plus as AddIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper function to get OSM tile URL
const getOSMTile = (lat: number, lon: number, zoom: number) => {
  const n = Math.pow(2, zoom);
  const x = Math.floor((lon + 180) / 360 * n);
  const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * n);
  return `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
};

// Simple map component with marker overlay
const MapWithMarker = ({ lat, lon, zoom, width, height, markerColor }: { lat: number; lon: number; zoom: number; width: number; height: number; markerColor: string }) => {
  const tileUrl = getOSMTile(lat, lon, zoom);
  
  return (
    <div className="relative rounded-2xl shadow-lg overflow-hidden" style={{ width, height }}>
      <img 
        src={tileUrl} 
        alt="Map" 
        className="w-full h-full object-cover"
        crossOrigin="anonymous"
        onError={(e) => {
          e.currentTarget.src = '/placeholder.svg';
        }}
      />
      {/* Marker in center */}
      <div 
        className="absolute"
        style={{ 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -100%)'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
            fill={markerColor}
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

// Screen content components
const Screen1_PlanDnia = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md p-4 pb-2 border-b border-border/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="size-10 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-border"></div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background rounded-full"></div>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-foreground">MyCampus</h2>
        </div>
        <button className="p-2 rounded-full hover:bg-muted transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
    
    <div className="flex flex-col pb-6 pt-2 px-4">
      <h1 className="text-[32px] font-bold leading-tight tracking-tight mb-1 text-foreground">Twój Dzień</h1>
      <p className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
        <Calendar className="w-4 h-4" />
        24 paź • <Clock className="w-4 h-4" /> 18°C
      </p>
    </div>
    
    <div className="mb-8 px-4">
      <h2 className="text-lg font-bold leading-tight tracking-tight px-1 mb-3 text-foreground">Twój Dzień w Pigułce</h2>
      <div className="bg-card rounded-lg p-5 border border-border shadow-sm">
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-foreground">3h 30m</span>
            <span className="text-sm text-muted-foreground font-medium">Całkowity wolny czas dziś</span>
          </div>
          <div className="text-right">
            <span className="block text-yellow text-sm font-bold">Następne okno</span>
            <span className="text-foreground font-semibold">19:30 - 23:00</span>
          </div>
        </div>
        <div className="flex w-full h-12 rounded-full overflow-hidden gap-1 bg-muted p-1">
          <div className="flex-1 bg-muted/50 rounded-l-full flex items-center justify-center opacity-50">
            <School className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="w-[15%] bg-muted flex items-center justify-center border-l-2 border-background">
            <Bus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="w-[20%] bg-muted/50 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-[2] bg-yellow rounded-r-full flex items-center justify-center gap-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
            <Clock className="w-4 h-4 text-foreground" />
            <span className="text-foreground text-xs font-bold">Wolny Czas</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Screen2_OknoCzasu = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    <div className="sticky top-0 z-50 flex items-center bg-background/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-border/50">
      <button className="size-12 shrink-0 flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
        <ArrowLeft className="w-5 h-5 text-foreground" />
      </button>
      <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 text-foreground">
        Wspólne Okna
      </h2>
    </div>
    
    <div className="flex items-center justify-between px-4 pb-2 mt-4">
      <h3 className="text-xl font-bold leading-tight text-foreground">
        Najlepsze Rekomendacje
      </h3>
      <span className="text-xs font-bold text-yellow bg-card px-2 py-1 rounded-md">
        2 Znaleziono
      </span>
    </div>
    
    <div className="flex gap-4 px-4 pb-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
      <div className="snap-center shrink-0 w-[85vw] max-w-[320px] relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-stone-800 to-stone-900 border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
        <div className="relative z-10 p-5 flex flex-col justify-between h-[200px] gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center justify-center rounded-full bg-yellow/90 px-2.5 py-0.5 text-[10px] font-bold text-black uppercase tracking-wide">
                Best Match
              </span>
              <span className="text-white/60 text-xs font-medium">90 min</span>
            </div>
            <p className="text-white tracking-tight text-3xl font-bold leading-none mb-1">
              14:00 <span className="text-white/50 text-xl font-normal">- 15:30</span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full ring-2 ring-black/40 bg-gradient-to-br from-purple-200 to-purple-400"></div>
                <div className="h-6 w-6 rounded-full ring-2 ring-black/40 bg-gradient-to-br from-blue-200 to-blue-400"></div>
                <div className="h-6 w-6 rounded-full ring-2 ring-black/40 bg-white/20 flex items-center justify-center text-[10px] text-white font-bold backdrop-blur-sm">+1</div>
              </div>
              <p className="text-white/90 text-sm font-medium">3 Znajomych Dostępnych</p>
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl h-11 bg-yellow hover:bg-yellow-300 active:scale-95 text-black text-sm font-bold transition-all">
            <Handshake className="w-5 h-5" />
            <span className="truncate">Zaproponuj Spotkanie</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Screen3_Mapa = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md p-4 pb-2 border-b border-border/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="size-10 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-border"></div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background rounded-full"></div>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-foreground">MyCampus</h2>
        </div>
        <button className="p-2 rounded-full hover:bg-muted transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
    
    <div className="px-4 pt-6">
      <div className="bg-card rounded-2xl p-5 shadow-lg border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-full bg-purple-light flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-purple" />
          </div>
          <div>
            <p className="font-bold text-base text-foreground">Biedronka · 7 min</p>
            <p className="text-sm text-muted-foreground">Sklep spożywczy</p>
          </div>
        </div>
        <div className="h-64 rounded-xl bg-muted overflow-hidden">
          <MapWithMarker 
            lat={52.2400}
            lon={21.0150}
            zoom={15}
            width={343}
            height={256}
            markerColor="#ff0000"
          />
        </div>
      </div>
    </div>
  </div>
);

// Feature text content for each step
const featureTexts = [
  {
    title: "Twój dzień w jednym miejscu",
    description: "Plan zajęć, dojazdy i dostępność znajomych w jednym widoku. Bez przełączania między aplikacjami."
  },
  {
    title: "MyCampus wykrywa okna czasu",
    description: "Gdy masz 2h wolne i 3 znajomych dostępnych — aplikacja automatycznie sugeruje spotkanie."
  },
  {
    title: "Decyzje bez planowania",
    description: "Biedronka 7 min pieszo. Autobus za 5 min. MyCampus podpowiada, co zrobić i kiedy — w odpowiednim momencie."
  }
];

const ScrollStorytelling = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Check if section is in viewport
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      setIsInSection(isVisible);
      
      // Hide/show navbar based on section visibility
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (isVisible && rect.top < 100) {
          navbar.style.transform = 'translateY(-100%)';
          navbar.style.opacity = '0';
        } else {
          navbar.style.transform = 'translateY(0)';
          navbar.style.opacity = '1';
        }
      }
      
      // Calculate how much of the section is scrolled through
      // When section top is at window top, progress = 0
      // When section bottom is at window top, progress = 1
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      
      setScrollProgress(progress);
      
      // Determine active step based on scroll progress
      // 3 steps: 0-0.33, 0.33-0.66, 0.66-1
      let newStep = 0;
      if (progress < 0.33) {
        newStep = 0;
      } else if (progress < 0.66) {
        newStep = 1;
      } else {
        newStep = 2;
      }
      
      if (newStep !== activeStep) {
        setActiveStep(newStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset navbar on unmount
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.transform = '';
        navbar.style.opacity = '';
      }
    };
  }, [activeStep]);

  // Calculate phone position based on scroll
  const getPhoneTransform = () => {
    // Phone enters from bottom (0-0.1), stays sticky and visible (0.1-1)
    if (scrollProgress < 0.1) {
      const progress = scrollProgress / 0.1;
      return {
        transform: `translateY(${100 * (1 - progress)}px) scale(${0.8 + 0.2 * progress})`,
        opacity: 1 // Always visible, no fade out
      };
    } else {
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1 // Always visible
      };
    }
  };

  const phoneStyle = getPhoneTransform();

  // Navigation handlers
  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      // Scroll to appropriate position
      const section = sectionRef.current;
      if (section) {
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        const targetProgress = (activeStep - 1) * 0.33;
        const targetScroll = targetProgress * (sectionHeight - windowHeight);
        window.scrollTo({
          top: section.offsetTop + targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
      // Scroll to appropriate position
      const section = sectionRef.current;
      if (section) {
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        const targetProgress = (activeStep + 1) * 0.33;
        const targetScroll = targetProgress * (sectionHeight - windowHeight);
        window.scrollTo({
          top: section.offsetTop + targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-background"
    >
      {/* Sticky wrapper */}
      <div 
        ref={stickyWrapperRef}
        className="sticky top-0 h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="container mx-auto flex items-center justify-center gap-8 lg:gap-16 max-w-7xl relative">
          {/* Feature text - left side */}
          <div className="hidden lg:flex flex-col items-end flex-1 max-w-md">
            <div 
              className="transition-all duration-500 text-right"
              style={{
                opacity: phoneStyle.opacity > 0.5 ? 1 : 0,
                transform: `translateX(${phoneStyle.opacity > 0.5 ? 0 : -20}px)`
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {featureTexts[activeStep].title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {featureTexts[activeStep].description}
              </p>
            </div>
          </div>
          
          {/* Phone mockup - center */}
          <div 
            className="relative w-[375px] h-[812px] flex-shrink-0"
            style={{
              transform: phoneStyle.transform,
              opacity: phoneStyle.opacity,
              transition: 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.1s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
              <div className="relative w-full h-full rounded-[3.5rem] bg-gradient-to-b from-gray-900 to-gray-800 p-[6px] shadow-2xl">
                {/* Phone frame */}
                <div className="absolute inset-[6px] rounded-[3rem] bg-background overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-foreground rounded-b-[20px] z-30 flex items-center justify-center">
                    <div className="w-[100px] h-[6px] bg-gray-800 rounded-full"></div>
                  </div>
                  
                  {/* Status bar */}
                  <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-6 z-20">
                    <span className="text-[11px] font-semibold text-foreground">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-[17px] h-[10px] border border-foreground rounded-sm">
                        <div className="w-[13px] h-[6px] bg-foreground rounded-sm m-[1px]"></div>
                      </div>
                      <div className="w-[1px] h-[4px] bg-foreground"></div>
                      <div className="w-[1px] h-[4px] bg-foreground"></div>
                      <div className="w-[1px] h-[4px] bg-foreground"></div>
                    </div>
                  </div>
                  
                  {/* Screen content container */}
                  <div className="w-full h-full pt-12 overflow-hidden relative bg-background">
                    {/* Navigation arrows on screen - SVG */}
                    {/* Left arrow */}
                    <button
                      onClick={handlePrev}
                      disabled={activeStep === 0}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 transition-all ${
                        activeStep === 0
                          ? 'opacity-30 cursor-not-allowed'
                          : 'opacity-100 hover:opacity-80 cursor-pointer'
                      }`}
                      style={{ pointerEvents: activeStep === 0 ? 'none' : 'auto' }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="18" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        <path d="M22 14L16 20L22 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                    
                    {/* Right arrow */}
                    <button
                      onClick={handleNext}
                      disabled={activeStep === 2}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 transition-all ${
                        activeStep === 2
                          ? 'opacity-30 cursor-not-allowed'
                          : 'opacity-100 hover:opacity-80 cursor-pointer'
                      }`}
                      style={{ pointerEvents: activeStep === 2 ? 'none' : 'auto' }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="18" fill="rgba(0,0,0,0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                        <path d="M18 14L24 20L18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                    
                    {/* Screen 1: Plan Dnia */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        opacity: activeStep === 0 ? 1 : 0,
                        pointerEvents: activeStep === 0 ? 'auto' : 'none'
                      }}
                    >
                      <Screen1_PlanDnia />
                    </div>
                    
                    {/* Screen 2: Okno Czasu */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        opacity: activeStep === 1 ? 1 : 0,
                        pointerEvents: activeStep === 1 ? 'auto' : 'none'
                      }}
                    >
                      <Screen2_OknoCzasu />
                    </div>
                    
                    {/* Screen 3: Mapa */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        opacity: activeStep === 2 ? 1 : 0,
                        pointerEvents: activeStep === 2 ? 'auto' : 'none'
                      }}
                    >
                      <Screen3_Mapa />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature text - right side */}
            <div className="hidden lg:flex flex-col items-start flex-1 max-w-md">
              <div 
                className="transition-all duration-500 text-left"
                style={{
                  opacity: phoneStyle.opacity > 0.5 ? 1 : 0,
                  transform: `translateX(${phoneStyle.opacity > 0.5 ? 0 : 20}px)`
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {featureTexts[activeStep].title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {featureTexts[activeStep].description}
                </p>
              </div>
            </div>
            
            {/* Mobile text below phone */}
            <div className="lg:hidden mt-8 text-center px-4">
              <div 
                className="transition-all duration-500"
                style={{
                  opacity: phoneStyle.opacity > 0.5 ? 1 : 0,
                }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featureTexts[activeStep].title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {featureTexts[activeStep].description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className={`p-2 rounded-full border-2 transition-all ${
                      activeStep === 0
                        ? 'border-muted text-muted-foreground cursor-not-allowed opacity-50'
                        : 'border-foreground text-foreground hover:bg-muted cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {[0, 1, 2].map((step) => (
                      <div
                        key={step}
                        className={`w-2 h-2 rounded-full transition-all ${
                          step === activeStep ? 'bg-foreground w-8' : 'bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={activeStep === 2}
                    className={`p-2 rounded-full border-2 transition-all ${
                      activeStep === 2
                        ? 'border-muted text-muted-foreground cursor-not-allowed opacity-50'
                        : 'border-foreground text-foreground hover:bg-muted cursor-pointer'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ScrollStorytelling;

