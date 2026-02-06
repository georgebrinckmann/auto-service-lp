import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FormData } from "@/components/landing/DiagnosticFormSection";

interface Props {
  formData: FormData;
  onChange: (field: string, value: string) => void;
}

const FormStepChallenges = ({ formData, onChange }: Props) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">4</span>
      </div>
      <h3 className="text-lg font-bold">Desafios e Necessidades</h3>
    </div>
    <div className="space-y-6">
      <div>
        <Label htmlFor="desafio" className="text-sm font-semibold mb-1.5 block">
          Principal desafio na operação
        </Label>
        <Textarea
          id="desafio"
          placeholder="Conte-nos um pouco sobre suas dores hoje..."
          className="rounded-xl border-2 border-border focus:border-primary min-h-[100px] transition-colors"
          value={formData.desafio}
          onChange={(e) => onChange("desafio", e.target.value)}
        />
      </div>
      <div>
        <Label className="text-sm font-semibold mb-2 block">
          Demanda de transporte fretado de colaboradores? *
        </Label>
        <RadioGroup className="flex gap-4" value={formData.fretado} onValueChange={(v) => onChange("fretado", v)}>
          {["Sim", "Não"].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 bg-muted rounded-xl px-5 py-3 cursor-pointer hover:bg-muted/80 transition-colors">
              <RadioGroupItem value={opt} id={`fret-${opt}`} />
              <span className="font-medium text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  </div>
);

export default FormStepChallenges;
