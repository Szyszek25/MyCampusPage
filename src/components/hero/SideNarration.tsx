"use client";

// Helper functions
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

interface SideNarrationProps {
  progress: number;
}

export default function SideNarration({ progress }: SideNarrationProps) {
  // Determine which screen is active and show corresponding text
  // progress 0 → 0.2: Screen 1 (Plan Dnia) - pełnoekranowy na początku
  // progress 0.2 → 0.5: Screen 2 (Okno Czasu) - pojawia się 5x później
  // progress 0.5 → 0.8: Screen 3 (Mapa) - pojawia się 5x później
  // progress 0.8 → 1.0: Screen 4 (Tworzenie Eventu) - pojawia się 5x później
  
  let leftTitle = "";
  let leftText = "";
  let rightTitle = "";
  let rightText = "";
  let visible = false;
  
  if (progress < 0.2) {
    // Screen 1: Plan Dnia
    visible = progress > 0.05;
    leftTitle = "Twój Dzień";
    leftText = "Widzisz cały swój dzień w pigułce. Plan zajęć, dojazdy i wolne okna czasowe w jednym miejscu.";
    rightTitle = "Wolny Czas";
    rightText = "MyCampus automatycznie wykrywa, kiedy masz czas wolny i ile go masz. Bez ręcznego planowania.";
  } else if (progress < 0.5) {
    // Screen 2: Okno Czasu
    visible = true;
    leftTitle = "Czas";
    leftText = "MyCampus wykrywa okna w Twoim dniu. Gdy masz 2h wolne i 3 znajomych dostępnych — aplikacja automatycznie sugeruje spotkanie.";
    rightTitle = "Ludzie";
    rightText = "Widzisz kto jest dostępny teraz. Plan zajęć, dojazdy i dostępność znajomych w jednym widoku. Bez przełączania między aplikacjami.";
  } else if (progress < 0.8) {
    // Screen 3: Mapa
    visible = true;
    leftTitle = "Decyzje";
    leftText = "Biedronka 7 min pieszo. Autobus za 5 min. MyCampus podpowiada, co zrobić i kiedy — w odpowiednim momencie.";
    rightTitle = "Bez Planowania";
    rightText = "Nie musisz planować z wyprzedzeniem. Aplikacja sugeruje działania na podstawie Twojego harmonogramu i dostępności znajomych.";
  } else {
    // Screen 4: Tworzenie Eventu
    visible = true;
    leftTitle = "Propozycje";
    leftText = "Zaproponuj spotkanie w kilka sekund. Wybierz film, czas i uczestników. MyCampus automatycznie znajdzie najlepsze miejsce.";
    rightTitle = "Współpraca";
    rightText = "Zapros znajomych do wydarzenia. Wszyscy widzą szczegóły, lokalizację i mogą potwierdzić udział jednym kliknięciem.";
  }

  const opacity = visible ? 1 : 0;
  const translateXLeft = visible ? 0 : -40;
  const translateXRight = visible ? 0 : 40;

  return (
    <>
      {/* Left side narration */}
      <div
        className="absolute left-12 top-1/2 -translate-y-1/2 max-w-xs z-30"
        style={{
          opacity,
          transform: `translateX(${translateXLeft}px)`,
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-2">{leftTitle}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {leftText}
        </p>
      </div>

      {/* Right side narration */}
      <div
        className="absolute right-12 top-1/2 -translate-y-1/2 max-w-xs text-right z-30"
        style={{
          opacity,
          transform: `translateX(${translateXRight}px)`,
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-2">{rightTitle}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {rightText}
        </p>
      </div>
    </>
  );
}

