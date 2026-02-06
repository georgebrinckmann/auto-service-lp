import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroDashboard from "@/assets/hero-dashboard.png";

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
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-landing relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left - FAQ */}
          <div>
            <span className="pill-badge bg-primary/10 text-primary mb-4">
              ❓ Dúvidas frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance leading-tight">
              Perguntas que gestores fazem{" "}
              <span className="text-primary">antes de agendar</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tire suas dúvidas antes de dar o próximo passo.
            </p>

            <Accordion type="single" collapsible className="space-y-3 mb-8">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border/60 rounded-2xl px-6 data-[state=open]:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button
              onClick={scrollToForm}
              className="bg-primary hover:bg-brand-blue-dark text-primary-foreground font-bold text-base uppercase tracking-wide px-8 py-6 rounded-full shadow-blue hover:shadow-blue-hover hover:-translate-y-1 transition-all duration-300"
            >
              Agendar agora
            </Button>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
              <img
                src={heroDashboard}
                alt="Dashboard Auto Service"
                className="relative rounded-3xl shadow-float max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
