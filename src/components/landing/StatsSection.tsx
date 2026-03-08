import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { target: 2, suffix: "Mi+", prefix: "R$ ", label: "Em economia gerada para clientes" },
  { target: 95, suffix: "%", prefix: "", label: "Disponibilidade da frota" },
  { target: 30, suffix: "+", prefix: "", label: "Anos de experiência" },
  { target: 70, suffix: "mil", prefix: "", label: "Veículos gerenciados" },
];

const AnimatedStat = ({ target, suffix, prefix, label }: typeof stats[0]) => {
  const { ref, count } = useAnimatedCounter(target, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-black text-primary-foreground mb-2 tabular-nums">
        {prefix}{count}{suffix}
      </p>
      <p className="text-primary-foreground/70 text-sm md:text-base font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-0">
      <div className="bg-stats-gradient py-14 md:py-16">
        <div className="container-landing">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <AnimatedStat key={i} {...stat} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
