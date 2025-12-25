import { X, Check } from "lucide-react";

const WhyMyCampusSection = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Dlaczego MyCampus?
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-border">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-foreground">Nie musisz planować ręcznie</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-foreground">Nie musisz pisać do wszystkich</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <p className="text-foreground">Nie musisz znać miasta</p>
              </div>
              
              <div className="border-t border-border my-6" />
              
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground font-semibold">MyCampus ogarnia to za Ciebie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMyCampusSection;

