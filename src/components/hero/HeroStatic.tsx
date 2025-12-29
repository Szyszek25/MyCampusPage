import { Users, Clock, Heart, Bus, ShoppingBag, Handshake, CheckCircle } from "lucide-react";
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

export default function HeroStatic() {
  // Map data
  const maps = [
    { lat: 52.2400, lon: 21.0150, color: '#ff0000', width: 288, height: 192 }, // Shop - red
    { lat: 52.2350, lon: 21.0180, color: '#0066ff', width: 256, height: 176 }, // Bus - blue
  ];
  
  const mapShop = maps[0];
  const mapBus = maps[1];

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-coral-light opacity-60 blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-light opacity-50 blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-yellow-light opacity-70 blur-xl animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left image column */}
          <div className="hidden lg:flex flex-col gap-4 flex-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-purple rounded-full px-4 py-2 text-sm font-medium text-accent-foreground shadow-lg flex items-center gap-2 z-10">
                <ShoppingBag className="w-4 h-4" />
                Biedronka · 7 min
              </div>
              <MapWithMarker 
                lat={mapShop.lat}
                lon={mapShop.lon}
                zoom={15}
                width={288}
                height={192}
                markerColor={mapShop.color}
              />
            </div>
            <div className="relative ml-8">
              <div className="absolute -bottom-4 left-4 bg-coral rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg z-10 flex items-center gap-2">
                <Bus className="w-4 h-4" />
                Autobus 174 · za 5 min
              </div>
              <MapWithMarker 
                lat={mapBus.lat}
                lon={mapBus.lon}
                zoom={15}
                width={256}
                height={176}
                markerColor={mapBus.color}
              />
            </div>
          </div>

          {/* Center content */}
          <div className="text-center max-w-3xl flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
              Platforma od studenta{" "}
              <span className="inline-flex items-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-secondary mx-1" />
              </span>{" "}
              dla studentów.
              <br />
              Gdzie{" "}
              <span className="inline-flex items-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-teal mx-1" />
              </span>{" "}
              czas, ludzie i Twój dzień
              <br />
              spotykają się{" "}
              <span className="inline-flex items-center">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-coral mx-1" />
              </span>{" "}
              naturalnie.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Bez względu na Twój harmonogram - MyCampus podpowiada, co zrobić i kiedy. Plan zajęć, dojazdy, transport publiczny i okienka dostępności znajomych. W jednym miejscu, bez zbędnego planowania. Sprawdź, jak to działa.
            </p>

            <Button 
              size="lg" 
              className="rounded-full text-lg px-8 py-6 bg-black text-white hover:bg-black/90 transition-all button-3d"
              style={{
                boxShadow: '0 4px 0 0 rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(2px)';
                e.currentTarget.style.boxShadow = '0 2px 0 0 rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 0 0 rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)';
              }}
            >
              Dołącz do MyCampus
            </Button>
          </div>

          {/* Right image column */}
          <div className="hidden lg:flex flex-col gap-4 flex-1 items-end">
            <div className="relative mr-8">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-black dark:bg-stone-900 border border-stone-800 dark:border-stone-700">
                <div className="absolute -right-6 -top-6 size-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -left-6 -bottom-6 size-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10 p-5 flex flex-col justify-between gap-4 min-h-[176px]">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-primary mb-1">Zdążysz spokojnie!</h3>
                        <p className="text-stone-300 text-sm font-medium">Wyjdź z domu za 5 min</p>
                      </div>
                      <div className="bg-stone-800 dark:bg-stone-700/50 p-2 rounded-full border border-stone-700">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="h-px w-full bg-stone-700/50 my-4"></div>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="block text-stone-400 text-xs uppercase tracking-wider font-bold mb-0.5">Cel: Uczelnia</span>
                        <span className="text-xl font-bold text-white">08:50</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-stone-400 text-xs uppercase tracking-wider font-bold mb-0.5">Twój zapas</span>
                        <span className="text-xl font-bold text-green-400">+12 <span className="text-xs font-medium">min</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mr-8">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/10 border border-yellow-200 dark:border-yellow-800/30">
                <div className="p-5 flex flex-col justify-between gap-4 min-h-[176px]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-yellow px-2.5 py-0.5 text-[10px] font-bold text-black uppercase tracking-wide">
                        Best Match
                      </span>
                      <span className="text-muted-foreground text-xs font-medium">120 min</span>
                    </div>
                    <p className="text-foreground tracking-tight text-2xl font-bold leading-none mb-1">
                      2h wolne
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-background bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold">
                          A
                        </div>
                        <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-background bg-coral flex items-center justify-center text-[10px] text-primary-foreground font-bold">
                          B
                        </div>
                        <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-background bg-purple flex items-center justify-center text-[10px] text-accent-foreground font-bold">
                          C
                        </div>
                      </div>
                      <p className="text-foreground text-sm font-medium">3 znajomych dostępnych</p>
                    </div>
                  </div>
                  <Button className="flex w-full items-center justify-center gap-2 rounded-xl h-11 bg-yellow hover:bg-yellow-300 active:scale-95 text-black text-sm font-bold transition-all">
                    <Handshake className="w-5 h-5" />
                    <span className="truncate">Zaproponuj spotkanie</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

