import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
  qty: number;
}
export interface CustomerInfo {
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
}

interface CartStore {
  customerInfo: CustomerInfo | null;
  items: CartItem[];
  setCustomerInfo: (info: CustomerInfo) => void;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  reset: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      customerInfo: null,
      items: [],
      setCustomerInfo: (info) => {
        set({ customerInfo: info });
      },
      addItem: (product: Product, qty: number = 1) => {
        const { items } = get();
        const existingItem = items.find((item) => item._id === product._id);

        if (existingItem) {
          return set({ items: items.map((item) => (item._id === product._id ? { ...item, qty: item.qty + qty } : item)) });
        }
        set({ items: [...items, { ...product, qty }] });
      },
      removeItem: (productId: string) => {
        const { items } = get();
        set({ items: items.filter((item) => item._id !== productId) });
      },
      reset: () => set({ items: [] }),
    }),
    { name: "cart-store" }
  )
);

export { useCartStore };
