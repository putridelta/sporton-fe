import Image from "next/image";
import HeroSection from "./component/layouts/home/hero";
import CategoriesSection from "./component/layouts/home/categories";
import ProductsSection from "./component/layouts/home/products";

export default function Home() {
  return <main>
    <HeroSection/>
    <CategoriesSection/>
    <ProductsSection/>
  </main>;
}

