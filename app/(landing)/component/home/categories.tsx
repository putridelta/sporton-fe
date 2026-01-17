import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import Image from "next/image";

const categoriesList = [
    {
        name: "Running",
        imgUrl: "category-running.svg"
    },
    {
        name: "Tennis",
        imgUrl: "category-tenis.svg"
    },

    {
        name: "BasketBall",
        imgUrl: "category-basketball.svg"
    },
    {
        name: "Football",
        imgUrl: "category-football.svg"
    },
    {
        name: "Badminton",
        imgUrl: "category-badminton.svg"
    },
    {
        name: "Swimming",
        imgUrl: "category-swimming.svg"
    },
]
const CategoriesSection = () => {
    return (
        <section id="category-section" className="container my-[80px] mx-auto px-[20px]">
            <div className="flex justify-between ">
                <h2 className="font-bold text-2xl">Browse By Categories</h2>
                <Link href="#" className="flex gap-2 text-primary text-base font-medium">
                    <span className="self-center">See All Categories</span>
                    <FiArrowRight className="self-center" />
                </Link>
            </div>
            <div className="flex flex-row gap-10 pt-2">
              {categoriesList.map((item, index)=> (
                
                <div key={index} className = "bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7D1] rounded-lg p-[40px] ">
                <div className="relative w-[86px] h-[86px]">
                <Image
                src={`/images/categories/${item.imgUrl}`}
                alt={item.name}
                fill
                 />
                 </div>
                 <p className="pt-2 text-center text-xl text-medium text-primary">{item.name}</p>
               </div>
              )) }
             
            </div>
        </section>
    )
}
export default CategoriesSection;