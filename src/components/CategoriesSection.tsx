import { Film, Wine, Utensils, ArrowUpRight } from "lucide-react";

const favoritePlaces = [
  { 
    icon: Film, 
    name: "Kino", 
    gradientFrom: "from-purple-500", 
    gradientTo: "to-purple-600",
    iconColor: "text-purple-600"
  },
  { 
    icon: Wine, 
    name: "Bary", 
    gradientFrom: "from-coral", 
    gradientTo: "to-coral/80",
    iconColor: "text-coral"
  },
  { 
    icon: Utensils, 
    name: "Restauracje", 
    gradientFrom: "from-teal-500", 
    gradientTo: "to-teal-600",
    iconColor: "text-teal-600"
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Przeglądaj ulubione miejsca
        </h2>
        
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar">
            {favoritePlaces.map((category, index) => (
              <div
                key={category.name}
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <a 
                  href="#"
                  className="relative block hover:no-underline mb-3 w-[244px] h-[174px] md:w-[260px] md:h-[180px] lg:w-[280px] lg:h-[200px] rounded-3xl border border-border transition-transform duration-200 hover:scale-[1.02] shadow-sm"
                >
                  <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white p-5 lg:p-6">
                    {/* Title */}
                    <div className="flex flex-1 items-start justify-start">
                      <p className="text-lg lg:text-xl font-bold line-clamp-2 w-full whitespace-pre-line text-left text-foreground">
                        {category.name}
                      </p>
                    </div>
                    
                    {/* Bottom section with icon */}
                    <div className="flex items-end justify-end pt-4">
                      <div className={`${category.iconColor} opacity-70`}>
                        <category.icon className="w-14 h-14 lg:w-16 lg:h-16" />
                      </div>
                    </div>
                    
                    {/* Gradient border at bottom */}
                    <div 
                      className={`absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo}`}
                    />
                    
                    {/* Arrow icon in top right */}
                    <div className="absolute top-5 right-5 opacity-60 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
