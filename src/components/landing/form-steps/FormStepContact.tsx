import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormData } from "@/components/landing/DiagnosticFormSection";

interface Props {
  formData: FormData;
  onChange: (field: string, value: string) => void;
}

const fields = [
  { id: "nome", label: "Nome completo", type: "text" },
  { id: "telefone", label: "Telefone/WhatsApp", type: "tel" },
  { id: "email", label: "E-mail", type: "email" },
  { id: "empresa", label: "Empresa", type: "text" },
];

const FormStepContact = ({ formData, onChange }: Props) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">1</span>
      </div>
      <h3 className="text-lg font-bold">Dados de Contato</h3>
    </div>
    <div className="grid md:grid-cols-2 gap-5">
      {fields.map((field) => (
        <div key={field.id}>
          <Label htmlFor={field.id} className="text-sm font-semibold mb-1.5 block">
            {field.label} *
          </Label>
          <Input
            id={field.id}
            type={field.type}
            required
            value={formData[field.id as keyof FormData]}
            onChange={(e) => onChange(field.id, e.target.value)}
            className="rounded-xl border-2 border-border focus:border-primary py-3 transition-colors"
          />
        </div>
      ))}
    </div>
  </div>
);

export default FormStepContact;
