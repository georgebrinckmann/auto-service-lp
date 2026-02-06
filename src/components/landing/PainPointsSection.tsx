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
        <div className="text-center mb-14">
          <span className="pill-badge bg-destructive/10 text-destructive mb-4">
            ⚠️ Problemas comuns
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold max-w-4xl mx-auto text-balance leading-tight">
            Se você não sabe exatamente quanto cada veículo da sua frota custa por mês,{" "}
            <span className="text-destructive">você está sangrando dinheiro.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-destructive/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/15 transition-colors">
                <X className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
          Enquanto isso, seus concorrentes já sabem exatamente onde cortar gordura sem perder um dia de operação.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
