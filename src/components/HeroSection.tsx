import { Users, Heart, Settings, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroImage1 = "/placeholder.svg";

const HeroSection = () => {
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
                <MapPin className="w-4 h-4" />
                W pobliżu
              </div>
              <img
                src={heroImage1}
                alt="Studenci na kampusie"
                className="rounded-2xl w-72 h-48 object-cover shadow-lg"
              />
            </div>
            <div className="relative ml-8">
              <div className="absolute -bottom-4 left-4 bg-coral rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg z-10">
                Zajęcia śpiewu 🎵
              </div>
              <img
                src={heroImage1}
                alt="Zajęcia grupowe"
                className="rounded-2xl w-64 h-44 object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Center content */}
          <div className="text-center max-w-2xl flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Platforma{" "}
              <span className="inline-flex items-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-1" />
              </span>{" "}
              dla studentów.
              <br />
              Gdzie{" "}
              <span className="inline-flex items-center">
                <Settings className="w-8 h-8 md:w-10 md:h-10 text-teal mx-1" />
              </span>{" "}
              zainteresowania
              <br />
              stają się{" "}
              <span className="inline-flex items-center">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-coral mx-1" />
              </span>{" "}
              przyjaźniami.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Bez względu na Twoje zainteresowania, od hackathonów i nauki po sport i networking, na MyCampus znajdziesz tysiące studentów, którzy je dzielą. Dołącz do społeczności!
            </p>

            <Button size="lg" className="rounded-full text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Dołącz do MyCampus
            </Button>
          </div>

          {/* Right image column */}
          <div className="hidden lg:flex flex-col gap-4 flex-1 items-end">
            <div className="relative">
              <div className="absolute -top-4 right-4 bg-coral rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg z-10">
                Klub mówców 🎤
              </div>
              <img
                src={heroImage1}
                alt="Klub dyskusyjny"
                className="rounded-2xl w-72 h-48 object-cover shadow-lg"
              />
            </div>
            <div className="relative mr-8">
              <div className="absolute -bottom-4 right-4 bg-yellow rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg flex items-center gap-2 z-10">
                <Calendar className="w-4 h-4" />
                W każdy czwartek
              </div>
              <img
                src={heroImage1}
                alt="Wydarzenie studenckie"
                className="rounded-2xl w-64 h-44 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
