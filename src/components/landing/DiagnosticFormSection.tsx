import { useState } from "react";
import { Sparkles } from "lucide-react";
import FormStepContact from "@/components/landing/form-steps/FormStepContact";
import FormStepFleet from "@/components/landing/form-steps/FormStepFleet";
import FormStepControl from "@/components/landing/form-steps/FormStepControl";
import FormStepChallenges from "@/components/landing/form-steps/FormStepChallenges";
import FormThankYou from "@/components/landing/form-steps/FormThankYou";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export interface FormData {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
  tamanhoFrota: string;
  tipoFrota: string;
  tipoOperacao: string;
  monitoramento: string;
  custoManutencao: string;
  custoMultas: string;
  desafio: string;
  fretado: string;
}

const TOTAL_STEPS = 4;

const DiagnosticFormSection = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "", telefone: "", email: "", empresa: "",
    tamanhoFrota: "", tipoFrota: "", tipoOperacao: "",
    monitoramento: "", custoManutencao: "", custoMultas: "",
    desafio: "", fretado: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    setSubmitted(true);
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  if (submitted) {
    return (
      <section className="section-padding bg-background" id="diagnostico">
        <div className="container-landing max-w-2xl">
          <div className="bg-card rounded-3xl shadow-feature border border-border p-8 md:p-12">
            <FormThankYou />
          </div>
        </div>
      </section>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <FormStepContact formData={formData} onChange={handleChange} />;
      case 2:
        return <FormStepFleet formData={formData} onChange={handleChange} />;
      case 3:
        return <FormStepControl formData={formData} onChange={handleChange} />;
      case 4:
        return <FormStepChallenges formData={formData} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <section className="section-padding bg-background" id="diagnostico">
      <div className="container-landing max-w-3xl">
        <ScrollReveal>
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
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-feature border border-border">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-semibold text-muted-foreground mb-3">
                <span>Etapa {step} de {TOTAL_STEPS}</span>
                <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-3">
                {["Contato", "Frota", "Gestão", "Desafios"].map((label, i) => (
                  <span
                    key={label}
                    className={`text-xs font-semibold transition-colors ${
                      i + 1 <= step ? "text-primary" : "text-muted-foreground/50"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Step content */}
            <div className="min-h-[280px]">
              {renderStep()}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-muted-foreground font-semibold hover:text-foreground transition-colors px-6 py-3"
                >
                  ← Voltar
                </button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-bold px-8 py-3 rounded-full shadow-blue transition-all duration-300 hover:-translate-y-0.5"
                >
                  Avançar →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-brand-yellow hover:bg-brand-yellow-hover text-accent-foreground font-bold text-lg uppercase tracking-wide px-8 py-4 rounded-full shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300"
                >
                  Receber meu diagnóstico gratuito
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DiagnosticFormSection;
