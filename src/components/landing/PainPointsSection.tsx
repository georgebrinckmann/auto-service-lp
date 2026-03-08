import { X } from "lucide-react";

const painPoints = [
  {
    title: "Planilhas soltas e retorno atrasado de oficinas",
    description: "Você só descobre o estrago quando o orçamento estoura — e não tem como justificar os números para a diretoria.",
  },
  {
    title: "Manutenção não planejada comendo margem",
    description: "Um caminhão parado 2 dias a mais anula qualquer \"economia\" do contrato barato. E quem leva a culpa é o gestor.",
  },
  {
    title: "Zero rastreabilidade documental",
    description: "Na auditoria, você não consegue provar conformidade e o compliance cai em cima — mesmo fazendo tudo certo no dia a dia.",
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
            Você faz a gestão da frota no dia a dia, mas não tem as ferramentas certas para{" "}
            <span className="text-destructive">provar o impacto do seu trabalho.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-5">
            Sem dados consolidados e controle centralizado, fica impossível mostrar para a diretoria os resultados que você já entrega. Nossa solução não substitui o gestor — ela potencializa o seu trabalho e dá visibilidade ao que você já faz.
          </p>
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

        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Enquanto isso, seus concorrentes já contam com plataformas inteligentes que mostram exatamente onde cortar custos, otimizar rotas e reduzir ociosidade — sem perder um único dia de operação. Eles já estão apresentando resultados concretos para a diretoria. <span className="font-semibold text-foreground">E você?</span>
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
