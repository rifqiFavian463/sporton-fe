"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { CartPopup } from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-store";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [IscartOpen, setIsCartOpen] = useState(false);
  const { items } = useCartStore();

  return (
    <header className="fixed w-full z-50 backdrop-blur-xl bg-white/50">
      <div className="relative flex justify-between gap-10 container mx-auto py-3 px-6 md:px-3 lg:px-0">
        <Link href={"/"} className="self-center">
          <Image src="/images/logo.svg" alt="sporton logo" width={127} height={30} />
        </Link>
        <nav
          className={`absolute z-50 flex flex-col right-0 top-13 bg-white md:bg-transparent w-full md:w-auto gap-4 md:flex-row md:static md:gap-24  font-medium px-5 py-5 items-center md:px-0 md:visible md:opacity-100 md:scale-100 md:translate-y-0 transition-all duration-300 ease-out origin-top 
          ${isNavOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible "}
          }`}
        >
          <Link href="#" className="relative after:content-[''] after:absolute after:-bottom-1 after:h-0.75 after:w-1/2 after:rounded-full after:bg-primary after:-translate-x-1/2 after:left-1/2">
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className="relative flex items-center gap-10">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden">
            {isNavOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
          <FiSearch size={24} />
          <button onClick={() => setIsCartOpen(!IscartOpen)} className="relative cursor-pointer">
            <FiShoppingBag size={24} />
            {items.length === 0 ? <></> : <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">{items.length}</div>}
          </button>
          {IscartOpen && <CartPopup />}
        </div>
      </div>
    </header>
  );
};

export { Header };
