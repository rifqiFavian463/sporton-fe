import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate px-5 text-sm md:text-base md:px-0 text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-80 md:w-105">
          <Image src="/images/logo-footer.svg" alt="logo sporton footer" width={187} height={44} />
          <p className="mt-8">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do.</p>
        </div>
        <div className="w-72 md:w-105 grid grid-cols-2 ps-3 md:ps-0">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15 text-xs sm:text-base">
        <div className="container mx-auto py-6.5 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
