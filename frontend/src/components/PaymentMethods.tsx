import stripeLogo from "../assets/stripe_logo.png";
import razorpay from "../assets/razorpay_logo.png";
import { Link } from "react-router-dom";

const PaymentMethods = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border border-gray-300">
          <p className="rounded-full w-3.5 h-3.5 border border-gray-200"></p>
          <img src={stripeLogo} className="h-5 mx-4" alt="stripe_logo" />
        </div>
        <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border border-gray-300">
          <p className="rounded-full w-3.5 h-3.5 border border-gray-200"></p>
          <img src={razorpay} className="h-5 mx-4" alt="razorpay_logo" />
        </div>
        <div className="flex items-center gap-3 p-2 px-3 cursor-pointer border border-gray-300">
          <p className="rounded-full bg-green-500 w-3.5 h-3.5 border border-gray-200"></p>
          <p className="mx-3 text-sm font-medium text-gray-500">
            CASH ON DELIVERY
          </p>
        </div>
      </div>
      <Link to="/orders" className="w-full mt-8 text-end">
        <button className="px-16 py-3 text-sm cursor-pointer text-white bg-black active:bg-gray-800">
          PLACE ORDER
        </button>
      </Link>
    </div>
  );
};

export default PaymentMethods;
