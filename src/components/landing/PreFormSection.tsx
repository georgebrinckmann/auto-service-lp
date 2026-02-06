import { Target, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalizado para sua realidade",
    description: "Não é \"receita de bolo\". Analisamos seu porte, tipo de frota e operação para entregar números reais.",
  },
  {
    icon: BarChart3,
    title: "Baseado em +15 anos de dados",
    description: "Comparamos seus custos com empresas similares que já otimizamos (bebidas, farmacêutica, mineração, logística).",
  },
  {
    icon: Zap,
    title: "Rápido e prático",
    description: "Leva 2 minutos para responder. Você recebe o diagnóstico em até 24h.",
  },
];

const PreFormSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-landing">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          Por que esse diagnóstico funciona:
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-brand-gray-light">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreFormSection;
