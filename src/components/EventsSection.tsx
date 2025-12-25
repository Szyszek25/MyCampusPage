import { ArrowRight, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Nadchodzące wydarzenia
            </h2>
            <Monitor className="w-6 h-6 text-teal" />
          </div>
          <Button variant="link" className="text-primary font-medium group">
            Zobacz wszystkie wydarzenia
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
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
