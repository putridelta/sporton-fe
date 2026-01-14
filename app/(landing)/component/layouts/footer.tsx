import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <footer className="bg-dark-alternate mt-[50px] py-[20px]">
        <div className="container mx-auto flex justify-between p-[20px]">
            <div className="relative">
                <Image
                    src="/images/logo-white.svg"
                    alt="logo"
                    width={187}
                    height={44}

                />
                <p className="text-white text-sm py-2 w-100">Engineered for endurance and designed for speed.  Experience gear that moves as fast as you do.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-white">
                <Link href="#">Home
                </Link>
                <Link href="#">Instagram
                </Link>
                <Link href="#">Categories
                </Link>
                <Link href="#">Facebook
                </Link>
                <Link href="#">Explore Products
                </Link>
                <Link href="#">Tiktok
                </Link>
                <Link href="#">About Us
                </Link>
                <Link href="#">Youtube
                </Link>
            </div>

        </div>
        <hr className="border-gray-100"></hr>
        <div className="container mx-auto flex justify-between px-[20px] py-[10px] font-light">
            <p className="text-white text-sm py-2 w-100">SportsOn © 2025 All Rights Reserverd.</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-white">
                <Link href="#">Privacy Policy
                </Link>
                <Link href="#">Terms Conditions
                </Link>        
                </div>
        </div>

    </footer>

}
export default Footer;