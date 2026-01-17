import Image from "next/image";
import HeroSection from "./component/home/hero";
import CategoriesSection from "./component/home/categories";
import ProductsSection from "./component/home/products";

export default function Home() {
  return <main>
    <HeroSection/>
    <CategoriesSection/>
    <ProductsSection/>
  </main>;
}

