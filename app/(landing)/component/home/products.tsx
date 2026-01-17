import Image from "next/image";
import { FiPlus } from "react-icons/fi";


const productList = [
    {
        name: "SportsOn Hyperfast Shoes",
        subName: "Running",
        imgUrl: "shoes 2-cat 1.svg",
        price: 329000,
    },
    {
        name: "SportsOn Rockets Tennis",
        subName: "Tenis",
        imgUrl: "racket -cat 2.svg",
        price: 999000,
    },
    {
        name: "SportsOn Slowlivin",
        subName: "Running",
        imgUrl: "sportshirt 1-cat 3.svg",
        price: 119000,
    },
    {
        name: "SportsOn HyperSoccer v2",
        subName: "Football",
        imgUrl: "football-shoes-cat 4-5.svg",
        price: 458000,
    },
    {
        name: "SportsOn HyperSoccer v2",
        subName: "Football",
        imgUrl: "football-shoes-cat 4-5.svg",
        price: 458000,
    },
    {
        name: "SportsOn Slowlivin",
        subName: "Running",
        imgUrl: "sportshirt 1-cat 6.svg",
        price: 119000,
    },
    {
        name: "SportsOn Hyperfast Shoes",
        subName: "Running",
        imgUrl: "shoes 2-cat 7.svg",
        price: 329000,
    },
    {
        name: "SportsOn Rockets Tennis",
        subName: "Tenis",
        imgUrl: "racket-cat-8.svg",
        price: 999000,
    },

]

const ProductsSection = () => {
    return (
        <section id="ProductSection" className="container mt-[80px] mx-auto px-[20px]">
            <h2 className="text-4xl font-extrabold text-primary italic mx-auto text-center my-[50px]">OUR <span className="text-black">PRODUCT</span></h2>
            <div className="grid grid-cols-4 gap-12">
                {productList.map((item, index) => (
                    <div key={index} className="">
                        <div className=" relative w-[300px] h-auto shadow-lg p-1">
                        <div className="relative w-full h-[281px] bg-[#F4EBEB] p-3">
                            <Image
                                src={`/images/products/${item.imgUrl}`}
                                alt={item.name}
                                fill
                            />
                        <div className="absolute bg-primary p-3 right-[10px] text-white">
                            <FiPlus />
                        </div>
                        </div>
                        <p className="text-medium text-lg py-3 px-2">{item.name}</p>
                        <div className="flex justify-between text-sm text-gray px-2 mb-6">
                            <p className="">{item.subName} </p>
                            <p className="text-primary">{item.price}</p>
                        </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}
export default ProductsSection;