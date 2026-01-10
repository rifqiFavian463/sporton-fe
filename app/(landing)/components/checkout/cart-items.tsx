"use client";
import { priceFormatter } from "@/app/utils/price-formatter";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { Button } from "../ui/button";
import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import { CardWithHeader } from "../ui/card-with-header";
import { useRouter } from "next/navigation";

function CartItems() {
  const totalPrice = cartList.reduce((total, product) => total + product.price * product.qty, 0);
  const { push } = useRouter();
  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-75">
        {cartList.map((product, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="aspect-square bg-primary-light w-16 flex justify-center items-center">
              <Image src={`/images/products/${product.imgUrl}`} alt={product.name} width={63} height={63} className="aspect-square object-contain" />
            </div>
            <div className="self-cente">
              <div className="text-sm font-medium">{product.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{product.qty}x</div>
                <div className="text-primary">{priceFormatter(product.price)}</div>
              </div>
            </div>
            <Button size={"small"} variant={"ghost"} className="w-7 h-7 p-0! self-center ml-auto">
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
        <Button variant={"dark"} className="w-full mt-4" onClick={() => push("/payment")}>
          <FiCreditCard size={24} />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
}

export { CartItems };
