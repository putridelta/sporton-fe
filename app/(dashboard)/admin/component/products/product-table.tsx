
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const productsData = [
    {
        imageUrl: "/images/products/shoes 2-cat 1.svg",
        name: "SportOn Hyperfast Shoes",
        category: "Running",
        price: 289000,
        stock: 2,
    },
     {
        imageUrl: "/images/products/shoes 2-cat 1.svg",
        name: "SportOn Hyperfast Shoes",
        category: "Running",
        price: 289000,
        stock: 2,
    },
     {
        imageUrl: "/images/products/shoes 2-cat 1.svg",
        name: "SportOn Hyperfast Shoes",
        category: "Running",
        price: 289000,
        stock: 2,
    },
];

const ProductTable = ()=> {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData.map((data, index)=> (
                        
                    <tr 
                        key={index}
                        className="border-b border-gray-200 last:border-b-0">
                        <td className="px-6 py-4 font-medium">
                            <div className="flex gap-2 items-center">
                            <Image src={data.imageUrl} alt="product 1" width={52} height={35}/>
                            <span>{data.name}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-medium">{data.category}</td>
                        <td className="px-6 py-4 font-medium">{data.price}</td>
                        <td className="px-6 py-4 font-medium">{data.stock} units</td>
                        <td className="px-6 py-4 font-medium flex items-center gap-3 text-gray-600">
                            <button>
                                <FiEdit2 size={20}/>
                            </button>
                            <button>
                                <FiTrash2 size={20}/>
                            </button>
                               
                        </td>

                    </tr>
                      ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

