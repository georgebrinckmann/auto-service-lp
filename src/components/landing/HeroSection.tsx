import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";
import heroDashboard from "@/assets/hero-dashboard.png";

const clientLogos = ["Monsanto-Bayer", "GSK", "Vale", "LOG-IN Logística"];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-brand-blue overflow-hidden">
      <div className="container-landing py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="text-primary-foreground space-y-6">
            <img src={logoWhite} alt="Auto Service Motors" className="h-10 md:h-12 w-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-balance">
              Quanto da sua frota você está perdendo em custos que ninguém te mostra?
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-xl">
              Gestores de empresas como Monsanto-Bayer, GSK e Vale estão cortando até 20% dos custos
              de manutenção enquanto mantêm 95% de disponibilidade — sem adicionar um funcionário sequer.
            </p>
            <div className="pt-2">
              <Button
                onClick={scrollToForm}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Quero descobrir minha economia
              </Button>
              <p className="text-sm opacity-70 mt-3">
                Diagnóstico gratuito em 20 minutos · Sem compromisso
              </p>
            </div>
          </div>

          {/* Right Column - Dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={heroDashboard}
              alt="Dashboard Auto Service em ação"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-10 border-t border-primary-foreground/20">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="text-primary-foreground/60 text-sm md:text-base font-semibold tracking-wide uppercase"
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
