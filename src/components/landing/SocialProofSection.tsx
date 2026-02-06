import { Button } from "@/components/ui/button";

const cases = [
  {
    sector: "SETOR DE BEBIDAS",
    badge: "Multinacional com frota de grande porte",
    title: "Economia de 20% nos custos de manutenção em 12 meses",
    description: "Como? Centralização de ordens de serviço eliminou \"gatos\" de motorista e renegociação em bloco com oficinas.",
  },
  {
    sector: "FARMACÊUTICA",
    badge: "15 anos de parceria · 95% de disponibilidade garantida",
    title: "Economia consistente acima de 15% ao ano + toda documentação organizada e aprovada",
    description: "Como? Controle de prazos de manutenção preventiva evitou corretivas (4x mais caras).",
  },
  {
    sector: "MINERAÇÃO",
    badge: "25 anos de contrato · Frota compartilhada (pool)",
    title: "Redução drástica de ociosidade com monitoramento integrado",
    description: "Como? Gestão compartilhada entre transporte de funcionários e veículos operacionais liberou recursos para reinvestimento em segurança.",
  },
];

const SocialProofSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-landing">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl mx-auto mb-12 text-balance">
          Por que grandes empresas confiam na Auto Service há mais de 15 anos?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-feature border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                {c.sector}
              </span>
              <span className="inline-block bg-brand-blue-light text-primary text-xs font-semibold uppercase tracking-wider rounded-md px-3 py-1.5 mb-5 self-start">
                {c.badge}
              </span>
              <h3 className="text-lg font-bold mb-3 flex-grow">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Quero um diagnóstico como esses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
