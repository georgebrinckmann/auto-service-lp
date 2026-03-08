import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    title: "Mapeamento dos Custos Ocultos",
    description: "Identificamos os 3 pontos onde sua frota está sangrando dinheiro hoje (mesmo que você não veja nas planilhas).",
  },
  {
    title: "Benchmark do Seu Setor",
    description: "Comparamos seus números com empresas similares que já otimizamos. Você sai sabendo se está acima, na média ou abaixo.",
  },
  {
    title: "Projeção de Economia Realista",
    description: "Mostramos quanto você pode economizar nos próximos 12 meses — com base em dados, não achismo.",
  },
  {
    title: "Plano de Ação em 3 Passos",
    description: "Se fizer sentido, você recebe um roadmap claro do que implementar primeiro (mesmo que não feche conosco).",
  },
  {
    title: "Zero Compromisso",
    description: "Não é call de vendas. É diagnóstico técnico. Você decide se quer avançar depois.",
  },
];

const ValueStackSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-faq-gradient relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary-foreground/3 blur-3xl" />

      <div className="container-landing relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="pill-badge bg-primary-foreground/15 text-primary-foreground mb-4">
              🎁 O que você recebe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-primary-foreground max-w-3xl mx-auto text-balance leading-tight">
              O que acontece quando você agenda o diagnóstico gratuito de 20 minutos:
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-5 mb-14">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex gap-5 items-start bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center mt-0.5">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-1">
                    {i + 1}. {item.title}
                  </h3>
                  <p className="text-primary-foreground/75 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button
              onClick={scrollToForm}
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-base uppercase tracking-wide px-10 py-6 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
            >
              Sim, quero meu diagnóstico
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueStackSection;
