import Image from "next/image"
import ProductActions from "../component/product-detail/product-actionss";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-7 px-7 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-125 flex justify-center items-center">
                <Image
                    src="/images/products/football-shoes-cat 4-5.svg"
                    alt="football shoes"
                    width={550}
                    height={550}
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">SportOn HyperSoccer v2</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">
                    Football
                </div>
                <p className="leading-loose text-base mb-8">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands
                    precision, power, and unrivaled speed on the pitch. Featuring a
                    striking, two-toned black and white design with deep crimson accents,
                    these cleats don't just perform—they make a statement. Experience the
                    future of football footwear with v2's enhanced fit and cutting-edge
                    traction.
                </p>
                <div className="text-primary text-[32px] font-semibold mb-10">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                    }).format(458000)}
                </div>
                <ProductActions />

            </div>
        </main>
    )
}
export default ProductDetail;