import { useState } from "react";
import { SERVICES, BUSINESS_INFO } from "../data";
import { Globe, Smartphone, MessageSquare, MapPin, Check, Calculator, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

// Helper to map icon names from string to actual Lucide component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Globe":
      return <Globe className="w-6 h-6" />;
    case "Smartphone":
      return <Smartphone className="w-6 h-6" />;
    case "MessageSquare":
      return <MessageSquare className="w-6 h-6" />;
    case "MapPin":
      return <MapPin className="w-6 h-6" />;
    default:
      return <Globe className="w-6 h-6" />;
  }
};

export default function Services() {
  // Calculator States
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [addonPayments, setAddonPayments] = useState(false);
  const [addonDashboard, setAddonDashboard] = useState(false);
  const [addonSEO, setAddonSEO] = useState(false);
  const [addonSupport, setAddonSupport] = useState(false);

  // Calculate prices based on options
  const getCalculatorTotal = () => {
    let basePrice = 950000;
    if (selectedService === "mobile-apps") basePrice = 2500000;
    if (selectedService === "wa-bot") basePrice = 600000;
    if (selectedService === "seo-maps") basePrice = 450000;

    let total = basePrice;
    if (addonPayments) total += 400000;
    if (addonDashboard) total += 600000;
    if (addonSEO) total += 350000;
    if (addonSupport) total += 250000;

    return total;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UGX",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleWhatsAppQuote = () => {
    const serviceObj = SERVICES.find((s) => s.id === selectedService);
    const serviceName = serviceObj ? serviceObj.title : "Custom Developer Project";

    const addons = [];
    if (addonPayments) addons.push("MTN/Airtel Payments (UGX 400,000)");
    if (addonDashboard) addons.push("Admin Dashboard Portal (UGX 600,000)");
    if (addonSEO) addons.push("Google Analytics & Search SEO (UGX 350,000)");
    if (addonSupport) addons.push("12-Months Local Priority Support (UGX 250,000)");

    const totalStr = formatCurrency(getCalculatorTotal());

    const message = `Hello ${BUSINESS_INFO.name}! 👋 I have built a custom digital project estimate using your interactive web calculator:
    
💻 *Service Base:* ${serviceName}
➕ *Chosen Upgrades:* ${addons.length > 0 ? addons.join(", ") : "None"}
📊 *Total Estimated Quote:* ${totalStr}

I would like to discuss launching this project with you!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative center glow for services section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#3b82f6] font-extrabold mb-3">
            Our Solutions Ecosystem
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Premium Engineering Built for Immediate Results
          </h3>
          <p className="text-slate-400 font-light leading-relaxed">
            We deliver tailored technological architecture tailored with specific local market parameters for Ugandan retail, tourism, medical, education, and finance sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-[2rem] p-6 md:p-8 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent(service.iconName)}
                </div>

                {/* Card Title & Starting Price */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="font-display font-bold text-xl text-white">
                    {service.title}
                  </h4>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block tracking-tight">
                      Starting At
                    </span>
                    <span className="text-sm font-mono font-bold text-blue-400">
                      {service.priceStart}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Bullet Checklist */}
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <button
                onClick={() => {
                  setSelectedService(service.id);
                  const calcElement = document.getElementById("calculator");
                  if (calcElement) calcElement.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3.5 rounded-xl border border-white/5 bg-white/3 hover:bg-white/10 hover:border-white/15 text-center text-xs font-semibold text-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Customize This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Interactive Estimate Calculator */}
        <div id="calculator" className="scroll-mt-24">
          <div className="bg-white/4 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Ambient glows inside calculator */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Calculator Left: Selection */}
              <div className="lg:col-span-12 xl:col-span-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                    {BUSINESS_INFO.name} Interactive Estimator
                  </span>
                </div>
                <h4 className="text-2xl sm:text-4xl font-display font-medium text-white mb-6">
                  Estimate Your Tech Budget Instantly
                </h4>
                
                {/* Selection 1: Core Service */}
                <div className="mb-6">
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
                    1. Choose Core Platform Type:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((serv) => (
                      <button
                        key={serv.id}
                        type="button"
                        onClick={() => setSelectedService(serv.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedService === serv.id
                            ? "border-blue-500 bg-blue-500/15 text-white"
                            : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="font-semibold text-xs mb-0.5">{serv.title}</div>
                        <div className="text-[10px] font-mono text-slate-500">Base: {serv.priceStart}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selection 2: Custom Addons/Upgrades */}
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
                    2. Optional Project Add-ons (UGX):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Checkbox A */}
                    <button
                      type="button"
                      onClick={() => setAddonPayments(!addonPayments)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        addonPayments
                          ? "border-purple-500 bg-purple-500/15 text-white"
                          : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-semibold text-xs truncate">Mobile Money Merchant APIs</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">MTN / Airtel Automated</div>
                      </div>
                      <span className="text-xs font-semibold text-purple-400 font-mono shrink-0 ml-3">+400K</span>
                    </button>

                    {/* Checkbox B */}
                    <button
                      type="button"
                      onClick={() => setAddonDashboard(!addonDashboard)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        addonDashboard
                          ? "border-purple-500 bg-purple-500/15 text-white"
                          : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-semibold text-xs truncate">Client Admin Backoffice Dashboard</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">Manage orders, items, reports</div>
                      </div>
                      <span className="text-xs font-semibold text-purple-400 font-mono shrink-0 ml-3">+600K</span>
                    </button>

                    {/* Checkbox C */}
                    <button
                      type="button"
                      onClick={() => setAddonSEO(!addonSEO)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        addonSEO
                          ? "border-purple-500 bg-purple-500/15 text-white"
                          : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-semibold text-xs truncate">Search Engine & Analytics Setup</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">Google Analytics integrations</div>
                      </div>
                      <span className="text-xs font-semibold text-purple-400 font-mono shrink-0 ml-3">+350K</span>
                    </button>

                    {/* Checkbox D */}
                    <button
                      type="button"
                      onClick={() => setAddonSupport(!addonSupport)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        addonSupport
                          ? "border-purple-500 bg-purple-500/15 text-white"
                          : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="font-semibold text-xs truncate">1-Year Dedicated Priority Support</div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">Security upgrades, backup support</div>
                      </div>
                      <span className="text-xs font-semibold text-purple-400 font-mono shrink-0 ml-3">+250K</span>
                    </button>

                  </div>
                </div>

              </div>

              {/* Calculator Right: Output Receipt card */}
              <div className="lg:col-span-12 xl:col-span-5">
                <div className="bg-white/4 border border-white/8 p-6 rounded-3xl relative shadow-inner">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Selected Solution Scope</span>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">ESTIMATE READY</span>
                  </div>

                  {/* Summary lists */}
                  <div className="space-y-3 mb-6 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Selected Type:</span>
                      <span className="text-white font-medium">
                        {SERVICES.find((s) => s.id === selectedService)?.title}
                      </span>
                    </div>

                    <div className="border-t border-white/5 pt-3">
                      <span className="text-slate-500 block text-[10px] mb-2 uppercase tracking-tight">Active Customizations:</span>
                      <ul className="space-y-1.5 pl-2 text-slate-300">
                        {addonPayments && (
                          <li className="flex justify-between text-slate-300">
                            <span>• Merchant Payments Code</span>
                            <span className="text-white">UGX 400,000</span>
                          </li>
                        )}
                        {addonDashboard && (
                          <li className="flex justify-between text-slate-300">
                            <span>• Admin Dashboard Portal</span>
                            <span className="text-white">UGX 600,000</span>
                          </li>
                        )}
                        {addonSEO && (
                          <li className="flex justify-between text-slate-300">
                            <span>• Google Analytics & SEO</span>
                            <span className="text-white">UGX 350,000</span>
                          </li>
                        )}
                        {addonSupport && (
                          <li className="flex justify-between text-slate-300">
                            <span>• 12M Priority Support</span>
                            <span className="text-white">UGX 250,000</span>
                          </li>
                        )}
                        {!addonPayments && !addonDashboard && !addonSEO && !addonSupport && (
                          <li className="text-slate-500 italic text-[11px]">- Select upgrades on details panel to add functionality</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Final Total Pricing */}
                  <div className="bg-black/30 p-4 border border-white/5 rounded-2xl mb-6">
                    <div className="text-xs uppercase font-mono text-slate-500 tracking-wider text-center mb-1">
                      Estimated Project Cost
                    </div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-center text-blue-400 tracking-tight">
                      {formatCurrency(getCalculatorTotal())}
                    </div>
                  </div>

                  {/* WhatsApp quotation CTA */}
                  <button
                    id="calculator-cta-whatsapp"
                    onClick={handleWhatsAppQuote}
                    className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] shadow-xl shadow-green-500/10 cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-100" />
                    <span>Send Quote via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-slate-500 font-mono text-center mt-3">
                    Est. timeline: {selectedService === "mobile-apps" ? "4-6 weeks" : "2-3 weeks"}. Final pricing based on custom spec.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
