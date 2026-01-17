import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border bg-gray-200 border-gray-200 rounded-lg mb-4 mt-1" placeholder="Type your full name" id="full_name" />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="wa_number"
            className="w-full px-4 py-2 border bg-gray-200 border-gray-200 rounded-lg mb-4 mt-1"
          />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="shipping_address"
            rows={7}
            className="w-full px-4 py-2 border bg-gray-200 border-gray-200 rounded-lg mb-4 mt-1"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
