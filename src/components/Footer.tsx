import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { MouseEvent } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="site-footer" className="bg-[#020205]/20 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle bottom background light glow */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-8">
          
          {/* Column 1: Brand & Slogan */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-2 group mb-5" id="footer-logo">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow shadow-blue-500/10">
                <span className="font-display font-bold text-white text-base">{BUSINESS_INFO.name.charAt(0)}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold tracking-tight text-white text-md leading-tight">
                  {BUSINESS_INFO.name}
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-xs font-light leading-relaxed mb-6 max-w-sm">
              We engineer custom responsive web environments, light-size native mobile apps, and automated messaging bots optimized for active merchants across East Africa.
            </p>

            <div className="flex items-center gap-4 text-slate-500 text-xs font-mono">
              <span>Kampala HQ</span>
              <span>•</span>
              <span className="text-blue-400 font-bold">Acacia Avenue</span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4">
              Quick Sitemap
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleLinkScroll(e, "services")} className="hover:text-white hover:underline transition-all">
                  Solutions Directory
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => handleLinkScroll(e, "calculator")} className="hover:text-white hover:underline transition-all">
                  Agency Price Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkScroll(e, "why-us")} className="hover:text-white hover:underline transition-all">
                  Quality & Trust Indicators
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkScroll(e, "about")} className="hover:text-white hover:underline transition-all">
                  Company Mission
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleLinkScroll(e, "testimonials")} className="hover:text-white hover:underline transition-all">
                  Impact Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkScroll(e, "contact")} className="hover:text-white hover:underline transition-all">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick facts */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-4">
              Connect Directory
            </h5>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="font-mono">{BUSINESS_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Acacia Avenue, Kololo, Kampala</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed & Engineered for</span>
            <span className="text-white font-medium">Uganda's Digital Growth</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
