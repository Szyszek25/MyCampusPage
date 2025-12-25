import { Users, Clock, Heart, Bus, Calendar, Clock as ClockIcon, ShoppingBag, Handshake, Train, ChevronRight, Navigation, MapPin, Send, Film, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
  
  // Map data
  const maps = [
    { lat: 52.2400, lon: 21.0150, color: '#ff0000', width: 288, height: 192 }, // Shop - red
    { lat: 52.2350, lon: 21.0180, color: '#0066ff', width: 256, height: 176 }, // Bus - blue
    { lat: 52.2380, lon: 21.0200, color: '#00ff00', width: 288, height: 192 }, // Schedule - green
    { lat: 52.2420, lon: 21.0120, color: '#ffaa00', width: 256, height: 176 }, // Time window - yellow
  ];
  
  const mapShop = maps[0];
  const mapBus = maps[1];
  const mapSchedule = maps[2];
  const mapTimeWindow = maps[3];

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
          <div className="text-center max-w-2xl flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-foreground leading-tight mb-6">
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
            <div className="relative">
              <div className="absolute -top-4 right-4 bg-coral rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dziś wszystko skończone
              </div>
              <MapWithMarker 
                lat={mapSchedule.lat}
                lon={mapSchedule.lon}
                zoom={15}
                width={288}
                height={192}
                markerColor={mapSchedule.color}
              />
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
        
        {/* Phone viewport with scrolling feed - Apple style */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-[375px] h-[812px] rounded-[3.5rem] bg-gradient-to-b from-gray-900 to-gray-800 p-[6px] shadow-2xl">
            {/* Phone frame - Apple style */}
            <div className="absolute inset-[6px] rounded-[3rem] bg-background overflow-hidden">
              {/* Dynamic Island / Notch */}
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
              
              {/* Screen content - scrolling feed */}
              <div className="w-full h-full pt-12 overflow-hidden relative bg-background">
                <div className="absolute inset-0 flex flex-col animate-scroll-feed">
                  {/* Screen 1: Biedronka */}
                  <div className="min-h-full flex flex-col px-4 pt-6 pb-8">
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 shadow-lg border border-border mt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-full bg-purple-light flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-purple" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-foreground">Biedronka · 7 min</p>
                          <p className="text-sm text-muted-foreground">Sklep spożywczy</p>
                        </div>
                      </div>
                      <div className="h-40 rounded-xl bg-muted overflow-hidden">
                        <MapWithMarker 
                          lat={mapShop.lat}
                          lon={mapShop.lon}
                          zoom={15}
                          width={343}
                          height={160}
                          markerColor={mapShop.color}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 2: Autobus */}
                  <div className="min-h-full flex flex-col px-4 pt-6 pb-8">
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 shadow-lg border border-border mt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-full bg-coral-light flex items-center justify-center">
                          <Bus className="w-6 h-6 text-coral" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-foreground">Autobus 174 · za 5 min</p>
                          <p className="text-sm text-muted-foreground">Przystanek w pobliżu</p>
                        </div>
                      </div>
                      <div className="h-40 rounded-xl bg-muted overflow-hidden">
                        <MapWithMarker 
                          lat={mapBus.lat}
                          lon={mapBus.lon}
                          zoom={15}
                          width={343}
                          height={160}
                          markerColor={mapBus.color}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 3: Full Meeting Proposal */}
                  <div className="min-h-full flex flex-col px-4 pt-6 pb-20 bg-background">
                    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-border overflow-hidden mt-4">
                      {/* Header */}
                      <div className="px-5 pt-5 pb-4">
                        <h2 className="text-xl font-bold text-foreground mb-6">Cinema Night</h2>
                        
                        {/* Select Movie */}
                        <div className="mb-5">
                          <label className="block text-[10px] font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                            Select Movie
                          </label>
                          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                            {[
                              { title: "Dune: Part Two", genre: "Sci-Fi", duration: "2h 46m", badge: "IMAX" },
                              { title: "Civil War", genre: "Action", duration: "1h 49m" },
                              { title: "Challengers", genre: "Drama", duration: "2h 11m" },
                            ].map((movie, idx) => (
                              <div key={idx} className={`flex-shrink-0 w-28 ${idx === 0 ? 'ring-2 ring-yellow ring-offset-2' : 'opacity-70'}`}>
                                <div className="aspect-[2/3] w-full rounded-xl bg-muted mb-2 overflow-hidden">
                                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400"></div>
                                </div>
                                <p className="text-xs font-bold text-foreground truncate">{movie.title}</p>
                                <p className="text-[10px] text-muted-foreground">{movie.genre} · {movie.duration}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Date & Showtime */}
                        <div className="mb-5">
                          <label className="block text-[10px] font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                            Date & Showtime
                          </label>
                          <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl bg-card border border-border mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-muted-foreground" />
                              <span className="text-sm font-bold text-foreground">Today, Oct 24</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground rotate-90" />
                          </button>
                          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                            {["16:15", "19:30", "22:00"].map((time, idx) => (
                              <button
                                key={time}
                                className={`flex items-center justify-center px-5 h-10 rounded-xl text-sm font-medium whitespace-nowrap ${
                                  idx === 1
                                    ? 'bg-yellow text-black shadow-sm ring-2 ring-yellow ring-offset-2 ring-offset-background'
                                    : 'bg-card border border-border text-muted-foreground'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {/* Participants */}
                        <div className="mb-5">
                          <label className="block text-[10px] font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                            Participants
                          </label>
                          <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
                            <button className="flex flex-col items-center gap-1.5 min-w-[60px]">
                              <div className="size-14 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center">
                                <Plus className="w-6 h-6 text-muted-foreground" />
                              </div>
                              <span className="text-xs font-medium text-muted-foreground">Add</span>
                            </button>
                            {["Sarah", "Mike"].map((name, idx) => (
                              <div key={name} className="flex flex-col items-center gap-1.5 min-w-[60px]">
                                <div className="size-14 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-border"></div>
                                <span className="text-xs font-medium text-foreground">{name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Cinema Location */}
                        <div className="mb-5">
                          <div className="flex justify-between items-end mb-3 px-1">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                              Cinema Location
                            </label>
                            <button className="flex items-center gap-1 text-xs font-bold text-black bg-yellow px-2 py-1 rounded-md">
                              <MapPin className="w-3.5 h-3.5" />
                              View Map
                            </button>
                          </div>
                          <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-sm border border-border bg-muted map-grid">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-0 pb-12">
                              <div className="relative">
                                <MapPin className="w-12 h-12 text-black drop-shadow-xl z-10 relative" />
                                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]"></div>
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-card p-3 rounded-xl shadow-xl flex items-center gap-3 border border-border z-10">
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
                                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Send Proposal Button */}
                      <div className="px-5 pb-5">
                        <Button className="w-full h-14 bg-foreground rounded-full flex items-center justify-center gap-2 shadow-lg">
                          <span className="text-card-foreground font-bold text-base">Send Proposal</span>
                          <Send className="w-5 h-5 text-card-foreground" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 4: Repeat Biedronka for loop */}
                  <div className="min-h-full flex flex-col px-4 pt-6 pb-8">
                    <div className="bg-white dark:bg-stone-800 rounded-2xl p-5 shadow-lg border border-border mt-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="size-12 rounded-full bg-purple-light flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-purple" />
                        </div>
                        <div>
                          <p className="font-bold text-base text-foreground">Biedronka · 7 min</p>
                          <p className="text-sm text-muted-foreground">Sklep spożywczy</p>
                        </div>
                      </div>
                      <div className="h-40 rounded-xl bg-muted overflow-hidden">
                        <MapWithMarker 
                          lat={mapShop.lat}
                          lon={mapShop.lon}
                          zoom={15}
                          width={343}
                          height={160}
                          markerColor={mapShop.color}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
