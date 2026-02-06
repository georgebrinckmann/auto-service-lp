import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormThankYou = () => (
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

export default FormThankYou;
