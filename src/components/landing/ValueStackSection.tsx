import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const items = [
  {
    title: "1. Mapeamento dos Custos Ocultos",
    description: "Identificamos os 3 pontos onde sua frota está sangrando dinheiro hoje (mesmo que você não veja nas planilhas).",
  },
  {
    title: "2. Benchmark do Seu Setor",
    description: "Comparamos seus números com empresas similares que já otimizamos. Você sai sabendo se está acima, na média ou abaixo.",
  },
  {
    title: "3. Projeção de Economia Realista",
    description: "Mostramos quanto você pode economizar nos próximos 12 meses — com base em dados, não achismo.",
  },
  {
    title: "4. Plano de Ação em 3 Passos",
    description: "Se fizer sentido, você recebe um roadmap claro do que implementar primeiro (mesmo que não feche conosco).",
  },
  {
    title: "5. Zero Compromisso",
    description: "Não é call de vendas. É diagnóstico técnico. Você decide se quer avançar depois.",
  },
];

const ValueStackSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-brand-blue">
      <div className="container-landing">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-12 max-w-3xl mx-auto text-balance">
          O que acontece quando você agenda o diagnóstico gratuito de 20 minutos:
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">{item.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Sim, quero meu diagnóstico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
