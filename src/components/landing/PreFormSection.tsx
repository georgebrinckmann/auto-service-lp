import { Target, BarChart3, Zap } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Target,
    title: "Personalizado para sua realidade",
    description: "Não é \"receita de bolo\". Analisamos seu porte, tipo de frota e operação para entregar números reais.",
    bg: "bg-brand-blue-light",
    iconBg: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Baseado em +15 anos de dados",
    description: "Comparamos seus custos com empresas similares que já otimizamos (bebidas, farmacêutica, mineração, logística).",
    bg: "bg-brand-purple-light",
    iconBg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Rápido e prático",
    description: "Leva 2 minutos para responder. Você recebe o diagnóstico em até 24h.",
    bg: "bg-brand-green-light",
    iconBg: "bg-brand-teal/10",
  },
];

const PreFormSection = () => {
  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-landing">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="pill-badge bg-primary/10 text-primary mb-4">
              💡 Por que funciona
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Por que esse diagnóstico funciona
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`group text-center ${f.bg} rounded-3xl p-10 hover:-translate-y-2 transition-all duration-500 border border-border/30 h-full`}>
                <div className={`w-16 h-16 rounded-2xl ${f.iconBg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreFormSection;
