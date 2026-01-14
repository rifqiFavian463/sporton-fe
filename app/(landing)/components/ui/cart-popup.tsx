import { priceFormatter } from "@/app/utils/price-formatter";
import Image from "next/image";
import { Button } from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-store";
import { getImageUrl } from "@/app/lib/api";

function CartPopup() {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();
  const handleCheckout = () => {
    push("/checkout");
  };
  const totalPrice = items.reduce((total, product) => total + product.price * product.qty, 0);
  return (
    <div className="absolute bg-white right-0 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10 ">
      <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart</div>
      <div className="overflow-auto max-h-75">
        {items.length === 0 ? (
          <div className="text-center opacity-50 py-5">Your shopping cart is empty</div>
        ) : (
          items.map((product, index) => (
            <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
              <div className="aspect-square bg-primary-light w-16 flex justify-center items-center">
                <Image src={getImageUrl(product.imageUrl)} alt={product.name} width={63} height={63} className="aspect-square object-contain" />
              </div>
              <div className="self-cente">
                <div className="text-sm font-medium">{product.name}</div>
                <div className="flex gap-3 font-medium text-xs">
                  <div>{product.qty}x</div>
                  <div className="text-primary">{priceFormatter(product.price)}</div>
                </div>
              </div>
              <Button size={"small"} variant={"ghost"} className="w-7 h-7 p-0! self-center ml-auto" onClick={() => removeItem(product._id)}>
                <FiTrash2 size={16} />
              </Button>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between">
          <div className="font-semibold text-sm">Total</div>
          <div className="text-primary">{priceFormatter(totalPrice)}</div>
        </div>
        <Button variant={"dark"} size={"small"} className="w-full mt-4" onClick={handleCheckout}>
          Checkout Now
          <FiArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
}

export { CartPopup };
