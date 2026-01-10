import { priceFormatter } from "@/app/utils/price-formatter";
import Image from "next/image";
import { Button } from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const cartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    qty: 3,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    qty: 5,
    imgUrl: "product-3.png",
  },
];

function CartPopup() {
  const { push } = useRouter();
  const handleCheckout = () => {
    push("/payment");
  };
  const totalPrice = cartList.reduce((total, product) => total + product.price * product.qty, 0);
  return (
    <div className="absolute bg-white right-0 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10 ">
      <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart</div>
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
        <Button variant={"dark"} size={"small"} className="w-full mt-4" onClick={handleCheckout}>
          Checkout Now
          <FiArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
}

export { CartPopup, cartList };
