import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, CartItem } from "../types";

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedStorage?: string) => void;
  updateQty: (productId: string, quantity: number, selectedColor?: string, selectedStorage?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string, selectedStorage?: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;

  // Wishlist Feature
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Compare Feature
  compareList: Product[];
  toggleCompare: (product: Product) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  isCompareOpen: boolean;
  setIsCompareOpen: (open: boolean) => void;

  // SEO & Head Metadata States
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  selectedQuickViewProduct: any | null;
  setSelectedQuickViewProduct: (product: any | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // SEO state
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<any | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("apex_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load and save Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem("apex_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Compare state
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("apex_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("apex_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Wishlist Actions
  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Compare Actions
  const toggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        if (prev.length >= 2) {
          // If already 2 items, replace the second one or show a warning/limit
          // We limit selection to max 2 items
          return [prev[0], product];
        }
        return [...prev, product];
      }
    });
  };

  const isInCompare = (productId: string) => {
    return compareList.some((item) => item.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const addToCart = (
    product: Product,
    quantity = 1,
    selectedColor?: string,
    selectedStorage?: string
  ) => {
    setCart((prevCart) => {
      // Find matching item with same characteristics
      const matchIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedStorage === selectedStorage
      );

      if (matchIndex > -1) {
        const nextCart = [...prevCart];
        nextCart[matchIndex] = {
          ...nextCart[matchIndex],
          quantity: nextCart[matchIndex].quantity + quantity,
        };
        return nextCart;
      }

      return [...prevCart, { product, quantity, selectedColor, selectedStorage }];
    });
    setIsCartOpen(true); // Auto flash draft drawer when items are added like Apex!
  };

  const updateQty = (
    productId: string,
    quantity: number,
    selectedColor?: string,
    selectedStorage?: string
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor, selectedStorage);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId &&
        item.selectedColor === selectedColor &&
        item.selectedStorage === selectedStorage
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (
    productId: string,
    selectedColor?: string,
    selectedStorage?: string
  ) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor === selectedColor &&
            item.selectedStorage === selectedStorage
          )
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        compareList,
        toggleCompare,
        isInCompare,
        clearCompare,
        isCompareOpen,
        setIsCompareOpen,
        activeCategory,
        setActiveCategory,
        selectedQuickViewProduct,
        setSelectedQuickViewProduct,
      }}
    >
      {selectedHtmlIdFix(children)}
    </CartContext.Provider>
  );
}

// Simple helper to satisfy strict element formatting if wrapping
function selectedHtmlIdFix(node: ReactNode) {
  return node;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
