import { Button } from "@/components/ui/button";

const pillars = [
  {
    number: "1",
    title: "VISIBILIDADE TOTAL EM TEMPO REAL",
    description: "Painel único com custos por veículo, ordens de serviço centralizadas e alertas automáticos de desvios.",
    benefit: "Saber exatamente onde cada real está indo, antes do orçamento estourar.",
  },
  {
    number: "2",
    title: "CONTROLE DOCUMENTAL BLINDADO",
    description: "Toda manutenção rastreada, aprovada e arquivada conforme sua política interna.",
    benefit: "Zero dor de cabeça em auditorias. Compliance garantido.",
  },
  {
    number: "3",
    title: "FOCO EM DISPONIBILIDADE, NÃO SÓ PREÇO",
    description: "Manutenção preventiva programada para evitar paradas não planejadas (que custam 4x mais).",
    benefit: "Frota rodando. Operação sem surpresas.",
  },
];

const HowItWorksSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-landing">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Como a Auto Service entrega economia real sem você adicionar trabalho à sua equipe
          </h2>
          <p className="text-lg text-muted-foreground">
            Não é só software. É gestão 100% terceirizada da sua frota.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                <span className="text-primary-foreground font-bold text-xl">{p.number}</span>
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>
              <div className="bg-brand-blue-light rounded-xl p-4">
                <p className="text-sm font-semibold text-primary">
                  ✨ O que você ganha: <span className="font-normal text-foreground">{p.benefit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Agendar diagnóstico gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
