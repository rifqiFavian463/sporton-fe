"use client";
import { priceFormatter } from "@/app/utils/price-formatter";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { Button } from "../ui/button";
import Image from "next/image";
import { CardWithHeader } from "../ui/card-with-header";
import { useCartStore } from "@/app/hooks/use-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void;
};
function CartItems({ handlePayment }: TCartItems) {
  const { items, removeItem } = useCartStore();
  const totalPrice = items.reduce((total, product) => total + product.price * product.qty, 0);

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
        <div className="overflow-auto max-h-75">
          {items.map((product) => (
            <div className="border-b border-gray-200 p-4 flex gap-3" key={product._id}>
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
          ))}
        </div>
        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between">
            <div className="font-semibold text-sm">Total</div>
            <div className="text-primary">{priceFormatter(totalPrice)}</div>
          </div>
          <Button variant={"dark"} className="w-full mt-4" onClick={handlePayment}>
            <FiCreditCard size={24} />
            Proceed to Payment
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
}

export { CartItems };
