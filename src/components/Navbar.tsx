import { Search, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm relative" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/light-plaster-wall-texture.jpg')`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
    }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl text-foreground">MyCampus</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xl">
          <div className="flex items-center w-full bg-muted rounded-full border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 flex-1">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj wydarzeń..."
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
              />
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Warszawa</span>
            </div>
            <Button size="icon" className="rounded-full m-1">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
            <span>Polski</span>
          </button>
          <Button variant="ghost" className="text-sm font-medium">
            Zaloguj
          </Button>
          <Button className="rounded-full">
            Zarejestruj się
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
