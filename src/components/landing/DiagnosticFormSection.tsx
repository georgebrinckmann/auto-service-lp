import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

const ThankYou = () => (
  <div className="text-center py-12 px-6">
    <div className="w-20 h-20 rounded-full bg-brand-success-light flex items-center justify-center mx-auto mb-6">
      <Check className="w-10 h-10 text-brand-success" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Obrigado pelas respostas!</h2>
    <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
      Um especialista da Auto Service entrará em contato em até 24 horas úteis para entregar seu diagnóstico personalizado com:
    </p>
    <div className="space-y-3 text-left max-w-md mx-auto mb-8">
      {[
        "Projeção de economia por área (multas, manutenção, locação)",
        "Comparativo com empresas do seu setor",
        "Plano de ação em 3 passos para começar a economizar",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <p className="text-muted-foreground mb-8">Fique de olho no seu WhatsApp e e-mail.</p>
    <Button className="bg-brand-blue-dark hover:bg-primary text-primary-foreground font-semibold uppercase tracking-wide px-8 py-6 rounded-xl">
      Baixar guia: 5 custos ocultos em frotas
    </Button>
  </div>
);

const DiagnosticFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    tamanhoFrota: "",
    tipoFrota: "",
    tipoOperacao: "",
    monitoramento: "",
    custoManutencao: "",
    custoMultas: "",
    desafio: "",
    fretado: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-brand-gray-light" id="diagnostico">
        <div className="container-landing max-w-2xl">
          <ThankYou />
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-brand-gray-light" id="diagnostico">
      <div className="container-landing max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Descubra quanto você pode economizar na gestão da sua frota
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Se você deseja economizar até 20% na gestão de frota e ter disponibilidade de até 95% da
            frota ativa, responda o questionário abaixo.
          </p>
          <p className="text-sm text-muted-foreground">
            Vamos entregar um diagnóstico personalizado de quanto você pode economizar em:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {["Multas", "Manutenção Preventiva", "Manutenção Corretiva", "Locação vs. Frota Própria"].map((item) => (
              <span key={item} className="bg-brand-success-light text-brand-success text-sm font-semibold px-3 py-1 rounded-md">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-10 shadow-feature border border-border space-y-8">
          {/* DADOS DE CONTATO */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-3 border-b border-border">Dados de Contato</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" required value={formData.nome} onChange={(e) => handleChange("nome", e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input id="telefone" type="tel" required value={formData.telefone} onChange={(e) => handleChange("telefone", e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="empresa">Empresa *</Label>
                <Input id="empresa" required value={formData.empresa} onChange={(e) => handleChange("empresa", e.target.value)} className="mt-1.5" />
              </div>
            </div>
          </div>

          {/* PERFIL DA FROTA */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-3 border-b border-border">Perfil da Frota</h3>
            <div className="space-y-5">
              <div>
                <Label>Tamanho da Frota *</Label>
                <Select required onValueChange={(v) => handleChange("tamanhoFrota", v)}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    {["Até 50 veículos", "De 51 a 200 veículos", "De 201 a 400 veículos", "De 401 a 800 veículos", "De 801 a 1200 veículos", "Acima de 1200 veículos"].map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tipo de Frota *</Label>
                <RadioGroup className="flex gap-6 mt-2" onValueChange={(v) => handleChange("tipoFrota", v)}>
                  {["Locada", "Própria", "Mista"].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <RadioGroupItem value={opt} id={`tipo-${opt}`} />
                      <Label htmlFor={`tipo-${opt}`} className="font-normal cursor-pointer">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label>Como você classifica o tipo de operação da sua frota? *</Label>
                <RadioGroup className="flex gap-6 mt-2" onValueChange={(v) => handleChange("tipoOperacao", v)}>
                  {["Leve", "Moderado", "Agressivo"].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <RadioGroupItem value={opt} id={`op-${opt}`} />
                      <Label htmlFor={`op-${opt}`} className="font-normal cursor-pointer">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* CONTROLE E GESTÃO */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-3 border-b border-border">Controle e Gestão Atual</h3>
            <div className="space-y-5">
              <div>
                <Label>Você possui monitoramento da sua frota? *</Label>
                <RadioGroup className="flex gap-6 mt-2" onValueChange={(v) => handleChange("monitoramento", v)}>
                  {["Sim", "Não"].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <RadioGroupItem value={opt} id={`mon-${opt}`} />
                      <Label htmlFor={`mon-${opt}`} className="font-normal cursor-pointer">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">Você está satisfeito com o custo de operação da sua frota? *</Label>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Manutenção:</span>
                    <RadioGroup className="flex gap-6 mt-1" onValueChange={(v) => handleChange("custoManutencao", v)}>
                      {["Baixo", "Moderado", "Alto"].map((opt) => (
                        <div key={opt} className="flex items-center gap-2">
                          <RadioGroupItem value={opt} id={`mnt-${opt}`} />
                          <Label htmlFor={`mnt-${opt}`} className="font-normal cursor-pointer text-sm">{opt}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Controle de Multas:</span>
                    <RadioGroup className="flex gap-6 mt-1" onValueChange={(v) => handleChange("custoMultas", v)}>
                      {["Baixo", "Moderado", "Alto"].map((opt) => (
                        <div key={opt} className="flex items-center gap-2">
                          <RadioGroupItem value={opt} id={`mul-${opt}`} />
                          <Label htmlFor={`mul-${opt}`} className="font-normal cursor-pointer text-sm">{opt}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESAFIOS */}
          <div>
            <h3 className="text-lg font-bold mb-5 pb-3 border-b border-border">Desafios e Necessidades</h3>
            <div className="space-y-5">
              <div>
                <Label htmlFor="desafio">Qual é o principal desafio na sua operação?</Label>
                <Textarea
                  id="desafio"
                  placeholder="Conte-nos um pouco sobre suas dores hoje"
                  className="mt-1.5 min-h-[100px]"
                  value={formData.desafio}
                  onChange={(e) => handleChange("desafio", e.target.value)}
                />
              </div>
              <div>
                <Label>Sua empresa possui demanda de transporte fretado de colaboradores? *</Label>
                <RadioGroup className="flex gap-6 mt-2" onValueChange={(v) => handleChange("fretado", v)}>
                  {["Sim", "Não"].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <RadioGroupItem value={opt} id={`fret-${opt}`} />
                      <Label htmlFor={`fret-${opt}`} className="font-normal cursor-pointer">{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-semibold text-lg uppercase tracking-wide py-7 rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Receber meu diagnóstico gratuito
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DiagnosticFormSection;
