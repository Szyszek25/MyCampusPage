import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  isFree?: boolean;
}

const categoryColors: Record<string, string> = {
  "Muzyka": "bg-purple text-accent-foreground",
  "Tech": "bg-teal text-primary-foreground",
  "Sport": "bg-coral text-primary-foreground",
  "Networking": "bg-yellow text-secondary-foreground",
  "Nauka": "bg-muted text-muted-foreground",
};

const EventCard = ({
  image,
  title,
  date,
  location,
  attendees,
  category,
  isFree = false,
}: EventCardProps) => {
  return (
    <div className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {isFree && (
            <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 font-medium">
              Darmowe
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge className={`${categoryColors[category] || "bg-muted text-muted-foreground"} border-0 font-medium`}>
            {category}
          </Badge>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{attendees} uczestników</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
