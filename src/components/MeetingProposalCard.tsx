import { Calendar, MapPin, X, Plus, Send, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MeetingProposalCard = () => {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [selectedTime, setSelectedTime] = useState(1);
  const [participants, setParticipants] = useState([
    { id: 1, name: "Sarah", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJmNOo6j8BX22g_Ej_dzTaVUk6rIagihaBoWOkwVvmnRkx6ZsGIwBO-gNHhxUMAorRJNF9lad0g8RgYgnzn5IkuvoxzK35G7a1cTzIzkPk68dKihr4gN8wlDm4xI4czNK7OeuxeYLOhM5PVyod1anuABJ7dAeRZ0gI792TnpvIbkT0__WIBvVmxW1CNAxM8vt3-_upYfBOR53YEfkSa_fRT2DoeJFmixJHtj4A1jSw66kSpG6IR20mF4OjbNyd7BGJMAu_-xYgKMTq" },
    { id: 2, name: "Mike", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuANLyXbQreX3gpnsyuhulm8Y13ukktXPff0UyEV6WwxCaQiaPD-CzAvOvPxI-My4F3w6kWzVyF30fL46QSNxDbW5Aan_yKvzNoUXXTAi0N1lNpsUcXrUms2YLRpx8QXBzJfF9GXFpDtzlP6nql2W1SB4s6C4qgaZQQWb7hAojxDxo6Vi0OpDIsSmbwErRCOyhUs2echXcfkFOI0aGFjh1BW6IaEnO3TW2vZgO9n6Yk8w9WK_dPgt6kfWX0UhH06owT_wjtw3EoTsV1Z" },
  ]);

  const movies = [
    { id: 1, title: "Dune: Part Two", genre: "Sci-Fi", duration: "2h 46m", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo2xqy1QxErtXnTNc5B89m0VrmOHGE_B9KdnSGkz4kXzmTezj_OYPFy7BeoFUlyCkdSJFO96YX2g9TnR44Mpd8e6J8IVBycVaRU8VCqFeWWkegW0VjoN-UTcQ7doNYhBgk8-7BE-K0naP3JIskd8OPqJiuM6Wam54kptba6GtSP_LEB5EvrVIMz62z7o5Lj5l40h-PTFK6UoZGbGIv1WyM4TjcgVQCSryZjFPX-R7WXugJtIlnFLKjZ7azQcyjkGWCtWpkziAP-MU", badge: "IMAX" },
    { id: 2, title: "Civil War", genre: "Action", duration: "1h 49m", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI18PzzGo3beoaDogzuB2zJaHTfcMpew5XdFMKkXrhdx6AH9qQ94vQpXuok0jeOps4mJDBTrmVm4YJ0Rlp-ezuXezmTUNOfi4JqDOupIjogPnWT_UM_fo5auYPflK1-QKBViSO20RLUsfzNaRMugwdO-DbJUfcj8i06elwNiMb1-5pY7UlY5_H_SRenYUV_94wGg1ePFLqvHWbImxJEHxG8Hpb6jhXlv-eSPzaroZCWULCdm0Zdo_8TS-yUlawh6fS5uKPlK92F3g" },
    { id: 3, title: "Challengers", genre: "Drama", duration: "2h 11m", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3mPCyptsxfOxRpgnDLfPMWFIgcyiLaUZv7GhyTf43pxTuTgHxBHrBFuBZLicKj6_Wam2pt1OA56hpwOEGTM0ou6-7du_XNPs03E1rpI1fKdyrR6z9wD12nFFYD7z6Q2TKYrnHRvT91elBvilZeODGT6YWUa3uNfS_KuQr23ov2LtLZMg4LUo4Tsko1z3Bm21BFANOl3qRa2hDvL7K8cTkCGpSuO12hQUQN-MMJIfYykrQLGgojGgO0UxJXszokHOXNRXUFcBY4WU" },
  ];

  const showtimes = ["16:15", "19:30", "22:00", "00:30"];

  const removeParticipant = (id: number) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  return (
    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-border p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Cinema Night</h2>

      {/* Select Movie */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
          Select Movie
        </label>
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
          {movies.map((movie, index) => (
            <button
              key={movie.id}
              onClick={() => setSelectedMovie(index)}
              className={`group relative flex-shrink-0 w-36 flex flex-col gap-3 text-left transition-transform active:scale-95 ${
                selectedMovie === index ? '' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <div className={`relative aspect-[2/3] w-full rounded-2xl overflow-hidden ${
                selectedMovie === index 
                  ? 'ring-4 ring-yellow ring-offset-2 ring-offset-background shadow-xl' 
                  : 'border border-border shadow-sm group-hover:shadow-md transition-shadow'
              }`}>
                <img 
                  alt={movie.title} 
                  className="w-full h-full object-cover" 
                  src={movie.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60" />
                {movie.badge && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-yellow text-black text-[10px] font-bold uppercase tracking-wide">
                      {movie.badge}
                    </span>
                  </div>
                )}
                {selectedMovie === index && (
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
      <div className="mb-6">
        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
          Date & Showtime
        </label>
        <div className="flex flex-col gap-3">
          <button className="w-full h-12 flex items-center justify-between px-4 rounded-xl bg-muted border border-border active:bg-muted/80 transition-colors">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-bold text-foreground">Dziś, 24 paź</span>
            </div>
            <span className="text-muted-foreground">▼</span>
          </button>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {showtimes.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(index)}
                disabled={index === 3}
                className={`flex items-center justify-center px-5 h-10 rounded-xl text-sm font-medium whitespace-nowrap active:scale-95 transition-transform ${
                  selectedTime === index
                    ? 'bg-yellow text-black shadow-sm ring-2 ring-yellow ring-offset-2 ring-offset-background font-bold'
                    : index === 3
                    ? 'bg-muted border border-border text-muted-foreground opacity-50 cursor-not-allowed'
                    : 'bg-muted border border-border text-muted-foreground'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Participants */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-muted-foreground mb-3 px-1 uppercase tracking-wider">
          Participants
        </label>
        <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
          <button className="flex flex-col items-center gap-1.5 min-w-[60px] group">
            <div className="size-14 rounded-full border-2 border-dashed border-muted-foreground/40 flex items-center justify-center group-hover:bg-muted transition-colors group-active:scale-95">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Add</span>
          </button>
          {participants.map((participant) => (
            <div key={participant.id} className="flex flex-col items-center gap-1.5 min-w-[60px] relative group">
              <div className="relative transition-transform active:scale-95">
                <img 
                  alt={participant.name} 
                  className="size-14 rounded-full object-cover border border-border" 
                  src={participant.avatar}
                />
                <button
                  onClick={() => removeParticipant(participant.id)}
                  className="absolute -top-1 -right-1 bg-white dark:bg-stone-800 rounded-full p-[2px] shadow-sm"
                >
                  <X className="w-3 h-3 text-red-500" />
                </button>
              </div>
              <span className="text-xs font-medium text-foreground">{participant.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cinema Location */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-3 px-1">
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Cinema Location
          </label>
          <button className="flex items-center gap-1 text-xs font-bold text-black bg-yellow px-2 py-1 rounded-md transition-transform active:scale-95">
            <MapPin className="w-3.5 h-3.5" />
            View Map
          </button>
        </div>
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-sm border border-border bg-muted map-grid">
          {/* Decorative elements */}
          <div className="absolute top-0 right-10 w-24 h-full bg-blue-200/30 dark:bg-blue-900/20 -skew-x-12 blur-sm" />
          <div className="absolute bottom-20 left-0 w-full h-8 bg-white/40 dark:bg-black/20 rotate-3" />
          <div className="absolute top-20 left-0 w-full h-6 bg-white/40 dark:bg-black/20 -rotate-6" />
          
          {/* Location marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-0 pb-12">
            <div className="relative">
              <MapPin className="w-12 h-12 text-foreground drop-shadow-xl z-10 relative" style={{ fill: 'currentColor' }} />
              <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]" />
            </div>
          </div>

          {/* Cinema info card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-stone-800 p-3 rounded-xl shadow-xl flex items-center gap-3 border border-border z-10 cursor-pointer active:bg-muted transition-colors">
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
              <span className="text-muted-foreground text-sm font-bold">›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Send Proposal Button */}
      <Button className="w-full h-14 bg-foreground text-primary-foreground rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-[0.99] transition-transform group">
        <span className="font-bold text-lg">Wyślij propozycję</span>
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default MeetingProposalCard;

