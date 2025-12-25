import { Users, Clock, Heart, Bus, Calendar, Clock as ClockIcon, ShoppingBag, Handshake, Train, ChevronRight, Navigation, MapPin, Send, Film, Plus, ArrowLeft, Settings, Home, School, Calendar as EditCalendar, Lock, Ban, Plus as AddIcon, X } from "lucide-react";
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
              <div className="w-full h-full overflow-hidden relative bg-background">
                <div className="absolute inset-0 flex flex-col animate-scroll-feed">
                  {/* Screen 1: Shared Windows */}
                  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
                    {/* Header */}
                    <div className="sticky top-0 z-50 flex items-center bg-background/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-border/50">
                      <button className="size-12 shrink-0 flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 text-foreground">
                        Wspólne Okna
                      </h2>
                    </div>
                    
                    {/* Date Toggle */}
                    <div className="flex px-4 py-3">
                      <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-card border border-border p-1 shadow-sm">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 bg-yellow shadow-sm">
                          <span className="truncate text-sm font-bold text-black">Dziś</span>
                          <input className="invisible w-0" name="date-toggle" type="radio" value="Today" defaultChecked />
                        </label>
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2">
                          <span className="truncate text-sm font-bold text-muted-foreground">Jutro</span>
                          <input className="invisible w-0" name="date-toggle" type="radio" value="Tomorrow" />
                        </label>
                      </div>
                    </div>
                    
                    {/* Filters */}
                    <div className="flex gap-3 px-4 py-2 overflow-x-auto hide-scrollbar items-center">
                      <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-yellow border border-yellow pl-4 pr-4 shadow-sm">
                        <Users className="w-4 h-4 text-black" />
                        <p className="text-black text-sm font-bold">Grupa Studencka</p>
                      </div>
                      <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card border border-border pl-4 pr-4">
                        <Home className="w-4 h-4 text-muted-foreground" />
                        <p className="text-foreground text-sm font-medium">Współlokatorzy</p>
                      </div>
                      <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card border border-border pl-1 pr-4">
                        <div className="size-8 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-border"></div>
                        <p className="text-foreground text-sm font-medium">Sarah</p>
                      </div>
                      <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-card border border-border pl-1 pr-4">
                        <div className="size-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 border-2 border-border"></div>
                        <p className="text-foreground text-sm font-medium">Mike</p>
                      </div>
                    </div>
                    
                    {/* Best Recommendations */}
                    <div className="flex items-center justify-between px-4 pb-2 mt-4">
                      <h3 className="text-xl font-bold leading-tight text-foreground">
                        Najlepsze Rekomendacje
                      </h3>
                      <span className="text-xs font-bold text-yellow bg-card px-2 py-1 rounded-md">
                        2 Znaleziono
                      </span>
                    </div>
                    
                    <div className="flex gap-4 px-4 pb-2 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
                      {/* Best Match Card */}
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
                      
                      {/* Quiet Time Card */}
                      <div className="snap-center shrink-0 w-[85vw] max-w-[320px] relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm">
                        <div className="p-5 flex flex-col justify-between h-[200px] gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                                Czas Spokoju
                              </span>
                              <span className="text-muted-foreground text-xs font-medium">60 min</span>
                            </div>
                            <p className="text-foreground tracking-tight text-3xl font-bold leading-none mb-1">
                              16:00 <span className="text-muted-foreground text-xl font-normal">- 17:00</span>
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex -space-x-2">
                                <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-stone-900 bg-gradient-to-br from-gray-200 to-gray-400 opacity-70"></div>
                                <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-stone-900 bg-black/5 dark:bg-white/10 flex items-center justify-center text-[10px] text-muted-foreground font-bold">M</div>
                              </div>
                              <p className="text-foreground text-sm font-medium">2 Znajomych Dostępnych</p>
                            </div>
                          </div>
                          <button className="flex w-full items-center justify-center gap-2 rounded-xl h-11 bg-card border border-border hover:bg-muted active:scale-95 text-foreground text-sm font-bold transition-all">
                            <School className="w-5 h-5" />
                            <span className="truncate">Zaproponuj Sesję Nauki</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline */}
                    <div className="flex items-center justify-between px-4 pb-2 mt-6">
                      <h3 className="text-xl font-bold leading-tight text-foreground">
                        Oś Czasu
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Anonimowe
                      </span>
                    </div>
                    
                    <div className="flex flex-col px-4 gap-3 pb-6">
                      {/* Timeline items */}
                      {[
                        { time: "12:00", status: "busy", label: "Zajęty" },
                        { time: "13:00", status: "partial", label: "1 Znajomy Wolny" },
                        { time: "14:00", status: "available", label: "3 Znajomych", until: "15:30" },
                        { time: "15:00", status: "closing", label: "Zamyka się..." },
                        { time: "16:00", status: "quiet", label: "2 Znajomych Wolnych" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-12 text-right">
                            <p className={`text-sm font-${item.status === 'available' ? 'bold' : 'medium'} ${item.status === 'available' ? 'text-foreground' : 'text-muted-foreground'} font-mono`}>
                              {item.time}
                            </p>
                          </div>
                          <div className={`h-14 flex-1 rounded-xl flex items-center px-4 relative overflow-hidden ${
                            item.status === 'available' 
                              ? 'bg-yellow shadow-[0_0_15px_rgba(249,245,6,0.3)]' 
                              : item.status === 'closing'
                              ? 'bg-gradient-to-r from-yellow via-yellow/60 to-card border-none opacity-80'
                              : item.status === 'quiet'
                              ? 'bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30'
                              : 'bg-card border border-border'
                          }`}>
                            {item.status === 'partial' && (
                              <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-yellow/20"></div>
                            )}
                            <div className="flex items-center gap-2 relative z-10">
                              {item.status === 'busy' && (
                                <>
                                  <Ban className="w-4 h-4 text-muted-foreground opacity-40" />
                                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                                </>
                              )}
                              {item.status === 'available' && (
                                <>
                                  <div className="flex -space-x-2">
                                    <div className="h-8 w-8 rounded-full ring-2 ring-yellow-200 bg-gradient-to-br from-purple-200 to-purple-400"></div>
                                    <div className="h-8 w-8 rounded-full ring-2 ring-yellow-200 bg-gradient-to-br from-blue-200 to-blue-400"></div>
                                    <div className="h-8 w-8 rounded-full ring-2 ring-yellow-200 bg-gradient-to-br from-green-200 to-green-400"></div>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <span className="text-sm font-bold text-black leading-none">{item.label}</span>
                                    <span className="text-xs font-medium text-black/70 leading-tight">Do {item.until}</span>
                                  </div>
                                  <div className="h-8 w-8 rounded-full bg-black/10 flex items-center justify-center ml-auto">
                                    <AddIcon className="w-4 h-4 text-black" />
                                  </div>
                                </>
                              )}
                              {item.status === 'partial' && (
                                <>
                                  <div className="flex -space-x-2">
                                    <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-stone-900 bg-gradient-to-br from-gray-200 to-gray-400 opacity-60"></div>
                                  </div>
                                  <span className="text-sm font-medium text-muted-foreground ml-1">{item.label}</span>
                                </>
                              )}
                              {item.status === 'closing' && (
                                <span className="text-sm font-medium text-black/80">{item.label}</span>
                              )}
                              {item.status === 'quiet' && (
                                <>
                                  <div className="flex -space-x-2">
                                    <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-stone-900 bg-gradient-to-br from-gray-200 to-gray-400 opacity-70"></div>
                                    <div className="h-6 w-6 rounded-full ring-2 ring-white dark:ring-stone-900 bg-black/5 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-muted-foreground">M</div>
                                  </div>
                                  <span className="text-sm font-medium text-foreground ml-1">{item.label}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Update Status Button */}
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto px-4">
                      <button className="flex items-center gap-3 rounded-full bg-foreground px-6 py-3 shadow-xl transition-transform hover:scale-105 active:scale-95">
                        <EditCalendar className="w-5 h-5 text-primary-foreground" />
                        <span className="text-sm font-bold text-primary-foreground">Zaktualizuj Mój Status</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Screen 2: Commuter's Hub */}
                  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
                    {/* Header */}
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
                    
                    {/* Title Section */}
                    <div className="flex flex-col pb-6 pt-2 px-4">
                      <h1 className="text-[32px] font-bold leading-tight tracking-tight mb-1 text-foreground">Centrum Komunikacji</h1>
                      <p className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        24 paź • <Clock className="w-4 h-4" /> 18°C
                      </p>
                    </div>
                    
                    {/* Live Transit Tracker */}
                    <div className="mb-8 px-4">
                      <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="text-lg font-bold tracking-tight text-foreground">Na Żywo: Transport</h2>
                        <button className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
                          <span>Zobacz Wszystkie</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="relative flex flex-col gap-4 rounded-lg bg-card p-5 shadow-sm border border-border overflow-hidden">
                        <div className="w-full h-48 rounded-lg bg-muted relative overflow-hidden">
                          <img 
                            src={getOSMTile(52.2400, 21.0150, 15)} 
                            alt="Map" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
                            crossOrigin="anonymous"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 192">
                            <circle className="fill-red-500 stroke-white dark:stroke-stone-900 stroke-2" cx="50" cy="120" r="8" />
                            <text fill="white" fontFamily="Inter, sans-serif" fontSize="10" stroke="black" strokeWidth="0.5" textAnchor="middle" x="50" y="140">Przystanek A</text>
                            <circle className="fill-blue-500 stroke-white dark:stroke-stone-900 stroke-2" cx="200" cy="50" r="8" />
                            <text fill="white" fontFamily="Inter, sans-serif" fontSize="10" stroke="black" strokeWidth="0.5" textAnchor="middle" x="200" y="70">Przystanek B</text>
                            <path className="stroke-yellow stroke-[4px]" d="M 40 120 C 100 100, 150 40, 210 50" fill="none" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }} />
                            <path className="stroke-green-500 stroke-[4px]" d="M 50 120 C 80 140, 150 160, 250 140" fill="none" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }} />
                          </svg>
                          <div className="absolute bottom-3 right-3">
                            <button className="flex items-center justify-center rounded-full h-9 px-4 bg-foreground text-primary-foreground gap-2 text-sm font-bold shadow-lg transition-transform active:scale-95">
                              <span>Pełna Mapa</span>
                              <MapPin className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h3 className="font-bold text-foreground mb-2">Przystanki w Pobliżu i Przyjazdy</h3>
                          <div className="flex flex-col gap-3">
                            {[
                              { icon: Bus, colorClass: "bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300", line: "Autobus 174", stop: "Przystanek A", times: ["3 min", "15 min"], distance: "200m" },
                              { icon: Train, colorClass: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300", line: "Tramwaj 7", stop: "Przystanek B", times: ["8 min", "22 min"], distance: "450m" },
                              { icon: Train, colorClass: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300", line: "Pociąg C", stop: "Stacja Główna", times: ["12 min", "30 min"], distance: "1.2km" },
                            ].map((transit, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={`size-8 rounded-full ${transit.colorClass} flex items-center justify-center shrink-0`}>
                                    <transit.icon className="w-4 h-4" style={{ fill: 'currentColor' }} />
                                  </div>
                                  <div>
                                    <p className="text-foreground font-semibold text-sm">{transit.line} ({transit.stop})</p>
                                    <p className="text-muted-foreground text-xs">Przyjazd za <span className="font-bold text-yellow">{transit.times[0]}</span> i <span className="font-bold">{transit.times[1]}</span></p>
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-xs">{transit.distance}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Your Next Commute */}
                    <div className="mb-8 px-4">
                      <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="text-lg font-bold tracking-tight text-foreground">Twój Następny Przejazd</h2>
                        <span className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">16:45</span>
                      </div>
                      <div className="relative flex flex-col justify-between gap-4 rounded-lg bg-card p-5 shadow-sm border border-border overflow-hidden">
                        <div className="flex items-start justify-between z-10">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="bg-yellow/20 text-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Do Domu</span>
                            </div>
                            <p className="text-2xl font-bold leading-tight text-foreground">Biblioteka Uniwersytecka</p>
                            <p className="text-sm font-medium flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              Odjazd za 12 min
                            </p>
                          </div>
                          <div className="size-12 rounded-full bg-yellow flex items-center justify-center text-foreground shadow-sm shrink-0">
                            <Home className="w-6 h-6" style={{ fill: 'currentColor' }} />
                          </div>
                        </div>
                        <div className="w-full h-32 rounded bg-muted relative overflow-hidden mt-2">
                          <img 
                            src={getOSMTile(52.2400, 21.0150, 15)} 
                            alt="Map" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-40"
                            crossOrigin="anonymous"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                          <svg className="absolute inset-0 w-full h-full stroke-foreground dark:stroke-yellow" style={{ strokeWidth: 3, fill: 'none', strokeLinecap: 'round', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}>
                            <path d="M 40 80 Q 150 20 280 60"></path>
                          </svg>
                          <div className="absolute bottom-3 right-3">
                            <button className="flex items-center justify-center rounded-full h-9 px-4 bg-foreground text-primary-foreground gap-2 text-sm font-bold shadow-lg transition-transform active:scale-95">
                              <span>Zobacz Szczegóły</span>
                              <Navigation className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Day at a Glance */}
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
                          <div className="w-[15%] bg-muted flex items-center justify-center border-l-2 border-background relative group">
                            <div className="absolute -top-8 bg-foreground text-primary-foreground text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Teraz</div>
                            <Bus className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="w-[20%] bg-muted/50 flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-[2] bg-yellow rounded-r-full flex items-center justify-center gap-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                            <Clock className="w-4 h-4 text-foreground" />
                            <span className="text-foreground text-xs font-bold hidden sm:inline">Wolny Czas</span>
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
                  </div>
                  
                  {/* Screen 3: Cinema Night - Full Proposal */}
                  <div className="h-[812px] flex flex-col bg-background overflow-y-auto pb-20">
                    <div className="px-4 pt-6 pb-4">
                      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Cinema Night</h2>
                    </div>
                    
                    <div className="px-4 space-y-6">
                      {/* Select Movie */}
                      <div>
                        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                          Wybierz Film
                        </label>
                        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                          {[
                            { title: "Dune: Part Two", genre: "Sci-Fi", duration: "2h 46m", badge: "IMAX" },
                            { title: "Civil War", genre: "Action", duration: "1h 49m" },
                            { title: "Challengers", genre: "Drama", duration: "2h 11m" },
                          ].map((movie, idx) => (
                            <button
                              key={idx}
                              className={`group relative flex-shrink-0 w-36 flex flex-col gap-3 text-left transition-transform active:scale-95 ${
                                idx === 0 ? '' : 'opacity-80 hover:opacity-100'
                              }`}
                            >
                              <div className={`relative aspect-[2/3] w-full rounded-2xl overflow-hidden ${
                                idx === 0 
                                  ? 'ring-4 ring-yellow ring-offset-2 ring-offset-background shadow-xl' 
                                  : 'border border-border shadow-sm group-hover:shadow-md transition-shadow'
                              }`}>
                                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60"></div>
                                {movie.badge && idx === 0 && (
                                  <div className="absolute bottom-3 left-3 right-3">
                                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-yellow text-black text-[10px] font-bold uppercase tracking-wide">
                                      {movie.badge}
                                    </span>
                                  </div>
                                )}
                                {idx === 0 && (
                                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1 rounded-full">
                                    <span className="text-white text-base">✓</span>
                                  </div>
                                )}
                              </div>
                              <div>
                                <h3 className="text-foreground font-bold leading-tight text-base mb-0.5 truncate">
                                  {movie.title}
                                </h3>
                                <p className="text-muted-foreground text-xs font-medium">
                                  {movie.genre} · {movie.duration}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Date & Showtime */}
                      <div>
                        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                          Data i Godzina
                        </label>
                        <div className="flex flex-col gap-3">
                          <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl bg-card border border-border active:bg-muted/80 transition-colors">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-muted-foreground" />
                              <span className="text-sm font-bold text-foreground">Dziś, 24 paź</span>
                            </div>
                            <span className="text-muted-foreground">▼</span>
                          </button>
                          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                            {["16:15", "19:30", "22:00", "00:30"].map((time, index) => (
                              <button
                                key={index}
                                disabled={index === 3}
                                className={`flex items-center justify-center px-5 h-10 rounded-xl text-sm font-medium whitespace-nowrap active:scale-95 transition-transform ${
                                  index === 1
                                    ? 'bg-yellow text-black shadow-sm ring-2 ring-yellow ring-offset-2 ring-offset-background font-bold'
                                    : index === 3
                                    ? 'bg-card border border-border text-muted-foreground opacity-50 cursor-not-allowed'
                                    : 'bg-card border border-border text-muted-foreground'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Participants */}
                      <div>
                        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
                          Uczestnicy
                        </label>
                        <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
                          <button className="flex flex-col items-center gap-1.5 min-w-[60px] group">
                            <div className="size-14 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center group-hover:bg-muted transition-colors group-active:scale-95">
                              <Plus className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">Dodaj</span>
                          </button>
                          {["Sarah", "Mike"].map((name, idx) => (
                            <div key={name} className="flex flex-col items-center gap-1.5 min-w-[60px] relative group">
                              <div className="relative transition-transform active:scale-95">
                                <div className="size-14 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 border-2 border-border"></div>
                                <button className="absolute -top-1 -right-1 bg-card rounded-full p-[2px] shadow-sm">
                                  <X className="w-3.5 h-3.5 text-destructive" />
                                </button>
                              </div>
                              <span className="text-xs font-medium text-foreground">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Cinema Location */}
                      <div>
                        <div className="flex justify-between items-end mb-3 px-1">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Lokalizacja Kina
                          </label>
                          <button className="flex items-center gap-1 text-xs font-bold text-black bg-yellow px-2 py-1 rounded-md transition-transform active:scale-95">
                            <MapPin className="w-3.5 h-3.5" />
                            Zobacz Mapę
                          </button>
                        </div>
                        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-sm border border-border bg-muted map-grid">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-0 pb-12">
                            <div className="relative">
                              <MapPin className="w-12 h-12 text-foreground drop-shadow-xl z-10 relative" style={{ fill: 'currentColor' }} />
                              <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]" />
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 bg-card p-3 rounded-xl shadow-xl flex items-center gap-3 border border-border z-10 cursor-pointer active:bg-muted transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                              <Film className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-foreground truncate">Cinema City</p>
                              <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
                                Westfield Mall · 2.5km
                              </p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Send Proposal Button */}
                      <Button className="w-full h-14 bg-foreground text-primary-foreground rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-transform group">
                        <span className="font-bold text-lg">Wyślij Propozycję</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Screen 4: Repeat Shared Windows for loop */}
                  <div className="h-[812px] flex flex-col bg-background overflow-y-auto">
                    <div className="sticky top-0 z-50 flex items-center bg-background/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-border/50">
                      <button className="size-12 shrink-0 flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/10">
                        <ArrowLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12 text-foreground">
                        Wspólne Okna
                      </h2>
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
