"use client";

import { useState } from "react";
import OrderConfirmed from "../../component/order-status/order-confirmed";
import OrderSubmitted from "../../component/order-status/order-submitted";


const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-[100vh]">
      <div className="max-w-5xl mx-auto py-8">
        <h1 className="text-5xl font-bold text-center">Order Status</h1>
      </div>
      {isConfirmed ? <OrderConfirmed/> : <OrderSubmitted/>}
    </main>
  );
};

export default OrderStatus;
