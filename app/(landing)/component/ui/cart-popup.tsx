import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

export const cartList = [
  {
    name: "SportsOn HyperSoccer v2",
    category: "football",
    price: 458000,
    qty: 2,
    imgUrl: "football-shoes-cat 4-5.svg",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    qty: 1,
    imgUrl: "sportshirt 1-cat 3.svg",
  }
]

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, {price, qty}) => total + price * qty,
    0
  );

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {items.length ? items.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={getImageUrl(item.imageUrl)}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
            onClick={() => removeItem(item._id)}
          >
            <FiTrash2 />
          </Button>
        </div>
      )) : (
        <div className="text-center py-5">Your shopping cart is epmty</div>
      )}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
