import Image from "next/image";
import { FiEye } from "react-icons/fi";

const transactionData = [
    {
        Date:"23/02/2026 19:32",
        Customer:"John Doe",
        Contact:"08231223123",
        Total:450000,
        Status:"pending",
    },
     {
        Date:"23/02/2026 13:32",
        Customer:"Delon Marx",
        Contact:"08823291231",
        Total:753000,
        Status:"rejected",
    },
     {
        Date:"23/02/2026 13:32",
        Customer:"Delon Marx",
        Contact:"08823291231",
        Total:753000,
        Status:"paid",
    },
];

type TTransactionTableProps={
    onViewDetails: () => void;
};



const TransactionTable = ({onViewDetails} : TTransactionTableProps) => {
    const getStatusColor = (status:string) => {
        switch (status.toLowerCase()) {
            case "pending": 
                return "bg-yellow-100 text-yellow-600 border-yellow-300";
            case "rejected":
                return "bg-red-100 text-red-600 border-red-300";
            case "paid":
                return "bg-green-100 text-green-600 border-green-300";
                
        }
    };
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-g py-4 font-semibold">Customer</th>
                        <th className="px-g py-4 font-semibold">Contact</th>
                        <th className="px-g py-4 font-semibold">Total</th>
                        <th className="px-g py-4 font-semibold">Status</th>
                        <th className="px-g py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionData.map((data, index)=> (
                        <tr
                            key={index}
                            className="border-b border-gray-200 last:boder-b-0"
                        >
                            <td className="px-6 py-4 font-medium">{data.Date}</td>
                            <td className="px-6 py-4 font-medium">{data.Customer}</td>
                            <td className="px-6 py-4 font-medium">{data.Contact}</td>
                            <td className="px-6 py-4 font-medium">{data.Total}</td>
                            <td className="px-6 py-4 font-medium">
                                <div className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(data.Status)}`}>
                                    {data.Status}</div>
                            </td> 
                            <td className="px-6 px-7 5 flex items-center gap-3 text-gray-600">
                                <button
                                        onClick = {onViewDetails}
                                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md"
                                        >
                                            <FiEye size={18}/>
                                            View Details

                                </button>
        
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;