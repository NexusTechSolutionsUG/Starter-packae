import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";
import CartDrawer from "./components/CartDrawer";
import WishlistDrawer from "./components/WishlistDrawer";
import CompareModal from "./components/CompareModal";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="relative min-h-screen font-sans bg-[#020205] text-[#f3f4f6] antialiased overflow-x-hidden">
        {/* Dynamic Navigation Header */}
        <Header />

        <main className="relative">
          {/* Hero Section & Metrics */}
          <Hero />

          {/* Services Showcase & Interactive Calculator */}
          <Services />

          {/* Why Choose Us Trust Indicators Grid */}
          <WhyChooseUs />

          {/* About Us Company Overview & Mission Statements */}
          <About />

          {/* Testimonials Review Cards */}
          <Testimonials />

          {/* Contact Info & compilable WhatsApp Planner Form & Maps Embed */}
          <Contact />
        </main>

        {/* Structured sitemaps and copyrights Footer */}
        <Footer />

        {/* Jumia checkout drawer dynamic modal */}
        <CartDrawer />

        {/* Wishlist Sidebar Overlay */}
        <WishlistDrawer />

        {/* Compare specs side-by-side Modal */}
        <CompareModal />

        {/* Pulsing floating WhatsApp floating trigger */}
        <WhatsAppFloating />
      </div>
    </CartProvider>
  );
}


