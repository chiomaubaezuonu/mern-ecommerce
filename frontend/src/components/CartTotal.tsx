import { Link } from "react-router-dom";
import { shippingFee } from "./constants";
import Title from "./Title";
import { useGlobalContext } from "../../GlobalContext";
import Button from "./Button";

const CartTotal = () => {
  const { subTotal } = useGlobalContext()
  
  return (
    <div className="my-20 flex justify-end">
      <div className="w-full sm:w-[450px]">
        <div className="text-2xl">
          <Title text1="CART" text2="TOTAL" />
        </div>
        <div className="flex flex-col gap-2 text-sm mt-2">
          <div className="flex justify-between text-lg font-medium">
            <p>Sub Total</p>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-lg font-medium">
            <p>Shipping Fee</p>
            <p>$ {shippingFee.toFixed(2)}</p>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-2xl font-semibold">
            <p>Total Amount</p>
            <p>${subTotal ? (subTotal + shippingFee) .toFixed(2) : 0}</p>
          </div>
          <Link to="/checkout" className="w-full text-end">
            <Button type="primary" size="large" className="py-3 rounded-none px-8 text-sm my-8">PROCEED TO CHECKOUT</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
