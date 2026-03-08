const stats = [
  { value: "R$ 2Mi+", label: "Em economia gerada para clientes" },
  { value: "95%", label: "Disponibilidade da frota" },
  { value: "30+", label: "Anos de experiência" },
  { value: "70mil", label: "Veículos gerenciados" },
];

const StatsSection = () => {
  return (
    <section className="py-0">
      <div className="bg-stats-gradient py-14 md:py-16">
        <div className="container-landing">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
