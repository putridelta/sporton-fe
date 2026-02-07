import Image from "next/image"
import ProductActions from "../../component/product-detail/product-actionss";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
    params: Promise< { id: string } >;
};


const ProductDetail = async ({ params }: TPageProps) => {
    const {id} = await params;
    const product = await getProductDetail(id);

    console.log(product);
    return (
        <main className="container mx-auto py-[120] px-7 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-125 flex justify-center items-center">
                <Image
                    src={getImageUrl(product.imageUrl)}
                    alt={product.name}
                    width={550}
                    height={550}
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">
                    {product.category.name}
                </div>
                <p className="leading-loose text-base mb-8">
                   {product.description}
                </p>
                <div className="text-primary text-[32px] font-semibold mb-10">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                    }).format(product.price)}
                </div>
                <ProductActions product = {product} stock = {product.stock}/>

            </div>
        </main>
    )
}
export default ProductDetail;