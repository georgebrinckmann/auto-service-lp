import { Button } from "@/components/ui/button";
import { TrendingDown, Shield, Activity } from "lucide-react";

const cases = [
  {
    icon: TrendingDown,
    sector: "SETOR DE BEBIDAS",
    badge: "Multinacional · 1.200 veículos",
    title: "Economia de 20% nos custos de manutenção em 12 meses",
    description: "Centralização de ordens de serviço, eliminação de desvios operacionais e renegociação em bloco com oficinas credenciadas resultaram em economia expressiva na gestão de uma frota de grande porte.",
    color: "bg-brand-blue-light text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: Shield,
    sector: "INDÚSTRIA FARMACÊUTICA",
    badge: "Multinacional · 15 anos de parceria · 95% disponibilidade",
    title: "Economia consistente acima de 15% ao ano com documentação estruturada",
    description: "Controle rigoroso de prazos de manutenção preventiva evitou corretivas (4x mais caras), enquanto toda a parte documental foi estruturada com política validada e aprovada ao longo do contrato — garantindo compliance em auditorias.",
    color: "bg-brand-purple-light text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: Activity,
    sector: "MINERAÇÃO",
    badge: "25+ anos de contrato · Frota compartilhada",
    title: "Redução drástica de ociosidade com gestão integrada e modelo pool",
    description: "Gestão compartilhada entre transporte de funcionários em veículos fretados e veículos operacionais no formato pool, com soluções de monitoramento, segurança e controle documental — liberando recursos e gerando expressivos índices de economia.",
    color: "bg-brand-green-light text-brand-teal",
    iconBg: "bg-brand-teal/10",
  },
];

const SocialProofSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-landing">
        <div className="text-center mb-14">
          <span className="pill-badge bg-primary/10 text-primary mb-4">
            🏆 Cases de sucesso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold max-w-4xl mx-auto text-balance leading-tight">
            Por que grandes empresas confiam na nossa solução{" "}
            <span className="text-primary">há mais de 30 anos?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center mb-5`}>
                <c.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                {c.sector}
              </span>
              <span className={`inline-block ${c.color} text-xs font-semibold rounded-full px-3 py-1.5 mb-5 self-start`}>
                {c.badge}
              </span>
              <h3 className="text-lg font-bold mb-3 flex-grow leading-snug">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <span className="font-semibold text-foreground">Como?</span> {c.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-base uppercase tracking-wide px-10 py-6 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
          >
            Quero um diagnóstico como esses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
