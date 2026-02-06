import { Button } from "@/components/ui/button";
import { Eye, FileCheck, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    number: "01",
    title: "Visibilidade total em tempo real",
    description: "Painel único com custos por veículo, ordens de serviço centralizadas e alertas automáticos de desvios.",
    benefit: "Saber exatamente onde cada real está indo, antes do orçamento estourar.",
    gradient: "from-primary/10 to-brand-blue-light",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Controle documental blindado",
    description: "Toda manutenção rastreada, aprovada e arquivada conforme sua política interna.",
    benefit: "Zero dor de cabeça em auditorias. Compliance garantido.",
    gradient: "from-brand-purple-light to-primary/5",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Foco em disponibilidade, não só preço",
    description: "Manutenção preventiva programada para evitar paradas não planejadas (que custam 4x mais).",
    benefit: "Frota rodando. Operação sem surpresas.",
    gradient: "from-brand-green-light to-brand-teal/5",
  },
];

const HowItWorksSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/3 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-landing relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="pill-badge bg-primary/10 text-primary mb-4">
            🔧 Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold mb-5 text-balance leading-tight">
            Como a Auto Service entrega{" "}
            <span className="text-primary">economia real</span> sem você adicionar trabalho
          </h2>
          <p className="text-lg text-muted-foreground">
            Não é só software. É gestão 100% terceirizada da sua frota.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${p.gradient} rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-5xl font-black text-primary/8">{p.number}</span>
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{p.description}</p>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <p className="text-sm">
                  <span className="font-bold text-primary">✨ O que você ganha:</span>{" "}
                  <span className="text-foreground">{p.benefit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-base uppercase tracking-wide px-10 py-6 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
          >
            Agendar diagnóstico gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
