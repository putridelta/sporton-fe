import PaymentOptions from "../component/payment/payment-options";
import PaymentSteps from "../component/payment/payment-steps";


const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh] pt-[20px]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions/>
          <PaymentSteps/>
        </div>
      </div>
    </main>
  );
};

export default Payment;
