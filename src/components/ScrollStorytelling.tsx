import { useEffect, useRef, useState } from "react";
import { Users, Clock, ShoppingBag, Handshake, Bus, Calendar, MapPin, Film, Send, Plus, X, ArrowLeft, Settings, Home, School, Lock, Ban, Plus as AddIcon } from "lucide-react";
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

// Screen components with topbar (hour, battery, etc.)
const Screen1_PlanDnia = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    {/* Topbar with time and battery */}
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-2">
        <span className="text-[13px] font-semibold text-foreground">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="21" y="4" width="2" height="4" rx="0.5" fill="currentColor"/>
            <rect x="2.5" y="4" width="16" height="4" rx="0.5" fill="currentColor"/>
          </svg>
          <div className="flex items-center gap-0.5 ml-1">
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md p-4 pb-2 border-b border-border/50">
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
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-2">
        <span className="text-[13px] font-semibold text-foreground">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="21" y="4" width="2" height="4" rx="0.5" fill="currentColor"/>
            <rect x="2.5" y="4" width="16" height="4" rx="0.5" fill="currentColor"/>
          </svg>
          <div className="flex items-center gap-0.5 ml-1">
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="sticky top-0 z-40 flex items-center bg-background/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-border/50">
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
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-2">
        <span className="text-[13px] font-semibold text-foreground">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="21" y="4" width="2" height="4" rx="0.5" fill="currentColor"/>
            <rect x="2.5" y="4" width="16" height="4" rx="0.5" fill="currentColor"/>
          </svg>
          <div className="flex items-center gap-0.5 ml-1">
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
            <div className="w-[3px] h-[3px] rounded-full bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md p-4 pb-2 border-b border-border/50">
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

// Feature texts for side narration
const sideTexts = [
  {
    left: "Twój dzień w jednym miejscu",
    right: "Plan zajęć, dojazdy i dostępność znajomych w jednym widoku. Bez przełączania między aplikacjami."
  },
  {
    left: "MyCampus wykrywa okna czasu",
    right: "Gdy masz 2h wolne i 3 znajomych dostępnych — aplikacja automatycznie sugeruje spotkanie."
  },
  {
    left: "Decyzje bez planowania",
    right: "Biedronka 7 min pieszo. Autobus za 5 min. MyCampus podpowiada, co zrobić i kiedy — w odpowiednim momencie."
  }
];

// Hero text (main center text)
const heroText = {
  title: "Platforma od studenta dla studentów",
  subtitle: "Gdzie czas i ludzie spotykają się naturalnie."
};

// Lerp helper
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
const clamp = (value: number, min: number = 0, max: number = 1) => Math.min(Math.max(value, min), max);

const ScrollStorytelling = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
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
      
      // Hide/show navbar
      const navbar = document.querySelector('nav');
      if (navbar && isVisible && rect.top < 100) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
      } else if (navbar) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
      }
      
      // Calculate scroll progress (0 to 1)
      const scrolled = -rect.top;
      const maxScroll = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      
      setScrollProgress(progress);
      
      // Determine active step (0, 1, 2)
      const newStep = Math.floor(clamp(progress, 0, 0.99) * 3);
      if (newStep !== activeStep && newStep < 3) {
        setActiveStep(newStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.transform = '';
        navbar.style.opacity = '';
      }
    };
  }, [activeStep]);

  // Apple-style animations based on scroll progress
  
  // Phase 1 (0-25%): Phone enters from bottom, goes up
  // Phase 2 (25-100%): Apple premium style - phone scales, hero text moves, side texts appear
  
  const phase1End = 0.25;
  const phase2Start = 0.25;
  
  // Phone Y position: starts below viewport, enters during phase 1, stays in phase 2
  const phoneY = scrollProgress < phase1End
    ? lerp(100, 0, clamp(scrollProgress / phase1End)) // 100vh → 0 (enters from bottom)
    : 0; // Stays in place during phase 2
  
  // Phone scale: starts at 0.9, scales to 1.05 during phase 2
  const phoneScale = scrollProgress < phase1End
    ? 0.9 // Small scale during entry
    : lerp(0.9, 1.05, clamp((scrollProgress - phase2Start) / 0.2)); // Scales 25-45%
  
  // Hero text: starts visible, moves up and fades during phase 2
  const heroOpacity = scrollProgress < phase2Start
    ? 1 // Fully visible during phase 1
    : lerp(1, 0.85, clamp((scrollProgress - phase2Start) / 0.3)); // Fades 25-55%
  
  const heroY = scrollProgress < phase2Start
    ? 0 // No movement during phase 1
    : lerp(0, -40, clamp((scrollProgress - phase2Start) / 0.3)); // Moves up 25-55%
  
  // Side texts: appear during phase 2 (after 50% of total scroll)
  const sideOpacity = scrollProgress < 0.5
    ? 0 // Hidden during phase 1 and early phase 2
    : clamp((scrollProgress - 0.5) / 0.2); // Appears 50-70%
  
  const leftX = lerp(-40, 0, sideOpacity);
  const rightX = lerp(40, 0, sideOpacity);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[350vh] bg-background"
    >
      {/* Story spacer - creates scroll height */}
      <div className="h-[250vh]"></div>
      
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative w-full max-w-7xl">
          {/* Hero text - center, moves up and fades */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center transition-all duration-300"
            style={{
              opacity: heroOpacity,
              transform: `translate(-50%, calc(-50% + ${heroY}px))`,
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              {heroText.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {heroText.subtitle}
            </p>
          </div>
          
          {/* Phone mockup - enters from bottom, scales, overlaps text */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              transform: `translate(-50%, calc(-50% + ${phoneY}vh)) scale(${phoneScale})`,
              transition: 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div className="relative w-[375px] h-[812px] rounded-[3.5rem] bg-gradient-to-b from-gray-900 to-gray-800 p-[6px] shadow-2xl">
              <div className="absolute inset-[6px] rounded-[3rem] bg-background overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-foreground rounded-b-[20px] z-30 flex items-center justify-center">
                  <div className="w-[100px] h-[6px] bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Screen content container */}
                <div className="w-full h-full overflow-hidden relative bg-background">
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
          
          {/* Left side text */}
          <div 
            className="absolute top-1/2 left-8 -translate-y-1/2 z-10 max-w-sm transition-all duration-500"
            style={{
              opacity: sideOpacity,
              transform: `translateY(-50%) translateX(${leftX}px)`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {sideTexts[activeStep]?.left}
            </h2>
          </div>
          
          {/* Right side text */}
          <div 
            className="absolute top-1/2 right-8 -translate-y-1/2 z-10 max-w-sm text-right transition-all duration-500"
            style={{
              opacity: sideOpacity,
              transform: `translateY(-50%) translateX(${rightX}px)`,
            }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {sideTexts[activeStep]?.right}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStorytelling;
