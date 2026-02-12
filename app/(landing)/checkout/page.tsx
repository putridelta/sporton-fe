"use client"
import { useState } from "react";
import CartItems from "../component/checkout/cart-items";
import OrderInformation from "../component/checkout/order-information";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";


const Checkout = () => {
  const {push} = useRouter();
  const {customerInfo, setCustomerInfo} = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: ""

  });

  const handlePayment = () => {
    if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
      alert("please fill in fields");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-[50px]">
      <div className="max-w-5xl mx-auto py-15">
        <h1 className="text-5xl font-bold text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment}/>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
