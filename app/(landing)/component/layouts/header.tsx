"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store"; 


const Header = () => {
    const {items} = useCartStore()
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

    return <header className ="fixed w-full z-20 backdrop-blur-2xl bg-white/50">
            <div className="container mx-auto py-7 flex justify-between gap-10">
            <Link href="/">
            <Image
                src="/images/Logo.svg"
                alt="sporton logo"
                width={127}
                height={30}
            />
        </Link>
        <nav className="flex gap-44 font-medium">
            <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2">Home</Link>
            <Link href="#">Category</Link>
            <Link href="#">Products</Link>
        </nav>
        <div className="flex gap-10">
            <FiSearch size={24} />
            <button>
                <div className="relative cursor-pointer" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                    <FiShoppingBag size={24} />
                    {items.length ? (
                    <div className="bg-primary rounded-full w-[14px] h-[14px] absolute -top-1 -right-1 text-[10px] text-center text-white">{items.length}</div>
                    ) : null }
                    </div>
            </button>
            {isCartPopupOpen && <CartPopup/>}

        </div>
    </div>
    </header >;
};

export default Header;