import { useState, ChangeEvent, FormEvent } from "react";
import { BUSINESS_INFO, SERVICES } from "../data";
import { MessageSquare, Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    serviceNeeded: SERVICES[0].title,
    message: "",
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setButtonLoading(true);

    // Format message text for WhatsApp API
    const textMessage = `Hello ${BUSINESS_INFO.name}! 👋
    
My name is *${formData.name}* ${formData.businessName ? `from *${formData.businessName}*` : ""}.

I am interested in: *${formData.serviceNeeded}*
Message: "${formData.message}"

Please get back to me to discuss options!`;

    // Wait a brief simulated moment to make it look professional
    setTimeout(() => {
      setButtonLoading(false);
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(textMessage)}`, "_blank");
    }, 450);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=Web Inquiry for ${BUSINESS_INFO.name}`;
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${BUSINESS_INFO.whatsappNumber}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative center halo for contact */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[130px] -z-10 animate-pulse duration-5000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-extrabold mb-3">
            Contact {BUSINESS_INFO.name}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Let's Accelerate Your Success
          </h3>
          <p className="text-slate-400 font-light leading-relaxed">
            Fill out our active dynamic WhatsApp planner or reach out directly to check availability for physical boardroom brainstorming sessions.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Column: Direct info panels */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="space-y-6">
              <h4 className="font-display font-bold text-xl text-white">Direct Connect Info</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Connect directly with our local engineering consultants. We typically answer within 15 minutes during standard Kampala business hours.
              </p>

              <div className="space-y-4">
                {/* Channel 1: WhatsApp Helpline */}
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-white/4 border border-white/8 hover:border-white/15 hover:bg-white/10 p-4 rounded-xl flex items-center gap-4 transition-all text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block tracking-tight">Chat with Engineers</span>
                    <span className="text-sm font-semibold text-white font-mono">{BUSINESS_INFO.whatsappDisplay}</span>
                  </div>
                </button>

                {/* Channel 2: Telephone Hotlines */}
                <button
                  onClick={handlePhoneCall}
                  className="w-full bg-white/4 border border-white/8 hover:border-white/15 hover:bg-white/10 p-4 rounded-xl flex items-center gap-4 transition-all text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block tracking-tight">Call Helpline</span>
                    <span className="text-sm font-semibold text-white font-mono">{BUSINESS_INFO.phoneDisplay}</span>
                  </div>
                </button>

                {/* Channel 3: Email Address */}
                <button
                  onClick={handleEmailClick}
                  className="w-full bg-white/4 border border-white/8 hover:border-white/15 hover:bg-white/10 p-4 rounded-xl flex items-center gap-4 transition-all text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block tracking-tight">Main Digital Inbox</span>
                    <span className="text-sm font-semibold text-white font-mono">{BUSINESS_INFO.email}</span>
                  </div>
                </button>

                {/* Channel 4: Kampala HQ physical address */}
                <div className="bg-white/4 border border-white/8 p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block tracking-tight">Our Kampala Boardroom</span>
                    <span className="text-xs text-white leading-relaxed">{BUSINESS_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support working hours message */}
            <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
              <span className="text-[10px] font-mono font-bold text-blue-400 block uppercase mb-1">Live Response Guarantee</span>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                Active service support is available Mondays through Saturdays from 08:00 AM to 06:00 PM East African Time. Rapid response deployment is active for mission-critical client servers.
              </p>
            </div>

          </div>

          {/* Right Column: Direct dynamic WhatsApp Inquiry Planner */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white/4 border border-white/10 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 relative">
            
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Pre-filled Messaging Auto-compiler
            </span>

            <h4 className="font-display font-bold text-white text-lg mb-4">
              Launch Your Web Planner Request
            </h4>
            <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
              Select your service segment and submit the card. The planner converts your answers into an organized, instant chat message template so we can start planning immediately.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field: Full Name */}
                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Ronald Ssubi"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-xs rounded-xl p-3.5 text-white transition-all outline-none"
                  />
                </div>

                {/* Field: Business Title */}
                <div>
                  <label htmlFor="businessName" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Business Name (Optional)</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    placeholder="e.g. Victoria Safaris"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-xs rounded-xl p-3.5 text-white transition-all outline-none"
                  />
                </div>
              </div>

              {/* Field: Service selector */}
              <div>
                <label htmlFor="serviceNeeded" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Platform Chosen *</label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-xs rounded-xl p-3.5 text-white transition-all outline-none cursor-pointer"
                >
                  {SERVICES.map((s, i) => (
                    <option key={i} value={s.title}>{s.title} ({s.priceStart})</option>
                  ))}
                  <option value="Multi-platform full spec system">Enterprise Custom Integration</option>
                </select>
              </div>

              {/* Field: Message */}
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5 font-bold">Message Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your business goals and current timelines..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-xs rounded-xl p-3.5 text-white transition-all resize-none outline-none"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                id="contact-form-submit"
                className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-green-500/15 group hover:scale-[1.01] transition-transform"
              >
                {buttonLoading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 text-emerald-100" />
                    <span>Compile & Launch on WhatsApp</span>
                    <Send className="w-3.5 h-3.5 text-green-200 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

        {/* Clean responsive Google Map iFrame card */}
        <div id="office-map-component" className="w-full h-80 bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden p-2 shadow-2xl">
          <iframe
            title={`${BUSINESS_INFO.name} office location - Acacia Avenue, Kampala`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.028786016148!2d32.583120689405625!3d0.33413551532847056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e01861cbd%3A0x67dbb69c6fc96c21!2sKololo%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
            className="w-full h-full rounded-2xl border-0 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
