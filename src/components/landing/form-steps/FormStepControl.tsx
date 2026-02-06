import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FormData } from "@/components/landing/DiagnosticFormSection";

interface Props {
  formData: FormData;
  onChange: (field: string, value: string) => void;
}

const FormStepControl = ({ formData, onChange }: Props) => (
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
        <RadioGroup className="flex gap-4" value={formData.monitoramento} onValueChange={(v) => onChange("monitoramento", v)}>
          {["Sim", "Não"].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 bg-muted rounded-xl px-5 py-3 cursor-pointer hover:bg-muted/80 transition-colors">
              <RadioGroupItem value={opt} id={`mon-${opt}`} />
              <span className="font-medium text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-3 block">Satisfação com o custo de operação *</Label>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-muted rounded-2xl p-5">
            <span className="text-sm font-semibold mb-2 block">Manutenção:</span>
            <RadioGroup className="flex gap-3" value={formData.custoManutencao} onValueChange={(v) => onChange("custoManutencao", v)}>
              {["Baixo", "Moderado", "Alto"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 cursor-pointer hover:shadow-soft transition-shadow">
                  <RadioGroupItem value={opt} id={`mnt-${opt}`} />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
          <div className="bg-muted rounded-2xl p-5">
            <span className="text-sm font-semibold mb-2 block">Controle de Multas:</span>
            <RadioGroup className="flex gap-3" value={formData.custoMultas} onValueChange={(v) => onChange("custoMultas", v)}>
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
);

export default FormStepControl;
