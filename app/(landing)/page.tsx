import Image from "next/image";
import HeroSection from "./component/home/hero";
import CategoriesSection from "./component/home/categories";
import ProductsSection from "./component/home/products";
import { getAllCategories } from "../services/category.service";

export default async function Home() {

  const categories = await getAllCategories();
  return <main>
    <HeroSection/>
    <CategoriesSection categories={categories}/>
    <ProductsSection/>
  </main>;
}

