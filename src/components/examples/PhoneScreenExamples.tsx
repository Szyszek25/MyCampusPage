// Example phone screens - saved for reference
// These screens can be reused in other components

import { Users, Clock, ShoppingBag, Handshake, Bus, Calendar, MapPin, Film, Send, Plus, X, ArrowLeft, Settings, Home, School, Lock, Ban, Plus as AddIcon, ChevronLeft, ChevronRight, CheckCircle, Sun, Navigation, UtensilsCrossed, BookOpen, Sparkles, Coffee, Footprints, ArrowRight, Heart } from "lucide-react";
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

// Screen 1: Plan Dnia (from NewMyCampusHomeNativeScreen with filled data)
export const Screen1_PlanDnia = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    {/* Header */}
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-colors">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-border shadow-sm"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz7KeMdtKuKE_QuWQTeYOk9JVccwsEz7HDcXyw_aXyWHH7u6J7TOv5LlfTI6-8y1Y0juz7fXs8SlyPkffeH9fzvnXySIwM_Wbb87AHibJVa_cViH-_jKoCvRlzQihXkwNaea6x4aLxQLkcCNy5bHPo8hllhC1JaLZSUL_1Fdb3Hd1w-bN0mfUa7Kn1xF4SLkR6x2FHzaflzKKgUcqTfd27Q6UT5ziXtpKcUb2VLOM0Mph9XOrNzmLVOv_foeiL5vas407hsuED5l1G")'
              }}
            />
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background rounded-full"></div>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-foreground">MyCampus</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Navigation className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>

    <main className="flex flex-col px-4 w-full max-w-md mx-auto">
      {/* Greeting & Date */}
      <div className="flex flex-col pb-6 pt-2">
        <h1 className="text-[32px] font-bold leading-tight tracking-tight mb-1 text-foreground">Gotowy na wtorek?</h1>
        <p className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          24 paź • <Sun className="w-4 h-4" /> 18°C
        </p>
      </div>

      {/* Up Next Card */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-lg font-bold tracking-tight text-foreground">Następne</h2>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">16:45</span>
        </div>
        <div className="relative flex flex-col justify-between gap-4 rounded-lg bg-card p-5 shadow-sm border border-border overflow-hidden">
          <div className="flex items-start justify-between z-10">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-yellow/20 text-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">DOJAZD</span>
              </div>
              <p className="text-2xl font-bold leading-tight text-foreground">Dom</p>
              <p className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" /> Za 12 min
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-12 rounded-full bg-yellow flex items-center justify-center text-foreground shadow-sm shrink-0">
                <Footprints className="w-6 h-6" />
              </div>
              <div className="size-12 rounded-full bg-yellow flex items-center justify-center text-foreground shadow-sm shrink-0">
                <Bus className="w-6 h-6" />
              </div>
            </div>
          </div>
          {/* Map Visual Area */}
          <div className="w-full h-32 rounded bg-muted relative overflow-hidden mt-2">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADUYwnmRyJhZR1_0vb0TSwVEeaACFm0kIntDGYqQg0QZxJ-ZKGK1Ndh_1ftEf9kufB5d572imUbmxguiaTdvTW46uPcU9KgDR-9yfE9ZvJeko8k5P2W5xgnRNz8ysgY0g4pBlCHGDgBlyw1gAxGjE9K3qJILAmmMvlCdLOv2zNmBWbBB0PQpzobbyUtOXRl626DlL6B2_u7--bTIqyFx1VDl71Gr3pnsr14JffriNit1BEnsdiOAWTnGUwMOAU8r-5g2Spcv7NRmcB")'
              }}
            />
            <svg className="absolute inset-0 size-full stroke-foreground dark:stroke-yellow" style={{ strokeWidth: 3, fill: 'none', strokeLinecap: 'round', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}>
              <path d="M 40 80 Q 150 20 280 60"></path>
            </svg>
            <div className="absolute bottom-3 right-3">
              <button className="flex items-center justify-center rounded-full h-9 px-4 bg-foreground text-background gap-2 text-sm font-bold shadow-lg transform transition-transform active:scale-95">
                <span>Zobacz trasę</span>
                <Navigation className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plan zajęć */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-lg font-bold tracking-tight text-foreground">Plan zajęć • 24 paź</h2>
        </div>
        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
          <div className="flex items-center gap-4 p-4 border-b border-border relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="flex flex-col items-center justify-center w-12 ml-1">
              <span className="text-sm font-bold text-foreground">08:00</span>
              <span className="text-[10px] text-muted-foreground">09:30</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground mb-1">Matematyka</p>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Sala 101 • Budynek A • Wykład</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border-b border-border relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <div className="flex flex-col items-center justify-center w-12 ml-1">
              <span className="text-sm font-bold text-foreground">10:00</span>
              <span className="text-[10px] text-muted-foreground">11:30</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground mb-1">Fizyka</p>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Sala 205 • Budynek B • Laboratorium</span>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 py-3 bg-muted/50 border-t border-border w-full">
            <span className="text-xs font-bold text-muted-foreground">+2 kolejne zajęcia</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-bold text-muted-foreground">Zobacz cały dzień</span>
          </button>
        </div>
      </div>

      {/* Live Transit Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-lg font-bold tracking-tight text-foreground">Na żywo</h2>
        </div>
        <div className="bg-card rounded-lg p-5 border border-border shadow-sm overflow-hidden">
          {/* Map Preview */}
          <div className="w-full h-48 rounded-lg bg-muted relative overflow-hidden mb-4">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADUYwnmRyJhZR1_0vb0TSwVEeaACFm0kIntDGYqQg0QZxJ-ZKGK1Ndh_1ftEf9kufB5d572imUbmxguiaTdvTW46uPcU9KgDR-9yfE9ZvJeko8k5P2W5xgnRNz8ysgY0g4pBlCHGDgBlyw1gAxGjE9K3qJILAmmMvlCdLOv2zNmBWbBB0PQpzobbyUtOXRl626DlL6B2_u7--bTIqyFx1VDl71Gr3pnsr14JffriNit1BEnsdiOAWTnGUwMOAU8r-5g2Spcv7NRmcB")'
              }}
            />
            <svg className="absolute inset-0 size-full" viewBox="0 0 300 192">
              <circle className="fill-red-500 stroke-white dark:stroke-background stroke-2" cx="50" cy="120" r="8"></circle>
              <text fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" x="50" y="140" className="font-display">A</text>
              <circle className="fill-blue-500 stroke-white dark:stroke-background stroke-2" cx="200" cy="50" r="8"></circle>
              <text fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" x="200" y="70" className="font-display">B</text>
              <path className="stroke-yellow stroke-[4px]" d="M 40 120 C 100 100, 150 40, 210 50" style={{ fill: 'none', strokeLinecap: 'round', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}></path>
            </svg>
            <div className="absolute bottom-3 right-3">
              <button className="flex items-center justify-center rounded-full h-9 px-4 bg-foreground text-background gap-2 text-sm font-bold shadow-lg transform transition-transform active:scale-95">
                <span>Pełna mapa</span>
                <MapPin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Nearby Stops & Arrivals */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Najbliższe przystanki i przyjazdy</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-300 shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Przystanek A</p>
                    <p className="text-xs text-muted-foreground">Przyjazd za <span className="font-bold text-yellow">3 min</span> i <span className="font-bold">15 min</span></p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">200m</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300 shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Przystanek B</p>
                    <p className="text-xs text-muted-foreground">Przyjazd za <span className="font-bold text-yellow">8 min</span> i <span className="font-bold">22 min</span></p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">450m</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Availability */}
      <div className="mb-8">
        <h2 className="text-lg font-bold leading-tight tracking-tight px-1 mb-3 text-foreground">Rzeczywista dostępność</h2>
        <div className="bg-card rounded-lg p-5 border border-border shadow-sm">
          <div className="flex items-baseline justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">3h 30m</span>
              <span className="text-sm text-muted-foreground font-medium">Pozostało wolnego czasu dzisiaj</span>
            </div>
            <div className="text-right">
              <span className="block text-yellow text-sm font-bold">Następne okno</span>
              <span className="text-foreground font-semibold">19:30 - 23:00</span>
            </div>
          </div>
          {/* Timeline Bar */}
          <div className="flex w-full h-12 rounded-full overflow-hidden gap-1 bg-muted p-1">
            <div className="flex-1 bg-muted/50 rounded-l-full flex items-center justify-center opacity-50">
              <School className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-[15%] bg-muted flex items-center justify-center border-l-2 border-background relative group">
              <div className="absolute -top-8 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Now</div>
              <Bus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="w-[20%] bg-muted/50 flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-[2] bg-yellow rounded-r-full flex items-center justify-center gap-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
              <Sun className="w-4 h-4 text-foreground" />
              <span className="text-foreground text-xs font-bold hidden sm:inline">Wolne</span>
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground mt-2 px-2 font-mono">
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>00:00</span>
          </div>
        </div>
      </div>

      {/* Quick Add Presets */}
      <div className="mb-8">
        <h2 className="text-lg font-bold leading-tight tracking-tight px-1 mb-3 text-foreground">Szybkie dodanie</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          <button className="flex items-center gap-2 pl-3 pr-5 py-3 bg-card rounded-full border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-foreground">Nauka</span>
          </button>
          <button className="flex items-center gap-2 pl-3 pr-5 py-3 bg-card rounded-full border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-foreground">Regeneracja</span>
          </button>
          <button className="flex items-center gap-2 pl-3 pr-5 py-3 bg-card rounded-full border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-300">
              <Coffee className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-foreground">Kawa</span>
          </button>
          <button className="flex items-center gap-2 pl-3 pr-5 py-3 bg-card rounded-full border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-foreground">Sprawy</span>
          </button>
        </div>
      </div>

      {/* AI Suggestion Module */}
      <div className="relative bg-foreground rounded-lg p-5 text-background overflow-hidden shadow-lg mb-6">
        <div className="absolute -top-10 -right-10 size-40 bg-yellow/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-muted border border-border p-2 rounded-full shrink-0">
            <Sparkles className="w-5 h-5 text-yellow" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1 text-yellow">Spadek energii</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">Twoja energia zwykle spada około 15:00. Masz wtedy przerwę—może kawa z Sarą?</p>
            <button className="bg-yellow text-foreground px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-yellow-300 transition-colors w-fit">
              Zaproponuj spotkanie
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Coś na ząb? - Restauracje */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 px-1">
          <UtensilsCrossed className="w-5 h-5 text-foreground" />
          <h2 className="text-lg font-bold tracking-tight text-foreground">Coś na ząb?</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          <button className="flex flex-col gap-3 w-40 bg-card rounded-2xl p-4 border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-12 rounded-xl bg-yellow/20 flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-yellow" />
            </div>
            <div>
              <p className="text-base font-bold text-foreground mb-1">Restauracja A</p>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">250m</span>
              </div>
            </div>
          </button>
          <button className="flex flex-col gap-3 w-40 bg-card rounded-2xl p-4 border border-border shadow-sm shrink-0 active:scale-95 transition-transform">
            <div className="size-12 rounded-xl bg-yellow/20 flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-yellow" />
            </div>
            <div>
              <p className="text-base font-bold text-foreground mb-1">Restauracja B</p>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">450m</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="h-6"></div>
    </main>
  </div>
);

// Screen 2: Okno Czasu
export const Screen2_OknoCzasu = () => (
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

// Screen 3: Mapa
export const Screen3_Mapa = () => (
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
        <div className="h-64 rounded-xl bg-muted overflow-hidden relative group">
          {/* Map background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADUYwnmRyJhZR1_0vb0TSwVEeaACFm0kIntDGYqQg0QZxJ-ZKGK1Ndh_1ftEf9kufB5d572imUbmxguiaTdvTW46uPcU9KgDR-9yfE9ZvJeko8k5P2W5xgnRNz8ysgY0g4pBlCHGDgBlyw1gAxGjE9K3qJILAmmMvlCdLOv2zNmBWbBB0PQpzobbyUtOXRl626DlL6B2_u7--bTIqyFx1VDl71Gr3pnsr14JffriNit1BEnsdiOAWTnGUwMOAU8r-5g2Spcv7NRmcB")'
            }}
          />
          
          {/* SVG overlay with markers */}
          <svg className="absolute inset-0 size-full" viewBox="0 0 343 256">
            {/* Route path */}
            <path
              d="M 50 200 Q 100 150, 150 120 Q 200 100, 250 80 Q 280 70, 300 60"
              stroke="#ff0000"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}
            />
            
            {/* Biedronka 1 - Red marker */}
            <g>
              <circle cx="80" cy="160" r="10" fill="#ff0000" stroke="white" strokeWidth="2" />
              <text x="80" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">B</text>
              <rect x="70" y="175" width="20" height="12" rx="6" fill="#ff0000" />
              <text x="80" y="184" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">1</text>
            </g>
            
            {/* Biedronka 2 - Orange marker */}
            <g>
              <circle cx="180" cy="100" r="10" fill="#ff8800" stroke="white" strokeWidth="2" />
              <text x="180" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">B</text>
              <rect x="170" y="115" width="20" height="12" rx="6" fill="#ff8800" />
              <text x="180" y="124" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">2</text>
            </g>
            
            {/* Biedronka 3 - Red marker */}
            <g>
              <circle cx="280" cy="50" r="10" fill="#ff0000" stroke="white" strokeWidth="2" />
              <text x="280" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui">B</text>
              <rect x="270" y="65" width="20" height="12" rx="6" fill="#ff0000" />
              <text x="280" y="74" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">3</text>
            </g>
          </svg>
          
          {/* Full Map button */}
          <div className="absolute bottom-3 right-3">
            <button className="flex items-center justify-center rounded-full h-9 px-4 bg-black dark:bg-primary text-white dark:text-black gap-2 text-sm font-bold shadow-lg transform transition-transform active:scale-95">
              <span>Pełna Mapa</span>
              <MapPin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Screen 4: Tworzenie Eventu (Cinema Night)
export const Screen4_TworzenieEventu = () => (
  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
    <div className="sticky top-0 z-50 flex items-center bg-background/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-border/50">
      <button className="size-12 shrink-0 flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
        <ArrowLeft className="w-5 h-5 text-foreground" />
      </button>
      <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 text-foreground">
        Cinema Night
      </h2>
    </div>
    
    <div className="flex flex-col gap-6 pt-2">
      {/* Select Movie */}
      <div className="pl-4">
        <label className="block text-sm font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider text-[11px]">Select Movie</label>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pr-4 pb-2">
          <button className="group relative flex-shrink-0 w-36 flex flex-col gap-3 text-left transition-transform active:scale-95">
            <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden ring-4 ring-yellow ring-offset-2 ring-offset-background shadow-xl">
              <img 
                alt="Dune" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo2xqy1QxErtXnTNc5B89m0VrmOHGE_B9KdnSGkz4kXzmTezj_OYPFy7BeoFUlyCkdSJFO96YX2g9TnR44Mpd8e6JIVBycVaRU8VCqFeWWkegW0VjoN-UTcQ7doNYhBgk8-7BE-K0naP3JIskd8OPqJiuM6Wam54kptba6GtSP_LEB5EvrVIMz62z7o5Lj5l40h-PTFK6UoZGbGIv1WyM4TjcgVQCSryZjFPX-R7WXugJtIlnFLKjZ7azQcyjkGWCtWpkziAP-MU"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-yellow text-black text-[10px] font-bold uppercase tracking-wide">IMAX</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-foreground font-bold leading-tight text-base mb-0.5 truncate">Dune: Part Two</h3>
              <p className="text-muted-foreground text-xs font-medium">Sci-Fi · 2h 46m</p>
            </div>
          </button>
        </div>
      </div>

      {/* Date & Showtime */}
      <div className="px-4">
        <label className="block text-sm font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider text-[11px]">Date & Showtime</label>
        <div className="flex flex-col gap-3">
          <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl bg-card border border-border active:bg-muted transition-colors">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-bold text-foreground">Today, Oct 24</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center justify-center px-5 h-10 rounded-xl bg-card border border-border text-sm font-medium text-muted-foreground whitespace-nowrap active:scale-95 transition-transform">
              16:15
            </button>
            <button className="flex items-center justify-center px-5 h-10 rounded-xl bg-yellow text-black shadow-sm ring-2 ring-yellow ring-offset-2 ring-offset-background text-sm font-bold whitespace-nowrap active:scale-95 transition-transform">
              19:30
            </button>
            <button className="flex items-center justify-center px-5 h-10 rounded-xl bg-card border border-border text-sm font-medium text-muted-foreground whitespace-nowrap active:scale-95 transition-transform">
              22:00
            </button>
          </div>
        </div>
      </div>

      {/* Participants */}
      <div className="px-4">
        <label className="block text-sm font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider text-[11px]">Participants</label>
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
          <button className="flex flex-col items-center gap-1.5 min-w-[60px] group">
            <div className="size-14 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center group-hover:bg-muted transition-colors group-active:scale-95">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Add</span>
          </button>
          <div className="flex flex-col items-center gap-1.5 min-w-[60px] relative group cursor-pointer">
            <div className="relative transition-transform active:scale-95">
              <img 
                alt="Sarah" 
                className="size-14 rounded-full object-cover border border-border" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJmNOo6j8BX22g_Ej_dzTaVUk6rIagihaBoWOkwVvmnRkx6ZsGIwBO-gNHhxUMAorRJNF9lad0g8RgYgnzn5IkuvoxzK35G7a1cTzIzkPk68dKihr4gN8wlDm4xI4czNK7OeuxeYLOhM5PVyod1anuABJ7dAeRZ0gI792TnpvIbkT0__WIBvVmxW1CNAxM8vt3-_upYfBOR53YEfkSa_fRT2DoeJFmixJHtj4A1jSw66kSpG6IR20mF4OjbNyd7BGJMAu_-xYgKMTq"
              />
              <div className="absolute -top-1 -right-1 bg-card rounded-full p-[2px] shadow-sm">
                <X className="w-3 h-3 text-red-500" />
              </div>
            </div>
            <span className="text-xs font-medium text-foreground">Sarah</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 min-w-[60px] relative group cursor-pointer">
            <div className="relative transition-transform active:scale-95">
              <img 
                alt="Mike" 
                className="size-14 rounded-full object-cover border border-border" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANLyXbQreX3gpnsyuhulm8Y13ukktXPff0UyEV6WwxCaQiaPD-CzAvOvPxI-My4F3w6kWzVyF30fL46QSNxDbW5Aan_yKvzNoUXXTAi0N1lNpsUcXrUms2YLRpx8QXBzJfF9GXFpDtzlP6nql2W1SB4s6C4qgaZQQWb7hAojxDxo6Vi0OpDIsSmbwErRCOyhUs2echXcfkFOI0aGFjh1BW6IaEnO3TW2vZgO9n6Yk8w9WK_dPgt6kfWX0UhH06owT_wjtw3EoTsV1Z"
              />
              <div className="absolute -top-1 -right-1 bg-card rounded-full p-[2px] shadow-sm">
                <X className="w-3 h-3 text-red-500" />
              </div>
            </div>
            <span className="text-xs font-medium text-foreground">Mike</span>
          </div>
        </div>
      </div>

      {/* Cinema Location */}
      <div className="flex-1 flex flex-col min-h-[300px] px-4">
        <div className="flex justify-between items-end mb-3 px-1">
          <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider text-[11px]">Cinema Location</label>
          <button className="flex items-center gap-1 text-xs font-bold text-black bg-yellow px-2 py-1 rounded-md transition-transform active:scale-95">
            <MapPin className="w-3 h-3" />
            View Map
          </button>
        </div>
        <div className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm border border-border bg-muted">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADUYwnmRyJhZR1_0vb0TSwVEeaACFm0kIntDGYqQg0QZxJ-ZKGK1Ndh_1ftEf9kufB5d572imUbmxguiaTdvTW46uPcU9KgDR-9yfE9ZvJeko8k5P2W5xgnRNz8ysgY0g4pBlCHGDgBlyw1gAxGjE9K3qJILAmmMvlCdLOv2zNmBWbBB0PQpzobbyUtOXRl626DlL6B2_u7--bTIqyFx1VDl71Gr3pnsr14JffriNit1BEnsdiOAWTnGUwMOAU8r-5g2Spcv7NRmcB")'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-0 pb-12">
            <div className="relative">
              <MapPin className="w-12 h-12 text-black drop-shadow-xl z-10 relative" />
              <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-card p-3 rounded-xl shadow-xl flex items-center gap-3 border border-border z-10 cursor-pointer active:bg-muted transition-colors">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Film className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate">Cinema City</p>
              <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Westfield Mall · 2.5km
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
    
    {/* Fixed bottom button */}
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/95 to-transparent pt-8 z-20">
      <button className="w-full h-14 bg-foreground rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-transform group">
        <span className="text-background font-bold text-lg">Send Proposal</span>
        <Send className="w-5 h-5 text-background group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

