import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
    {
        name: "Running",
        imageUrl: "/images/categories/category-running.svg",
        description: "All Running items, shoes, shirts"
    },
    {
        name: "Running",
        imageUrl: "/images/categories/category-running.svg",
        description: "All Running items, shoes, shirts"
    },
];

const CategoryTable = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryData.map((data, index) => (

                        <tr
                            key={index}
                            className="border-b border-gray-200 last:border-b-0">
                            <td className="px-6 py-4 font-medium">
                                <div className="flex gap-2 items-center">
                                    <Image src={data.imageUrl} alt="product 1" width={52} height={35} />
                                    <span>{data.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium">{data.description}</td>
                            <td className="px-6 py-4 font-medium flex items-center gap-3 text-gray-600">
                                <button>
                                    <FiEdit2 size={20} />
                                </button>
                                <button>
                                    <FiTrash2 size={20} />
                                </button>

                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default CategoryTable;