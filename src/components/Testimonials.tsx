import { TESTIMONIALS, BUSINESS_INFO } from "../data";
import { Star, Quote, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const handleConsultation = () => {
    const defaultMsg = encodeURIComponent(`Hello ${BUSINESS_INFO.name}, I've read your incredible Ugandan business reviews and I would like to get high-converting digital solutions for my brand.`);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMsg}`, "_blank");
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Decorative center glow for testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#8b5cf6] font-extrabold mb-3">
            Real Impact Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Partnering With Active Ugandan Entrepreneurs
          </h3>
          <p className="text-slate-400 font-light leading-relaxed">
            See how {BUSINESS_INFO.name} has automated business inquiries, increased reservations, and delivered scalable digital platforms that operate perfectly on local networks.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-[2rem] p-6 md:p-8 backdrop-blur-md flex flex-col justify-between relative"
            >
              {/* Quote Mark Design Accent */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none" />

              <div>
                {/* Visual Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Main Quote text */}
                <p className="text-sm text-slate-300 font-light leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                <div>
                  <h5 className="font-display font-bold text-white text-sm">
                    {test.name}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {test.role}, <span className="text-blue-400 font-medium">{test.company}</span>
                  </p>
                </div>
                
                {/* Location Badge */}
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                  {test.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust Banner */}
        <div className="text-center bg-white/3 border border-white/8 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 max-w-4xl mx-auto shadow-lg">
          <h4 className="font-display font-bold text-xl text-white mb-2">
            Ready to be our next Uganda success story?
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-light mb-6 max-w-2xl mx-auto">
            Contact our engineering consultations team today to evaluate how we can build custom digital interfaces, landing sites, or messaging bots for your business.
          </p>
          <button
            onClick={handleConsultation}
            className="px-8 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center gap-2 cursor-pointer mx-auto hover:scale-[1.02] shadow-xl shadow-green-500/10 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
