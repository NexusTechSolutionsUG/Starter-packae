import { useState, useEffect } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Interactive Agency Calculator", href: "#calculator" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent(`Hello ${BUSINESS_INFO.name}, I'd like to schedule a free digital strategy consultation for my business.`);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMsg}`, "_blank");
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/4 border-b border-white/8 backdrop-blur-lg py-4 shadow-lg shadow-black/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="nav-logo">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-bold text-white text-lg">{BUSINESS_INFO.name.charAt(0)}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple blur opacity-40 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold tracking-tight text-white text-lg leading-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-cta-whatsapp"
              onClick={handleWhatsAppClick}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md shadow-green-500/10 hover:shadow-green-500/20 flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#020205]/95 border-b border-white/10 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-left"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-header-cta-whatsapp"
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-green-500/15"
                >
                  <MessageSquare className="w-4 h-4" />
                  Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
