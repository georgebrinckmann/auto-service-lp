import logoFooter from "@/assets/logo-footer.png";
import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-[100px] rounded-full" />

      <div className="container-landing py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Logo */}
          <div>
            <img src={logoFooter} alt="Auto Service Motors" className="h-10 w-auto mb-5" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Gestão inteligente de frotas corporativas há mais de 15 anos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-primary-foreground/70">Navegação</h4>
            <ul className="space-y-3">
              {["Integração", "Por que escolher", "FAQ", "Cancelamento"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-primary-foreground/70">Legal</h4>
            <ul className="space-y-3">
              {["Política de Privacidade", "Termos e Condições"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-primary-foreground/70">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/50 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contato@autoservicemotors.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (31) 3333-0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Belo Horizonte, MG
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/30 text-sm">
            © 2025 Auto Service Motors | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
