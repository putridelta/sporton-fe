import OrderConfirmed from "../../component/order-status/order-confirmed";
import OrderSubmitted from "../../component/order-status/order-submitted";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../component/order-status/order-rejected";


const OrderStatus = async ({params}: TPageProps) => {
  const {id}= await params;

  const transaction = await getTransactionById(id);
  console.log("Fetching transaction ID:", id);
  console.log("Transaction", transaction);


  return (
    <main className="bg-gray-100 min-h-[100vh] pt-[60px]">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="text-5xl font-bold text-center">Order Status</h1>
      </div>
      {transaction.status === "pending" && <OrderSubmitted />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderRejected />}
    </main>
  );
};

export default OrderStatus;
