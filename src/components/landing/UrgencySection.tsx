import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const UrgencySection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-brand-yellow-light">
      <div className="container-landing max-w-3xl">
        <div className="border-2 border-brand-yellow rounded-2xl p-8 md:p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto mb-5">
            <Clock className="w-7 h-7 text-brand-yellow-hover" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Por que agendar esta semana:
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Nossa equipe de diagnóstico atende no máximo <strong className="text-foreground">8 gestores por semana</strong> (limitação
            real de agenda técnica, não truque de escassez). Neste momento, temos{" "}
            <strong className="text-foreground">3 horários disponíveis</strong> para esta semana. Se deixar para depois, a
            próxima disponibilidade pode ser só em 2-3 semanas — e enquanto isso, o custo invisível
            continua correndo.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Garantir meu horário agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
