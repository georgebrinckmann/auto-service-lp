import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const UrgencySection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-landing max-w-4xl">
        <ScrollReveal>
          <div className="relative bg-brand-yellow-light border-2 border-accent/30 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-yellow-hover" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-brand-yellow-hover" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-5">
                Por que agendar esta semana:
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
                Nossa equipe atende no máximo <strong className="text-foreground">8 gestores por semana</strong>.
                Neste momento, temos <strong className="text-foreground">3 horários disponíveis</strong>.
                Se deixar para depois, a próxima disponibilidade pode ser só em 2-3 semanas — e enquanto isso, o custo invisível continua correndo.
              </p>
              <Button
                onClick={scrollToForm}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-base uppercase tracking-wide px-10 py-6 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
              >
                Garantir meu horário agora
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UrgencySection;
