const clientLogos = ["Monsanto-Bayer", "GSK", "Vale", "LOG-IN Logística"];

const FinalReinforcementSection = () => {
  return (
    <section className="py-12 md:py-16 bg-brand-gray-light">
      <div className="container-landing text-center">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-6">
          {clientLogos.map((name) => (
            <span
              key={name}
              className="text-muted-foreground text-sm md:text-base font-semibold tracking-wide uppercase"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground font-medium mb-2">
          Mais de 15 anos gerenciando frotas de empresas líderes.
        </p>
        <p className="text-lg font-bold text-foreground">
          Economia comprovada. Disponibilidade garantida. Controle total.
        </p>
      </div>
    </section>
  );
};

export default FinalReinforcementSection;
