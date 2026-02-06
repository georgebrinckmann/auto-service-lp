import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso funciona para frotas do meu tamanho?",
    answer: "Trabalhamos com frotas de todos os portes. Se você tem uma operação com veículos próprios ou terceirizados, há economia possível. Ponto.",
  },
  {
    question: "Vou ter que trocar tudo que já uso hoje?",
    answer: "Não. Integramos com seus sistemas atuais ou substituímos gradualmente. Você não para a operação para ganhar controle.",
  },
  {
    question: "Quanto custa isso?",
    answer: "O diagnóstico é gratuito. Se avançarmos, o investimento se paga com a economia gerada — geralmente em 6-9 meses. Mas você só descobre os números reais na conversa.",
  },
];

const FAQSection = () => {
  const scrollToForm = () => {
    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-landing max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-balance">
          Perguntas que gestores fazem antes de agendar:
        </h2>

        <Accordion type="single" collapsible className="space-y-3 mb-10">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-lg font-semibold py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button
            onClick={scrollToForm}
            className="bg-brand-blue-dark hover:bg-primary text-primary-foreground font-semibold text-base uppercase tracking-wide px-8 py-6 rounded-xl shadow-blue hover:shadow-blue-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Agendar agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
