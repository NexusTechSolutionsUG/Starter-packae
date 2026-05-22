import { TRUST_SIGNALS, BUSINESS_INFO } from "../data";
import { Wallet, Zap, Share2, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const getTrustIcon = (iconName: string) => {
  switch (iconName) {
    case "Wallet":
      return <Wallet className="w-5 h-5" />;
    case "Zap":
      return <Zap className="w-5 h-5" />;
    case "Share2":
      return <Share2 className="w-5 h-5" />;
    case "Users":
      return <Users className="w-5 h-5" />;
    default:
      return <Zap className="w-5 h-5" />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Visual Ambient Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Why Choose Us Left: Text Pitch */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#8b5cf6] font-extrabold mb-3">
              Elite Engineering Quality
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
              Why Premier Brands Partner With {BUSINESS_INFO.name}
            </h3>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              We don't build standard generic templates. We compile bulletproof code, responsive assets, and tailored automation tailored specifically for the unique environment of East African business networks.
            </p>
            <p className="text-slate-400 font-light leading-relaxed mb-8">
              Whether matching heavy mobile money volumes, supporting low-end devices, or securing search presence on Uganda's hyper-competitive local search spaces, we provide local expertise with world-class design standards.
            </p>

            {/* Micro Rating */}
            <div className="p-4 bg-white/4 border border-white/10 backdrop-blur-md rounded-2xl inline-flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <div className="text-xs text-slate-300 font-mono">
                Trusted by <span className="text-white font-bold font-sans">50+ local agencies</span> and brands
              </div>
            </div>
          </div>

          {/* Why Choose Us Right: Bento Trust Signals Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRUST_SIGNALS.map((signal, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-[2rem] p-6 md:p-8 backdrop-blur-md"
                >
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-purple-400 flex items-center justify-center mb-5">
                    {getTrustIcon(signal.iconName)}
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-2.5">
                    {signal.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
