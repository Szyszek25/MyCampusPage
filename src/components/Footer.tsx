import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MyCampus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Łączymy studentów poprzez wspólne pasje i zainteresowania.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Twoje konto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Zarejestruj się</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Zaloguj</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Ustawienia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Odkrywaj</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Wszystkie wydarzenia</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kategorie</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Grupy studenckie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Wsparcie</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Centrum pomocy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Regulamin</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MyCampus. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Zrobione z <Heart className="w-4 h-4 text-coral" /> dla studentów
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
