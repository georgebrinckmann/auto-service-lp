import { X } from "lucide-react";

const painPoints = [
  {
    title: "Planilhas soltas e retorno atrasado de oficinas",
    description: "Você só descobre o estrago quando o orçamento estoura.",
  },
  {
    title: "Manutenção não planejada comendo margem",
    description: "Um caminhão parado 2 dias a mais anula qualquer \"economia\" do contrato barato.",
  },
  {
    title: "Zero rastreabilidade documental",
    description: "Na auditoria, você não consegue provar conformidade e o compliance cai em cima.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-landing">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl mx-auto mb-12 text-balance leading-snug">
          Se você não sabe exatamente quanto cada veículo da sua frota custa por mês, você está sangrando dinheiro.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-5">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto italic">
          Enquanto isso, seus concorrentes já sabem exatamente onde cortar gordura sem perder um dia de operação.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
