import { Button } from "@/components/ui/button";
import logoPositive from "@/assets/logo-positive.png";
import DashboardMockup from "@/components/landing/DashboardMockup";

const clientLogos = ["Monsanto-Bayer", "GSK", "Vale", "LOG-IN Logística"];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-hero-gradient overflow-hidden min-h-[700px]">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float" />
      <div className="absolute top-40 right-20 w-14 h-14 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-brand-teal/10 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 left-1/2 w-6 h-6 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />

      {/* Navigation */}
      <nav className="container-landing py-5 flex items-center justify-between relative z-10">
        <img src={logoPositive} alt="Auto Service Motors" className="h-10 md:h-12 w-auto" />
        <Button
          onClick={scrollToForm}
          className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-semibold rounded-full px-6 py-2.5 shadow-blue hover:shadow-blue-hover transition-all duration-300"
        >
          Diagnóstico Grátis
        </Button>
      </nav>

      <div className="container-landing pb-16 pt-10 md:pt-16 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-7">
            <span className="pill-badge bg-primary/10 text-primary">
              ⚡ Gestão inteligente de frotas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] text-foreground text-balance">
              Quanto da sua frota você está perdendo em custos que{" "}
              <span className="text-primary">ninguém te mostra?</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl">
              Gestores de empresas como Monsanto-Bayer, GSK e Vale estão cortando até 20% dos custos
              de manutenção enquanto mantêm 95% de disponibilidade — sem adicionar um funcionário sequer.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={scrollToForm}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-base uppercase tracking-wide px-8 py-6 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
              >
                Quero descobrir minha economia
              </Button>
              <Button
                onClick={scrollToForm}
                variant="outline"
                className="border-2 border-foreground/20 text-foreground font-semibold text-base px-8 py-6 rounded-full hover:bg-foreground/5 transition-all duration-300"
              >
                Saiba mais
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ✓ Diagnóstico gratuito em 20 minutos · ✓ Sem compromisso
            </p>
          </div>

          {/* Right Column - Dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="mt-20 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Confiança de milhões de clientes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="text-foreground/30 hover:text-foreground/60 text-base font-bold tracking-wide uppercase transition-colors duration-300 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
