import { ArrowRight, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EventCard from "./EventCard";

const eventMusic = "/placeholder.svg";
const eventHackathon = "/placeholder.svg";
const eventYoga = "/placeholder.svg";
const eventNetworking = "/placeholder.svg";

const events = [
  {
    id: 1,
    image: eventYoga,
    title: "Poranna joga na kampusie - Start Your Day Right!",
    date: "Sob, 28 gru • 8:00",
    location: "Kampus Główny, Trawnik",
    attendees: 24,
    category: "Sport",
    isFree: true,
  },
  {
    id: 2,
    image: eventHackathon,
    title: "Hackathon: AI for Good - 24h Challenge",
    date: "Pt-Sob, 3-4 sty • 18:00",
    location: "Wydział Informatyki, Aula A1",
    attendees: 156,
    category: "Tech",
    isFree: true,
  },
  {
    id: 3,
    image: eventMusic,
    title: "Jam Session - Otwarte spotkanie muzyków",
    date: "Czw, 2 sty • 19:00",
    location: "Klub Studencki, Sala Prób",
    attendees: 18,
    category: "Muzyka",
    isFree: true,
  },
  {
    id: 4,
    image: eventNetworking,
    title: "Career Day - Networking z pracodawcami",
    date: "Śr, 8 sty • 10:00",
    location: "Centrum Konferencyjne",
    attendees: 342,
    category: "Networking",
    isFree: true,
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Dzieje się dziś na kampusie
            </h2>
            <Monitor className="w-6 h-6 text-teal" />
          </div>
          <p className="text-muted-foreground mb-4">
            Rzeczy, na które <strong>realnie zdążysz</strong> między zajęciami.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Dziś
            </Badge>
            <Badge variant="outline" className="bg-muted">
              Za 2h
            </Badge>
            <Badge variant="outline" className="bg-muted">
              Po zajęciach
            </Badge>
            <Badge variant="outline" className="bg-muted">
              ≤ 2 km
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
