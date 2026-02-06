import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FormData } from "@/components/landing/DiagnosticFormSection";

interface Props {
  formData: FormData;
  onChange: (field: string, value: string) => void;
}

const fleetSizes = [
  "Até 50 veículos", "De 51 a 200 veículos", "De 201 a 400 veículos",
  "De 401 a 800 veículos", "De 801 a 1200 veículos", "Acima de 1200 veículos",
];

const FormStepFleet = ({ formData, onChange }: Props) => (
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
        <Select value={formData.tamanhoFrota} onValueChange={(v) => onChange("tamanhoFrota", v)}>
          <SelectTrigger className="rounded-xl border-2 border-border py-3">
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
          <SelectContent>
            {fleetSizes.map((opt) => (
              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Tipo de Frota *</Label>
        <RadioGroup className="flex flex-wrap gap-4" value={formData.tipoFrota} onValueChange={(v) => onChange("tipoFrota", v)}>
          {["Locada", "Própria", "Mista"].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 bg-muted rounded-xl px-5 py-3 cursor-pointer hover:bg-muted/80 transition-colors">
              <RadioGroupItem value={opt} id={`tipo-${opt}`} />
              <span className="font-medium text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Tipo de operação da frota *</Label>
        <RadioGroup className="flex flex-wrap gap-4" value={formData.tipoOperacao} onValueChange={(v) => onChange("tipoOperacao", v)}>
          {["Leve", "Moderado", "Agressivo"].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 bg-muted rounded-xl px-5 py-3 cursor-pointer hover:bg-muted/80 transition-colors">
              <RadioGroupItem value={opt} id={`op-${opt}`} />
              <span className="font-medium text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  </div>
);

export default FormStepFleet;
