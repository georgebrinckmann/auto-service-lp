const DashboardMockup = () => (
  <div className="w-full max-w-lg rounded-3xl bg-primary p-6 shadow-float">
    {/* Title bar */}
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-primary-foreground font-bold text-lg">Dashboard Auto Service</h3>
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-brand-yellow" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>
    </div>

    {/* Main stat card */}
    <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-2xl p-5 mb-4">
      <p className="text-primary-foreground/70 text-sm font-medium mb-1">Economia Total</p>
      <p className="text-primary-foreground text-4xl md:text-5xl font-extrabold tracking-tight">
        R$ 847.520
      </p>
    </div>

    {/* Two smaller stat cards */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-2xl p-4">
        <p className="text-primary-foreground/70 text-xs font-medium mb-1">Disponibilidade</p>
        <p className="text-primary-foreground text-2xl md:text-3xl font-bold">95.2%</p>
      </div>
      <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-2xl p-4">
        <p className="text-primary-foreground/70 text-xs font-medium mb-1">Veículos Ativos</p>
        <p className="text-primary-foreground text-2xl md:text-3xl font-bold">1.247</p>
      </div>
    </div>
  </div>
);

export default DashboardMockup;
