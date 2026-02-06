import logoFooter from "@/assets/logo-footer.png";

const FooterSection = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="container-landing py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div>
            <img src={logoFooter} alt="Auto Service Motors" className="h-10 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Gestão inteligente de frotas corporativas há mais de 15 anos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Navegação</h4>
            <ul className="space-y-2">
              {["Integração", "Por que escolher", "FAQ", "Cancelamento"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Legal</h4>
            <ul className="space-y-2">
              {["Política de Privacidade", "Termos e Condições"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>contato@autoservicemotors.com.br</li>
              <li>(31) 3333-0000</li>
              <li>Belo Horizonte, MG</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 Auto Service Motors | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
