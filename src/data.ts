import { Service, TrustSignal, Testimonial } from "./types";

export const BUSINESS_INFO = {
  name: "Your Business",
  tagline: "High-Performance Digital Products for East African Brands",
  subTagline: "We design premium websites, custom software, and responsive mobile systems built for speed, offline reliability, and seamless Mobile Money flow.",
  whatsappNumber: "256708428805", // Standard international format without '+' for API
  whatsappDisplay: "+256 708 428 805",
  email: "info@nexustechug.com",
  phoneDisplay: "+256 708 428 805",
  address: "Plot 24, Acacia Avenue, Kololo, Kampala, Uganda",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.028786961448!2d32.583120689405625!3d0.33413551532847056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e01861cbd%3A0x67dbb69c6fc96c21!2sKololo%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
};

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Premium Modern Websites",
    description: "Ultra-fast, fully responsive business websites built with premium layouts to build trust and capture high-quality Ugandan leads effortlessly.",
    iconName: "Globe",
    priceStart: "UGX 950,000",
    benefits: [
      "Free 1-Year Domain (.COM or .CO.UG)",
      "Fully Responsive & Desktop Optimized",
      "Google Maps & Search Engine Indexing",
      "Direct Click-to-WhatsApp Integration"
    ]
  },
  {
    id: "mobile-apps",
    title: "Custom Mobile Applications",
    description: "Robust Android and iOS applications designed specifically for local users, with low bandwidth consumption and offline capabilities.",
    iconName: "Smartphone",
    priceStart: "UGX 2,500,000",
    benefits: [
      "Offline-first dynamic data sync",
      "Integrated MTN MoMo & Airtel Money",
      "Engagement-driving Push Notifications",
      "Optimized size to fit lower-end phones"
    ]
  },
  {
    id: "wa-bot",
    title: "WhatsApp Automation Bots",
    description: "Convert WhatsApp chats into automated sales pipelines. Show catalogs, capture leads, and answer FAQs automatically 24/7.",
    iconName: "MessageSquare",
    priceStart: "UGX 600,000",
    benefits: [
      "Instant automated product catalogue",
      "Intelligent menu checkout answers",
      "Mobile Money generation triggers",
      "Integrates directly with Google Sheets for orders"
    ]
  },
  {
    id: "seo-maps",
    title: "Google Maps & Local SEO Boost",
    description: "Dominate search results in Kampala, Entebbe, and Jinja. Put your hardware, hotel, school, or retail store at the top of Google.",
    iconName: "MapPin",
    priceStart: "UGX 450,000",
    benefits: [
      "Google Business Profile verification",
      "Google Maps direct direction setup",
      "Auto-review-generator system",
      "Strategic keyword indexing for Uganda"
    ]
  }
];

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Mobile Money Integrated",
    description: "All our platforms directly connect with MTN MoMo and Airtel Money APIs for immediate local payments.",
    iconName: "Wallet"
  },
  {
    title: "Bandwidth Optimized",
    description: "Our projects use next-gen compression, making sure they load instantaneously even on slow 3G connections.",
    iconName: "Zap"
  },
  {
    title: "Direct WhatsApp Flow",
    description: "We focus on real conversions. Every form, cart checkout, or booking sends structured data to your WhatsApp.",
    iconName: "Share2"
  },
  {
    title: "Dedicated Local Support",
    description: "Based right here in Kampala. We offer physical consultations, direct training, and instant maintenance.",
    iconName: "Users"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ssubi Ronald",
    role: "Managing Director",
    company: "Victoria Safaris Ltd",
    location: "Kampala",
    quote: "Your Business built our main safari reservation engine. In just 3 months, our direct inquiries from Google surged by 150%. The integration that allows guests to chat smoothly with us via WhatsApp changed everything.",
    rating: 5
  },
  {
    name: "Akiiki Brenda",
    role: "Founder",
    company: "Akiiki Organics Hub",
    location: "Entebbe",
    quote: "Our automated WhatsApp bot answers client FAQs and records organic produce orders even while we are closed. It is like having a reliable full-time receptionist for a fraction of the cost!",
    rating: 5
  },
  {
    name: "Katende Moses",
    role: "Director of Operations",
    company: "Delta Hardware & Logistics",
    location: "Nakasero",
    quote: "We needed an inventory showcase that loads fast on simple phones. Your Business delivered a sleek web application that has saved us hours in manual quotation generation. Incredible local tech experts.",
    rating: 5
  }
];

export const STATS = [
  { value: "50+", label: "Ugandan Businesses Empowered" },
  { value: "4.9★", label: "Average Google Reviews Rating" },
  { value: "3x", label: "Average Inquiries Growth" },
  { value: "100%", label: "Mobile-Ready Platforms" }
];
