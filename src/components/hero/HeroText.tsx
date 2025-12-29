import { Users, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper functions
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

interface HeroTextProps {
  progress: number;
}

export default function HeroText({ progress }: HeroTextProps) {
  // Text moves up and fades out gently when phone is visible
  // progress 0 → 0.2: text fades out quickly as phone is fullscreen from start
  const opacity = lerp(1, 0, clamp(progress / 0.2, 0, 1));
  const y = lerp(0, -120, clamp(progress / 0.2, 0, 1));

  return (
    <div
      style={{
        transform: `translateY(${y}px)`,
        opacity,
        transition: "transform 0.1s linear, opacity 0.1s linear",
      }}
      className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center justify-start h-full pt-8"
    >
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

      <p className="text-lg text-muted-foreground mb-8 max-w-xl">
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
  );
}

