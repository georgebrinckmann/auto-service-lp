import { ScrollReveal } from "@/hooks/useScrollReveal";

const clientSegments = ["Bebidas", "Farmacêutica", "Mineração", "Logística"];

const FinalReinforcementSection = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-gray-light">
      <div className="container-landing text-center">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-8">
            {clientSegments.map((name) => (
              <span
                key={name}
                className="text-foreground/25 hover:text-foreground/50 text-base font-bold tracking-wide uppercase transition-colors duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-4">
            <p className="text-primary font-semibold text-sm">
              Mais de 30 anos gerenciando frotas de empresas líderes
            </p>
          </div>
          <p className="text-xl md:text-2xl font-extrabold text-foreground">
            Economia comprovada. Disponibilidade garantida. Controle total.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalReinforcementSection;
