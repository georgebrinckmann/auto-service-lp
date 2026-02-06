import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Sparkles } from "lucide-react";

const ThankYou = () => (
  <div className="text-center py-16 px-6">
    <div className="w-24 h-24 rounded-full bg-brand-success-light flex items-center justify-center mx-auto mb-8">
      <Check className="w-12 h-12 text-brand-success" />
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Obrigado pelas respostas!</h2>
    <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
      Um especialista da Auto Service entrará em contato em até 24 horas úteis para entregar seu diagnóstico personalizado com:
    </p>
    <div className="space-y-4 text-left max-w-md mx-auto mb-10">
      {[
        "Projeção de economia por área (multas, manutenção, locação)",
        "Comparativo com empresas do seu setor",
        "Plano de ação em 3 passos para começar a economizar",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3 bg-brand-success-light rounded-xl p-4">
          <Check className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
          <span className="font-medium">{item}</span>
        </div>
      ))}
    </div>
    <p className="text-muted-foreground mb-10">Fique de olho no seu WhatsApp e e-mail. 📱</p>
    <Button className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-bold uppercase tracking-wide px-8 py-6 rounded-full shadow-blue">
      Baixar guia: 5 custos ocultos em frotas
    </Button>
  </div>
);

const DiagnosticFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "", telefone: "", email: "", empresa: "",
    tamanhoFrota: "", tipoFrota: "", tipoOperacao: "",
    monitoramento: "", custoManutencao: "", custoMultas: "",
    desafio: "", fretado: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="diagnostico">
        <div className="container-landing max-w-2xl">
          <div className="bg-card rounded-3xl shadow-feature border border-border p-8 md:p-12">
            <ThankYou />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background" id="diagnostico">
      <div className="container-landing max-w-3xl">
        <div className="text-center mb-10">
          <span className="pill-badge bg-brand-yellow-light text-brand-yellow-hover mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Diagnóstico gratuito
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-balance leading-tight">
            Descubra quanto você pode{" "}
            <span className="text-primary">economizar</span> na gestão da sua frota
          </h2>
          <p className="text-muted-foreground text-lg mb-5 max-w-2xl mx-auto">
            Se você deseja economizar até 20% e ter disponibilidade de até 95% da frota ativa, responda o questionário abaixo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Multas", "Manutenção Preventiva", "Manutenção Corretiva", "Locação vs. Frota Própria"].map((item) => (
              <span key={item} className="bg-brand-success-light text-brand-success text-sm font-semibold px-4 py-1.5 rounded-full">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-feature border border-border space-y-10">
          {/* DADOS DE CONTATO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <h3 className="text-lg font-bold">Dados de Contato</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { id: "nome", label: "Nome completo", type: "text" },
                { id: "telefone", label: "Telefone/WhatsApp", type: "tel" },
                { id: "email", label: "E-mail", type: "email" },
                { id: "empresa", label: "Empresa", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <Label htmlFor={field.id} className="text-sm font-semibold mb-1.5 block">{field.label} *</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="rounded-xl border-2 border-border focus:border-primary py-3 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* PERFIL DA FROTA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <h3 className="text-lg font-bold">Perfil da Frota</h3>
            </div>
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-semibold mb-1.5 block">Tamanho da Frota *</Label>
                <Select required onValueChange={(v) => handleChange("tamanhoFrota", v)}>
                  <SelectTrigger className="rounded-xl border-2 border-border py-3"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    {["Até 50 veículos", "De 51 a 200 veículos", "De 201 a 400 veículos", "De 401 a 800 veículos", "De 801 a 1200 veículos", "Acima de 1200 veículos"].map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-semibold mb-2 block">Tipo de Frota *</Label>
                <RadioGroup className="flex flex-wrap gap-4" onValueChange={(v) => handleChange("tipoFrota", v)}>
                  {["Locada", "Própria", "Mista"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 bg-brand-gray-light rounded-xl px-5 py-3 cursor-pointer hover:bg-muted transition-colors">
                      <RadioGroupItem value={opt} id={`tipo-${opt}`} />
                      <span className="font-medium text-sm">{opt}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-semibold mb-2 block">Tipo de operação da frota *</Label>
                <RadioGroup className="flex flex-wrap gap-4" onValueChange={(v) => handleChange("tipoOperacao", v)}>
                  {["Leve", "Moderado", "Agressivo"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 bg-brand-gray-light rounded-xl px-5 py-3 cursor-pointer hover:bg-muted transition-colors">
                      <RadioGroupItem value={opt} id={`op-${opt}`} />
                      <span className="font-medium text-sm">{opt}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* CONTROLE E GESTÃO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <h3 className="text-lg font-bold">Controle e Gestão Atual</h3>
            </div>
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-semibold mb-2 block">Possui monitoramento da frota? *</Label>
                <RadioGroup className="flex gap-4" onValueChange={(v) => handleChange("monitoramento", v)}>
                  {["Sim", "Não"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 bg-brand-gray-light rounded-xl px-5 py-3 cursor-pointer hover:bg-muted transition-colors">
                      <RadioGroupItem value={opt} id={`mon-${opt}`} />
                      <span className="font-medium text-sm">{opt}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-semibold mb-3 block">Satisfação com o custo de operação *</Label>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-brand-gray-light rounded-2xl p-5">
                    <span className="text-sm font-semibold mb-2 block">Manutenção:</span>
                    <RadioGroup className="flex gap-3" onValueChange={(v) => handleChange("custoManutencao", v)}>
                      {["Baixo", "Moderado", "Alto"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 cursor-pointer hover:shadow-soft transition-shadow">
                          <RadioGroupItem value={opt} id={`mnt-${opt}`} />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="bg-brand-gray-light rounded-2xl p-5">
                    <span className="text-sm font-semibold mb-2 block">Controle de Multas:</span>
                    <RadioGroup className="flex gap-3" onValueChange={(v) => handleChange("custoMultas", v)}>
                      {["Baixo", "Moderado", "Alto"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 cursor-pointer hover:shadow-soft transition-shadow">
                          <RadioGroupItem value={opt} id={`mul-${opt}`} />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESAFIOS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">4</span>
              </div>
              <h3 className="text-lg font-bold">Desafios e Necessidades</h3>
            </div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="desafio" className="text-sm font-semibold mb-1.5 block">Principal desafio na operação</Label>
                <Textarea
                  id="desafio"
                  placeholder="Conte-nos um pouco sobre suas dores hoje..."
                  className="rounded-xl border-2 border-border focus:border-primary min-h-[100px] transition-colors"
                  value={formData.desafio}
                  onChange={(e) => handleChange("desafio", e.target.value)}
                />
              </div>
              <div>
                <Label className="text-sm font-semibold mb-2 block">Demanda de transporte fretado de colaboradores? *</Label>
                <RadioGroup className="flex gap-4" onValueChange={(v) => handleChange("fretado", v)}>
                  {["Sim", "Não"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 bg-brand-gray-light rounded-xl px-5 py-3 cursor-pointer hover:bg-muted transition-colors">
                      <RadioGroupItem value={opt} id={`fret-${opt}`} />
                      <span className="font-medium text-sm">{opt}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-lg uppercase tracking-wide py-7 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
          >
            Receber meu diagnóstico gratuito
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DiagnosticFormSection;
