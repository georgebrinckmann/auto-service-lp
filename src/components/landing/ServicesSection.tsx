import { Car, Bus, Wrench, FileCheck, MapPin, Shield } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Car,
    title: "Gestão de Frota Própria",
    description: "Controle completo de manutenção preventiva e corretiva, documentação, sinistros e custos operacionais da sua frota própria.",
    iconBg: "bg-primary/10",
  },
  {
    icon: Bus,
    title: "Gestão de Frota Locada",
    description: "Gerenciamento de contratos de locação, acompanhamento de KPIs, controle de devoluções e negociação com locadoras.",
    iconBg: "bg-brand-teal/10",
  },
  {
    icon: Wrench,
    title: "Gestão de Manutenção",
    description: "Planejamento e controle de manutenções preventivas e corretivas, com rede credenciada de oficinas e fornecedores homologados.",
    iconBg: "bg-accent/10",
  },
  {
    icon: Bus,
    title: "Gestão de Transporte",
    description: "Fretamento, transporte de funcionários, gestão de rotas e otimização de recursos com veículos compartilhados em formato pool.",
    iconBg: "bg-brand-purple-light",
  },
  {
    icon: MapPin,
    title: "Monitoramento e Telemetria",
    description: "Rastreamento em tempo real, controle de velocidade, consumo de combustível e comportamento dos motoristas.",
    iconBg: "bg-primary/10",
  },
  {
    icon: FileCheck,
    title: "Gestão Documental e Compliance",
    description: "Controle de CNHs, licenciamentos, seguros, multas e toda a documentação necessária para auditorias e conformidade.",
    iconBg: "bg-brand-teal/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-landing">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="pill-badge bg-primary/10 text-primary mb-4">
              🔧 Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold max-w-4xl mx-auto text-balance leading-tight">
              Soluções completas para{" "}
              <span className="text-primary">cada tipo de frota</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Da frota própria à locada, do transporte ao monitoramento — tudo integrado em uma única plataforma.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 flex flex-col border border-border/40 h-full">
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 leading-snug">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
