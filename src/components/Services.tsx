import { useState, useMemo, useEffect } from "react";
import { PRODUCTS, BUSINESS_INFO, SERVICES } from "../data";
import { useCart } from "../context/CartContext";
import {
  Smartphone,
  Laptop,
  Tv,
  Gamepad2,
  Headphones,
  Speaker,
  Star,
  Search,
  SlidersHorizontal,
  Check,
  Sparkles,
  ShoppingBag,
  Calculator,
  ArrowRight,
  Clock,
  Zap,
  ShieldCheck,
  Percent,
  X,
  Heart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Icon components mapping helper
const getProductIcon = (iconName: string) => {
  switch (iconName) {
    case "Smartphone":
      return <Smartphone className="w-8 h-8 text-sky-400" />;
    case "Laptop":
      return <Laptop className="w-8 h-8 text-indigo-400" />;
    case "Tv":
      return <Tv className="w-8 h-8 text-emerald-400" />;
    case "Gamepad2":
      return <Gamepad2 className="w-8 h-8 text-fuchsia-400" />;
    case "Headphones":
      return <Headphones className="w-8 h-8 text-pink-400" />;
    default:
      return <Speaker className="w-8 h-8 text-blue-400" />;
  }
};

export default function Services() {
  const { 
    addToCart,
    wishlist,
    toggleWishlist,
    isInWishlist,
    compareList,
    toggleCompare,
    isInCompare,
    setIsCompareOpen
  } = useCart();

  // Jumia Midnight Flash Sale Countdown state
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 48, seconds: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 4, minutes: 0, seconds: 0 }; // Auto-reset daily loop
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Jumia Core Interactive Quick View Selection state
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<any | null>(null);

  // Simulating real-time Jumia API cache loading states during data initialization
  const [isCatalogLoading, setIsCatalogLoading] = useState(true);
  const [isCalculatorLoading, setIsCalculatorLoading] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsCatalogLoading(false), 1100);
    const timer2 = setTimeout(() => setIsCalculatorLoading(false), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Active slide/angle state for the Quick View Carousel
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);

  // Auto reset active slide view when selection switches
  useEffect(() => {
    setActiveAngleIndex(0);
  }, [selectedQuickViewProduct]);

  // Constructing beautiful, descriptive vector angle slides for products in Lira Outlet
  const angleSlides = useMemo(() => {
    if (!selectedQuickViewProduct) return [];
    const name = selectedQuickViewProduct.iconName;
    return [
      {
        angleName: "Front Perspective",
        description: "Official sealed face & display aspect",
        badge: "FRONT VIEW",
        component: (
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            <div className="absolute inset-x-8 inset-y-12 bg-blue-500/5 rounded-full blur-2xl animate-pulse pointer-events-none" />
            <div className="transform scale-[1.15] drop-shadow-[0_15px_15px_rgba(59,130,246,0.25)] transition-transform duration-500 hover:scale-125">
              {getProductIcon(name)}
            </div>
            <span className="absolute bottom-3 font-mono text-[8.5px] text-slate-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-white/5">Primary Slate Profile</span>
          </div>
        )
      },
      {
        angleName: "Sleek Side Bezel",
        description: "Aerospace thin curve & structural chassis",
        badge: "90° SIDE PROFILE",
        component: (
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            <div className="absolute inset-x-8 inset-y-12 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="transform scale-y-[1.1] scale-x-[0.35] rotate-[15deg] skew-y-3 drop-shadow-[0_10px_10px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-[1.12]">
              {getProductIcon(name)}
            </div>
            <span className="absolute bottom-3 font-mono text-[8.5px] text-slate-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-white/5">Ultra-Thin Edge</span>
          </div>
        )
      },
      {
        angleName: "I/O Ports & Interface",
        description: "Speed Type-C connections & accessory grid",
        badge: "PORTS / POWER",
        component: (
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            <div className="absolute inset-x-8 inset-y-12 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="transform scale-[0.9] translate-y-2 relative transition-transform duration-500 select-none">
              {getProductIcon(name)}
              {/* Pin light */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
            </div>
            <span className="absolute bottom-3 font-mono text-[8.5px] text-slate-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-white/5">PD / High Speed Dock</span>
          </div>
        )
      },
      {
        angleName: "Authenticated Sealed Pack",
        description: "Jumia corporate Lira warehouse shrink-wrap",
        badge: "RETAIL BOX",
        component: (
          <div className="relative flex flex-col items-center justify-center h-full w-full">
            <div className="absolute inset-x-8 inset-y-12 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="border border-dashed border-white/10 p-5 rounded-2xl bg-black/40 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30">
              <div className="opacity-35 transform scale-90">
                {getProductIcon(name)}
              </div>
              <span className="text-[7px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 mt-2 rounded font-extrabold tracking-widest">
                VERIFIED SEALED
              </span>
            </div>
            <span className="absolute bottom-3 font-mono text-[8.5px] text-slate-400 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded border border-white/5">Box Adventure Intact</span>
          </div>
        )
      }
    ];
  }, [selectedQuickViewProduct]);

  // Catalog Engine States
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  // Dynamic maximum product price selection limit
  const maxProductPrice = useMemo(() => {
    return Math.max(...PRODUCTS.map((p) => p.price), 5000000);
  }, []);

  const [maxPriceLimit, setMaxPriceLimit] = useState(maxProductPrice);

  // Selection state for products (colors and storage selections)
  const [productSelections, setProductSelections] = useState<
    Record<string, { color?: string; storage?: string }>
  >({});

  // Configurator States (For Setup package builder)
  const [selectedConfigType, setSelectedConfigType] = useState("phones");
  const [addonWarranty, setAddonWarranty] = useState(false);
  const [addonDelivery, setAddonDelivery] = useState(false);
  const [addonProtection, setAddonProtection] = useState(false);
  const [addonSoftware, setAddonSoftware] = useState(false);

  const categories = ["All", "Phones", "Laptops", "TVs & Audio", "Gaming", "Accessories"];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchCategory = activeCategory === "All" || product.category === activeCategory;
      const matchPrice = product.price <= maxPriceLimit;
      return matchSearch && matchCategory && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // featured / default
      return 0;
    });
  }, [searchTerm, activeCategory, sortBy, maxPriceLimit]);

  const handleProductSelection = (productId: string, key: "color" | "storage", value: string) => {
    setProductSelections((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [key]: value,
      },
    }));
  };

  const handleAddToCartClick = (product: any) => {
    const selection = productSelections[product.id] || {};
    const color = selection.color || (product.colors && product.colors[0]) || undefined;
    const storage = selection.storage || (product.storages && product.storages[0]) || undefined;

    addToCart(product, 1, color, storage);
  };

  // Setup Bundle customizer calculator math
  const getBundleTotal = () => {
    let basePrice = 1500000;
    if (selectedConfigType === "laptops") basePrice = 2200000;
    if (selectedConfigType === "smart-tvs") basePrice = 2400000;
    if (selectedConfigType === "gaming-gear") basePrice = 2900000;

    let total = basePrice;
    if (addonWarranty) total += 150000;
    if (addonDelivery) total += 35000;
    if (addonProtection) total += 75000;
    if (addonSoftware) total += 120000;

    return total;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "UGX",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleCustomBundleCheckout = () => {
    const matchedService = SERVICES.find(s => s.id === selectedConfigType) || { title: "Custom Setup Pack" };
    const addons = [];
    if (addonWarranty) addons.push("3-Year Local Extended Warranty (+UGX 150k)");
    if (addonDelivery) addons.push("Lira Doorstep Dispatch & Setup Consultation (+UGX 35k)");
    if (addonProtection) addons.push("Liquid Nano Armor Screen Guards & Cases (+UGX 75k)");
    if (addonSoftware) addons.push("MS Office Preloads & File Backup Migration (+UGX 120k)");

    const totalStr = formatCurrency(getBundleTotal());

    const message = `Hello ${BUSINESS_INFO.name}! 👋 I would like to order a Custom Jumia Setup Package:
    
📦 *Product Stream:* ${matchedService.title}
⚡ *Upgrades added:*
${addons.length > 0 ? addons.map(a => `  • ${a}`).join("\n") : "  • Standard Box Package Only"}

📈 *Calculated Checkout Quote:* ${totalStr}

Please check stock eligibility at the Lira showroom so can prepare dispatch!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative center glowing auras */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest bg-blue-500/10 text-blue-400 font-extrabold px-3 py-1 rounded border border-blue-500/20 mb-3.5 inline-block animate-pulse">
            🧡 Jumia Marketplace Authorized Outlet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 text-center">
            Shop Genuine Electronics Online
          </h2>
          <p className="text-slate-400 font-light leading-relaxed text-center font-sans">
            Enjoy premium certified Jumia e-commerce experiences right here in Lira. Search brand-sealed smartphones, powerful Apple MacBooks, smart screens, and accessories. Express same-day home dispatch on WhatsApp!
          </p>
        </div>

        {/* Jumia Brand Flash Deals Countdown Banner */}
        <div className="mb-12 bg-gradient-to-r from-amber-600/20 via-orange-600/15 to-purple-600/10 border border-orange-500/20 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md relative overflow-hidden">
          {/* Glowing backdrop decorator */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 bg-orange-500/20 text-orange-400 font-extrabold rounded">FLASH SALES LIVE</span>
                <span className="text-[9px] font-mono text-slate-400">🔥 Same-day showroom dispatch</span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-extrabold text-white mt-1">
                Lira Midnight Super Savings Deals
              </h3>
              <p className="text-xs text-slate-400 font-light max-w-md mt-0.5 font-sans">
                Apply check code <span className="font-mono text-orange-400 font-bold bg-orange-500/15 px-1.5 py-0.5 rounded border border-orange-500/10">LIRATECH</span> at checkout to instantly slash up to UGX 150,000 off premium order baskets!
              </p>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3 shrink-0 bg-black/40 border border-white/5 p-3 rounded-2xl">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              Ends In:
            </span>
            <div className="flex items-center gap-1.5 font-mono">
              <div className="text-center">
                <div className="bg-orange-500 text-black font-extrabold text-sm md:text-base px-2.5 py-1 rounded-lg shadow-md shadow-orange-500/20">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <span className="text-[8px] text-slate-500 uppercase font-medium">Hrs</span>
              </div>
              <span className="text-orange-500 font-bold -mt-3 animate-pulse">:</span>
              <div className="text-center">
                <div className="bg-orange-500 text-black font-extrabold text-sm md:text-base px-2.5 py-1 rounded-lg">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <span className="text-[8px] text-slate-500 uppercase font-medium">Min</span>
              </div>
              <span className="text-orange-500 font-bold -mt-3 animate-pulse">:</span>
              <div className="text-center">
                <div className="bg-orange-500 text-black font-extrabold text-sm md:text-base px-2.5 py-1 rounded-lg">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <span className="text-[8px] text-slate-500 uppercase font-medium">Sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* E-Commerce Filtering Grid Controls */}
        <div className="bg-white/3 border border-white/10 p-5 md:p-6 rounded-[2rem] gap-4 mb-12 flex flex-col backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Categories Horizontal Tabs */}
            <div className="flex flex-wrap gap-2 text-left" id="categories-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl text-center cursor-pointer transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/10"
                      : "bg-white/3 hover:bg-white/8 border border-white/5 text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search bar & Sort Controls layout */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center flex-1 max-w-xl md:justify-end">
              
              {/* Real Search Box */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-500">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search gadgets, specs, Apple, specs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 text-xs rounded-xl pl-10 pr-4 py-2.5 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all font-mono"
                />
              </div>

              {/* Sorting */}
              <div className="relative flex items-center shrink-0">
                <span className="text-slate-500 text-[10px] pr-2 uppercase font-mono tracking-tight text-right hidden sm:block">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black/40 border border-white/10 text-xs rounded-xl px-3 py-2.5 text-white outline-none cursor-pointer focus:border-blue-400 transition-all font-mono"
                >
                  <option value="featured">Best Sellers</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Top Rated ⭐</option>
                </select>
              </div>

            </div>
          </div>

          {/* Price Range Slider Filter */}
          <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-2 text-slate-400 text-xs w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-orange-400 shrink-0" />
              <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-slate-500">Filter Budget:</span>
            </div>

            <div className="flex flex-1 items-center gap-4 w-full max-w-lg">
              <input
                type="range"
                min="0"
                max={maxProductPrice}
                step="50000"
                value={maxPriceLimit}
                onChange={(e) => setMaxPriceLimit(Number(e.target.value))}
                className="flex-1 accent-orange-500 bg-white/5 h-1 rounded-lg range-sm cursor-pointer"
              />
              <div className="font-mono text-xs font-bold text-orange-400 bg-orange-500/10 border border-orange-500/15 py-1 px-3 rounded-xl shrink-0">
                Max Budget: {formatCurrency(maxPriceLimit)}
              </div>
            </div>

            {maxPriceLimit < maxProductPrice && (
              <button
                type="button"
                onClick={() => setMaxPriceLimit(maxProductPrice)}
                className="text-[9px] font-mono text-slate-500 hover:text-white uppercase tracking-wider cursor-pointer hover:underline text-right shrink-0 font-bold"
              >
                [Reset Slider]
              </button>
            )}
          </div>

        </div>

        {/* Products Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24" id="products-catalog-grid">
          {isCatalogLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={`catalog-skeleton-${idx}`}
                className="bg-white/4 border border-white/10 hover:border-white/15 transition-all duration-300 rounded-3xl p-5 flex flex-col justify-between relative text-left overflow-hidden min-h-[500px]"
              >
                {/* Embedded sweep shimmer beam overlay */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer pointer-events-none" />

                <div>
                  {/* Top rating and wishlist placeholder */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="w-16 h-5 rounded-lg bg-white/5 animate-pulse" />
                    <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse" />
                  </div>

                  {/* Frame image placeholder */}
                  <div className="w-full aspect-square rounded-2xl bg-white/5 flex items-center justify-center mb-5 animate-pulse overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 animate-pulse" />
                  </div>

                  {/* Category + Title */}
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-white/5 rounded w-1/4 animate-pulse" />
                    <div className="h-5 bg-white/5 rounded w-5/6 animate-pulse" />
                  </div>

                  {/* Rating checklist placeholder */}
                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-white/5 rounded w-4/5 animate-pulse" />
                    <div className="h-3 bg-white/5 rounded w-2/3 animate-pulse" />
                  </div>
                </div>

                {/* Bottom interactive config fields + Cart skeletons */}
                <div className="border-t border-white/5 pt-4 space-y-4">
                  <div className="h-9 rounded-xl bg-white/5 animate-pulse" />
                  <div className="flex justify-between items-end">
                    <div className="space-y-1 w-1/2">
                      <div className="h-2 bg-white/5 rounded w-1/2" />
                      <div className="h-4 bg-white/5 rounded w-3/4" />
                    </div>
                    <div className="w-32 h-10 rounded-xl bg-white/5 animate-pulse" />
                  </div>
                </div>
              </div>
            ))
          ) : filteredProducts.length === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-white/3 border border-white/8 rounded-[2rem] p-12 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-4 mx-auto font-bold text-lg">
                ⚠️
              </div>
              <h5 className="font-display font-bold text-md text-white mb-2">No Products Matched</h5>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                We couldn't find items matching "{searchTerm}". Please check spelling or select a different category tab!
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => {
            const selection = productSelections[product.id] || {};
            const activeColor = selection.color || (product.colors && product.colors[0]) || "";
            const activeStorage = selection.storage || (product.storages && product.storages[0]) || "";

            return (
              <div
                key={product.id}
                className="bg-white/4 border border-white/10 hover:border-white/15 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 rounded-3xl p-5 flex flex-col justify-between relative group text-left"
              >
                {/* Top Left Row Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
                  {/* Rating Badge */}
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 font-mono text-[10px] text-white select-none">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {product.rating}
                  </span>

                  {/* Promo tags */}
                  {product.badge && (
                    <span className="text-[9px] font-mono font-bold bg-gradient-to-r from-pink-500 to-red-500 text-white uppercase tracking-wider px-2 py-0.5 rounded shadow select-none">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Top Corner Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                  title={isInWishlist(product.id) ? "Remove from Wishlist" : "Save to Wishlist"}
                >
                  <Heart className={`w-4 h-4 transition-transform duration-300 hover:scale-110 ${
                    isInWishlist(product.id) ? "fill-pink-500 text-pink-500" : "text-white/70"
                  }`} />
                </button>

                <div>
                  {/* Styled Dynamic Illustration backdrop representation */}
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-tr from-white/1 to-white/5 border border-white/5 flex items-center justify-center mb-5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors" />
                    {getProductIcon(product.iconName)}

                    {/* Centered Hover overlay button */}
                    <div className="absolute inset-0 bg-blue-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                      <button
                        onClick={() => setSelectedQuickViewProduct(product)}
                        type="button"
                        className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                      >
                        Quick Specs View
                      </button>
                    </div>

                    {/* Stock level badge */}
                    <span className={`absolute bottom-3 right-3 text-[9px] font-mono px-2 py-0.5 rounded-md border ${
                      product.stockStatus === "In Stock"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                    }`}>
                      {product.stockStatus === "In Stock" ? "✔ IN STOCK" : "⏱ ONLY 2 LEFT"}
                    </span>
                  </div>

                  {/* Title & Brand Slogan */}
                  <div className="text-left mb-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-0.5">{product.category}</span>
                    <h4 
                      onClick={() => setSelectedQuickViewProduct(product)}
                      className="font-display font-bold text-sm text-white hover:text-orange-400 transition-colors duration-200 line-clamp-2 min-h-[40px] cursor-pointer"
                    >
                      {product.name}
                    </h4>
                  </div>

                  {/* Bullet Spec Checklist Details */}
                  <div className="space-y-1 mb-5 text-left">
                    {product.specs.map((spec, sidx) => (
                      <div key={sidx} className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Interactive Option Selectors (Colors/Storage) */}
                  <div className="space-y-3.5 border-t border-white/5 pt-4 mb-5 text-left">
                    {/* Specific Color selector */}
                    {product.colors && product.colors.length > 0 && (
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5 font-mono">Select Shade:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.colors.map((color) => (
                            <button
                              key={color}
                              type="button"
                              onClick={() => handleProductSelection(product.id, "color", color)}
                              className={`px-2 py-1 text-[9px] font-mono rounded-md border cursor-pointer transition-all ${
                                activeColor === color
                                  ? "border-blue-500 bg-blue-500/10 text-white"
                                  : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10"
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specific Storage selector */}
                    {product.storages && product.storages.length > 0 && (
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5 font-mono">Select Capacity:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.storages.map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => handleProductSelection(product.id, "storage", st)}
                              className={`px-2 py-1 text-[9px] font-mono rounded-md border cursor-pointer transition-all ${
                                activeStorage === st
                                  ? "border-blue-500 bg-blue-500/10 text-white"
                                  : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10"
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cart Action Area Pricing Header */}
                <div className="border-t border-white/5 pt-4">
                  {/* Compare Specification checkbox Row */}
                  <div className="flex items-center justify-between mb-3.5 bg-white/5 border border-white/5 rounded-2xl px-3.5 py-2.5 text-left">
                    <label className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isInCompare(product.id)}
                        onChange={() => {
                          toggleCompare(product);
                          // Auto open the compare list if we are starting a technical comparison with 2 items!
                          if (!isInCompare(product.id) && compareList.length === 1) {
                            setIsCompareOpen(true);
                          }
                        }}
                        className="rounded border-white/10 bg-black text-blue-500 focus:ring-0 cursor-pointer w-3.5 h-3.5 accent-blue-500"
                        id={`compare-checkbox-${product.id}`}
                      />
                      <span>Compare Gadget</span>
                    </label>
                    {isInCompare(product.id) && (
                      <span className="text-[8px] font-mono text-blue-400 font-extrabold uppercase animate-pulse">
                        [READY]
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline justify-between gap-2 mb-4 text-left">
                    <div>
                      <span className="text-[9px] uppercase text-slate-500 block font-mono">Deal Price</span>
                      <span className="text-sm font-mono font-extrabold text-blue-400">
                        {formatCurrency(product.price)}
                      </span>
                    </div>
                    {product.originalPrice && (
                      <div className="text-right">
                        <span className="text-[9px] uppercase text-slate-500 block font-mono">Original</span>
                        <span className="text-[11px] font-mono text-slate-500 line-through">
                          {formatCurrency(product.originalPrice)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Add to Cart Core button */}
                  <button
                    onClick={() => handleAddToCartClick(product)}
                    className="w-full py-3 rounded-xl font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs">Add To Cart</span>
                  </button>
                </div>

              </div>
            );
          }))}
        </div>

        {/* Dynamic Setup Upgrade Configurator (Re-engineered Luxury Calculator) */}
        <div id="calculator" className="scroll-mt-24">
          <div className="bg-white/4 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Ambient visual backdrops */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            {isCalculatorLoading ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[500px] relative overflow-hidden text-left">
                {/* Embedded sweep shimmer beam overlay */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer pointer-events-none" />

                {/* Left Form Skeleton */}
                <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-white/5 animate-pulse" />
                    <div className="w-48 h-4 bg-white/5 rounded animate-pulse" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-8 bg-white/5 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse" />
                  </div>

                  {/* Base selectors grid skeleton */}
                  <div className="space-y-3">
                    <div className="w-32 h-3 bg-white/5 rounded animate-pulse" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="h-16 rounded-2xl bg-white/5 animate-pulse" />
                      <div className="h-16 rounded-2xl bg-white/5 animate-pulse" />
                    </div>
                  </div>

                  {/* Addon checkboxes skeleton */}
                  <div className="space-y-3">
                    <div className="w-48 h-3 bg-[#ffffff]/5 rounded animate-pulse w-2/3" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="h-[72px] rounded-2xl bg-white/5 animate-pulse" />
                      <div className="h-[72px] rounded-2xl bg-white/5 animate-pulse" />
                      <div className="h-[72px] rounded-2xl bg-white/5 animate-pulse" />
                      <div className="h-[72px] rounded-2xl bg-white/5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Right Receipt Skeleton */}
                <div className="lg:col-span-12 xl:col-span-5">
                  <div className="bg-white/4 border border-white/8 p-6 rounded-3xl space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer pointer-events-none" />
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div className="w-24 h-4 bg-white/5 rounded animate-pulse" />
                      <div className="w-20 h-4 bg-white/5 rounded animate-pulse" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <div className="w-1/3 h-3.5 bg-white/5 rounded animate-pulse" />
                        <div className="w-1/4 h-3.5 bg-white/5 rounded animate-pulse" />
                      </div>
                      <div className="border-t border-white/5 pt-3 space-y-2">
                        <div className="w-1/3 h-2.5 bg-white/5 rounded animate-pulse" />
                        <div className="h-10 bg-white/5 rounded-xl animate-pulse" />
                      </div>
                    </div>

                    <div className="h-20 bg-black/30 border border-white/5 rounded-2xl flex flex-col justify-center items-center space-y-2">
                      <div className="w-32 h-3 bg-white/5 rounded animate-pulse" />
                      <div className="w-48 h-6 bg-white/5 rounded animate-pulse" />
                    </div>

                    <div className="h-12 bg-white/5 rounded-2xl animate-pulse" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Selector Left form */}
                <div className="lg:col-span-12 xl:col-span-7 text-left">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Calculator className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                      Interactive Setup Customizer
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-4xl font-display font-medium text-white mb-6 leading-tight">
                    Configure Jumia Office or Living Room Bundles
                  </h4>
                  
                  {/* Selector 1 */}
                  <div className="mb-6">
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2.5 font-bold animate-pulse">
                      1. Choose Hardware Stream base:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES.map((serv) => (
                        <button
                          key={serv.id}
                          type="button"
                          onClick={() => setSelectedConfigType(serv.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            selectedConfigType === serv.id
                              ? "border-blue-500 bg-blue-500/15 text-white"
                              : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                          }`}
                        >
                          <div className="font-bold text-xs mb-0.5">{serv.title}</div>
                          <div className="text-[10px] font-mono text-slate-500">Base: {serv.priceStart}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selection 2: Custom Addons/Upgrades */}
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2.5 font-bold">
                      2. Add Protective Equipment & Jumia Store Services:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Checkbox A */}
                      <button
                        type="button"
                        onClick={() => setAddonWarranty(!addonWarranty)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          addonWarranty
                            ? "border-blue-500 bg-blue-500/15 text-white"
                            : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-semibold text-xs truncate">3-Year Extended Warranty</div>
                          <div className="text-[10px] font-mono text-slate-500 truncate">Hardware protection coverage</div>
                        </div>
                        <span className="text-xs font-semibold text-blue-400 font-mono shrink-0 ml-3">+150K</span>
                      </button>

                      {/* Checkbox B */}
                      <button
                        type="button"
                        onClick={() => setAddonDelivery(!addonDelivery)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          addonDelivery
                            ? "border-blue-500 bg-blue-500/15 text-white"
                            : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-semibold text-xs truncate">Doorstep Dispatch & Setup</div>
                          <div className="text-[10px] font-mono text-slate-500 truncate">Special transportation setup</div>
                        </div>
                        <span className="text-xs font-semibold text-blue-400 font-mono shrink-0 ml-3">+35K</span>
                      </button>

                      {/* Checkbox C */}
                      <button
                        type="button"
                        onClick={() => setAddonProtection(!addonProtection)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          addonProtection
                            ? "border-blue-500 bg-blue-500/15 text-white"
                            : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-semibold text-xs truncate">Liquid Armor Screen Guard</div>
                          <div className="text-[10px] font-mono text-slate-500 truncate">Double scratch protective glass</div>
                        </div>
                        <span className="text-xs font-semibold text-blue-400 font-mono shrink-0 ml-3">+75K</span>
                      </button>

                      {/* Checkbox D */}
                      <button
                        type="button"
                        onClick={() => setAddonSoftware(!addonSoftware)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          addonSoftware
                            ? "border-blue-500 bg-blue-500/15 text-white"
                            : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-semibold text-xs truncate">Full Device Preloads Bundle</div>
                          <div className="text-[10px] font-mono text-slate-500 truncate">Licensed office suite & data sync</div>
                        </div>
                        <span className="text-xs font-semibold text-blue-400 font-mono shrink-0 ml-3">+120K</span>
                      </button>

                    </div>
                  </div>

                </div>

                {/* Calculator Right: Output Receipt card */}
                <div className="lg:col-span-12 xl:col-span-5 text-left">
                  <div className="bg-white/4 border border-white/8 p-6 rounded-3xl relative shadow-inner">
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                    
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate-500 text-left">Custom Service Bill</span>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold text-right">COMPILED OK</span>
                    </div>

                    {/* Summary lists */}
                    <div className="space-y-3 mb-6 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400 text-left">Main Hardware Stream:</span>
                        <span className="text-white font-medium text-right">
                          {SERVICES.find((s) => s.id === selectedConfigType)?.title}
                        </span>
                      </div>

                      <div className="border-t border-white/5 pt-3">
                        <span className="text-slate-500 block text-[9px] mb-2 uppercase tracking-tight text-left">Selected Jumia Extras:</span>
                        <ul className="space-y-1.5 pl-2 text-slate-300 font-mono text-left">
                          {addonWarranty && (
                            <li className="flex justify-between text-slate-300">
                              <span>• Extended Warranty</span>
                              <span className="text-right text-white">UGX 150,000</span>
                            </li>
                          )}
                          {addonDelivery && (
                            <li className="flex justify-between text-slate-300">
                              <span>• Dispatch & Setup</span>
                              <span className="text-right text-white">UGX 35,000</span>
                            </li>
                          )}
                          {addonProtection && (
                            <li className="flex justify-between text-slate-300">
                              <span>• Armor Screen Protector</span>
                              <span className="text-right text-white">UGX 75,000</span>
                            </li>
                          )}
                          {addonSoftware && (
                            <li className="flex justify-between text-slate-300">
                              <span>• Licensed App Configs</span>
                              <span className="text-right text-white">UGX 120,000</span>
                            </li>
                          )}
                          {!addonWarranty && !addonDelivery && !addonProtection && !addonSoftware && (
                            <li className="text-slate-500 italic text-[11px]">- Toggle services cards left to build a Jumia hardware protection pack</li>
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Final Total Pricing */}
                    <div className="bg-black/30 p-4 border border-white/5 rounded-2xl mb-6">
                      <div className="text-xs uppercase font-mono text-slate-500 tracking-wider text-center mb-1">
                        Estimated Combined Price
                      </div>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-center text-blue-400 tracking-tight">
                        {formatCurrency(getBundleTotal())}
                      </div>
                    </div>

                    {/* WhatsApp quotation CTA */}
                    <button
                      id="calculator-setup-whatsapp-submit"
                      onClick={handleCustomBundleCheckout}
                      className="w-full py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02] shadow-xl shadow-green-500/10 cursor-pointer flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-100" />
                      <span>Inquire Setup Availability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[10px] text-slate-500 font-mono text-center mt-3">
                      Same-day doorstep delivery around northern Uganda. Official corporate warranties applied.
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

      </div>

      {/* Jumia Style - Interactive Product Quick View Modal */}
      {selectedQuickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedQuickViewProduct(null)}
            className="absolute inset-0 bg-[#020205]/90 backdrop-blur-md cursor-pointer"
          />
          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-[#05050c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col p-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedQuickViewProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-left">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-blue-500/10 text-blue-400 font-extrabold px-2 py-0.5 rounded border border-blue-500/20">
                {selectedQuickViewProduct.category}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">• Jumia Genuine Outlet</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Image Slider/Carousel Frame */}
              <div className="flex flex-col gap-3">
                <div className="aspect-square bg-gradient-to-tr from-[#0a0a1a] to-[#15152a] border border-blue-500/15 rounded-2xl flex flex-col justify-between p-4 text-4xl text-blue-400 relative overflow-hidden group/carousel selection:bg-transparent">
                  {/* Backdrop Grid */}
                  <div className="absolute inset-0 bg-grid-white opacity-[0.1]" />
                  
                  {/* Rating Badge */}
                  <span className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 font-mono text-[9px] text-white select-none">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {selectedQuickViewProduct.rating}
                  </span>

                  {/* Active Slide Angle Badge */}
                  <span className="absolute top-3 right-3 z-10 bg-orange-600/20 text-orange-400 border border-orange-500/30 font-mono text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 rounded shadow-lg animate-pulse">
                    {angleSlides[activeAngleIndex]?.badge}
                  </span>

                  {/* Main Active Angle content container slider */}
                  <div className="flex-1 flex items-center justify-center w-full min-h-0 relative select-none">
                    {angleSlides[activeAngleIndex]?.component}
                  </div>

                  {/* Left Navigation Arrow */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAngleIndex((prev) => (prev - 1 + angleSlides.length) % angleSlides.length);
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 shadow-md focus:opacity-100"
                    aria-label="Previous image angle"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAngleIndex((prev) => (prev + 1) % angleSlides.length);
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100 shadow-md focus:opacity-100"
                    aria-label="Next image angle"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indicators / Dots overlay at direct bottom */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-sm py-1 px-2.5 rounded-full border border-white/5">
                    {angleSlides.map((_, sidx) => (
                      <button
                        key={sidx}
                        type="button"
                        onClick={() => setActiveAngleIndex(sidx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                          activeAngleIndex === sidx ? "bg-orange-400 scale-125 w-3" : "bg-white/20 hover:bg-white/40"
                        }`}
                        title={`View angle ${sidx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Micro Label for selected Angle Detail description */}
                <div className="bg-white/3 border border-white/5 rounded-xl px-3 py-2 text-left">
                  <div className="text-[10px] font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                    {angleSlides[activeAngleIndex]?.angleName}
                  </div>
                  <div className="text-[9px] text-slate-400 font-sans tracking-wide mt-0.5">
                    {angleSlides[activeAngleIndex]?.description}
                  </div>
                </div>
              </div>

              {/* Details Sheet */}
              <div className="text-left space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-white leading-tight">
                    {selectedQuickViewProduct.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-mono text-base font-extrabold text-orange-400">
                      {formatCurrency(selectedQuickViewProduct.price)}
                    </span>
                    {selectedQuickViewProduct.originalPrice && (
                      <span className="font-mono text-xs text-slate-500 line-through">
                        {formatCurrency(selectedQuickViewProduct.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed font-sans">
                  {selectedQuickViewProduct.description || "Certified official electronics unit directly sourced from authorized brand pools with original seals and guaranteed local after-sales maintenance."}
                </p>

                <div className="space-y-1.5 bg-white/3 border border-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono uppercase text-slate-500 font-bold block mb-1">Key Specifications Checklist:</span>
                  {selectedQuickViewProduct.specs.map((spec: string, sidx: number) => (
                    <div key={sidx} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
                      <Check className="w-3 h-3 text-orange-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Option selection */}
            <div className="mt-5 space-y-4 border-t border-white/5 pt-4 text-left">
              {selectedQuickViewProduct.colors && selectedQuickViewProduct.colors.length > 0 && (
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5 font-mono">Select Shade:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedQuickViewProduct.colors.map((color: string) => {
                      const activeColor = productSelections[selectedQuickViewProduct.id]?.color || selectedQuickViewProduct.colors[0];
                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleProductSelection(selectedQuickViewProduct.id, "color", color)}
                          className={`px-3 py-1 text-[10px] font-mono rounded-lg border cursor-pointer transition-all ${
                            activeColor === color
                              ? "border-orange-500 bg-orange-500/10 text-white"
                              : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10"
                          }`}
                        >
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedQuickViewProduct.storages && selectedQuickViewProduct.storages.length > 0 && (
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5 font-mono">Select Capacity:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedQuickViewProduct.storages.map((st: string) => {
                      const activeStorage = productSelections[selectedQuickViewProduct.id]?.storage || selectedQuickViewProduct.storages[0];
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => handleProductSelection(selectedQuickViewProduct.id, "storage", st)}
                          className={`px-3 py-1 text-[10px] font-mono rounded-lg border cursor-pointer transition-all ${
                            activeStorage === st
                              ? "border-orange-500 bg-orange-500/10 text-white"
                              : "border-white/5 bg-white/3 text-slate-400 hover:border-white/10"
                          }`}
                        >
                          {st}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Checkout Action Trigger inside modal */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 border-t border-white/5 pt-4">
              <button
                type="button"
                onClick={() => {
                  const selection = productSelections[selectedQuickViewProduct.id] || {};
                  const activeColor = selection.color || (selectedQuickViewProduct.colors && selectedQuickViewProduct.colors[0]) || "";
                  const activeStorage = selection.storage || (selectedQuickViewProduct.storages && selectedQuickViewProduct.storages[0]) || "";
                  addToCart(selectedQuickViewProduct, 1, activeColor, activeStorage);
                  setSelectedQuickViewProduct(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 active:scale-95 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="text-xs">Add Selection To Jumia Cart</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedQuickViewProduct(null)}
                className="py-3 px-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                Keep Browsing
              </button>
            </div>

            {/* Security indicators */}
            <div className="flex items-center justify-around gap-2 mt-4 pt-4 border-t border-white/5 text-[9px] text-slate-500 font-mono">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> 100% Brand Seal</span>
              <span className="flex items-center gap-1"><Percent className="w-3.5 h-3.5 text-orange-400" /> Best Price Rule</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-indigo-400" /> Same Day Lira Dispatch</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
