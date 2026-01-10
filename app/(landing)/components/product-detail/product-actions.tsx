"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import { useRouter } from "next/navigation";

function ProductActions() {
  const [qty, setQty] = useState(1);
  const { push } = useRouter();
  return (
    <div className="flex gap-5">
      <div className="border border-gray-300 inline-flex">
        <div className="text-xl font-medium border-r border-gray-300 flex justify-center items-center aspect-square w-12">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button className="border-b border-gray-300 cursor-pointer h-1/2 aspect-square flex items-center justify-center" onClick={() => setQty((currQty) => currQty + 1)}>
            <FiChevronUp size={24} />
          </button>
          <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center" onClick={() => setQty((currQty) => (currQty > 1 ? currQty - 1 : currQty))}>
            <FiChevronDown size={24} />
          </button>
        </div>
      </div>
      <Button className="w-full">
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>
      <Button variant="dark" className="w-full" onClick={() => push("/checkout")}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
}

export { ProductActions };
