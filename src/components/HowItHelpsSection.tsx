import { Clock, Users, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Wiesz ile masz wolnego czasu",
    description: "MyCampus liczy Twoje realne okna między zajęciami.",
    color: "bg-teal-light text-teal",
  },
  {
    icon: Users,
    title: "Widzisz kto jest dostępny",
    description: "Bez pisania do wszystkich i bez niezręczności.",
    color: "bg-purple-light text-purple",
  },
  {
    icon: CheckCircle2,
    title: "Dostajesz gotową decyzję",
    description: "Gdzie iść, czy zdążysz i czy to ma sens.",
    color: "bg-coral-light text-coral",
  },
];

const HowItHelpsSection = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Jak MyCampus pomaga na co dzień
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelpsSection;







