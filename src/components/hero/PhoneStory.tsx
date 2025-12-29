"use client";

// Helper functions
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

import { Screen1_PlanDnia, Screen2_OknoCzasu, Screen3_Mapa, Screen4_TworzenieEventu } from "@/components/examples/PhoneScreenExamples";

interface PhoneStoryProps {
  progress: number;
}

export default function PhoneStory({ progress }: PhoneStoryProps) {
  // Phone starts visible and large for fullscreen Screen 1
  // progress 0 → 0.2: phone stays large (scale 1.2) and centered for fullscreen Screen 1
  // progress 0.2 → 0.5: phone moves up slightly and scales down (1.2 → 1.05) as other screens appear
  const y = progress < 0.2 ? 0 : lerp(0, -100, clamp((progress - 0.2) / 0.3, 0, 1));
  const scale = progress < 0.2 ? 1.2 : lerp(1.2, 1.05, clamp((progress - 0.2) / 0.3, 0, 1));

  // Determine which screen to show based on progress
  // progress 0 → 0.2: Screen 1 (Plan Dnia) - pełnoekranowy na początku
  // progress 0.2 → 0.5: Screen 2 (Okno Czasu) - pojawia się 5x później
  // progress 0.5 → 0.8: Screen 3 (Mapa) - pojawia się 5x później
  // progress 0.8 → 1.0: Screen 4 (Tworzenie Eventu) - pojawia się 5x później
  let currentScreen;
  
  if (progress < 0.2) {
    currentScreen = <Screen1_PlanDnia />;
  } else if (progress < 0.5) {
    currentScreen = <Screen2_OknoCzasu />;
  } else if (progress < 0.8) {
    currentScreen = <Screen3_Mapa />;
  } else {
    currentScreen = <Screen4_TworzenieEventu />;
  }

  return (
    <div
      className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20"
      style={{
        transform: `
          translate(-50%, -50%)
          translateY(${y}px)
          scale(${scale})
        `,
        transition: "transform 0.1s linear",
      }}
    >
      {/* Phone frame - Apple style */}
      <div className="relative w-[375px] h-[812px] rounded-[3.5rem] bg-gradient-to-b from-gray-900 to-gray-800 p-[6px] shadow-2xl">
        {/* Phone frame inner */}
        <div className="absolute inset-[6px] rounded-[3rem] bg-background overflow-hidden">
          {/* Screen content */}
          <div
            key={Math.floor(progress * 3)}
            style={{
              transition: "opacity 0.4s ease-in-out",
            }}
          >
            {currentScreen}
          </div>
        </div>
      </div>
    </div>
  );
}

