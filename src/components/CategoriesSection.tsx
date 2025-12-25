import { Code, Music, Dumbbell, Users, BookOpen, Camera, Gamepad2, Palette } from "lucide-react";

const categories = [
  { icon: Code, name: "Tech & IT", color: "bg-teal-light text-teal", count: 48 },
  { icon: Music, name: "Muzyka", color: "bg-purple-light text-purple", count: 32 },
  { icon: Dumbbell, name: "Sport", color: "bg-coral-light text-coral", count: 56 },
  { icon: Users, name: "Networking", color: "bg-yellow-light text-yellow", count: 24 },
  { icon: BookOpen, name: "Nauka", color: "bg-muted text-muted-foreground", count: 67 },
  { icon: Camera, name: "Fotografia", color: "bg-purple-light text-purple", count: 15 },
  { icon: Gamepad2, name: "Gaming", color: "bg-teal-light text-teal", count: 28 },
  { icon: Palette, name: "Sztuka", color: "bg-coral-light text-coral", count: 19 },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Odkryj kategorie
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Znajdź wydarzenia, które odpowiadają Twoim zainteresowaniom
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-4 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {category.count} wydarzeń
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
