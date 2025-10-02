import Container from "../Container";
import { useGlobalContext } from "../../GlobalContext";
import Title from "../components/Title";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";

const Orders = () => {
  const { cartItems } = useGlobalContext();

  return (
    <Container>
      <div className="pt-14 border-t-[0.063rem] border-t-gray-200">
        <div className="mb-3 text-2xl">
          <Title text1="YOUR" text2="ORDERS" />
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item._id}
                className="flex flex-col gap-4 py-4 text-gray-700 border-t border-b border-gray-200 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start text-sm gap-6">
                  <img src={item.images[0]} className="w-6 sm:w-20" alt="" />
                  <div>
                    <p className="font-medium sm:text-base">{item.name}</p>
                    <div className="flex items-center mt-2 gap-3 text-base text-gray-700">
                      <p className="text-lg">${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p className="">Size:&nbsp; {item.size}</p>
                    </div>
                    <p className="mt-2">
                      Date:&nbsp;
                      <span className="text-sm text-gray-400">
                        {new Date(item.createdAt).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between md:w-1/2">
                  <div className="flex items-center gap-2">
                    <p className="h-2 bg-green-500 rounded-full min-w-2"></p>
                    <p className="text-sm md:text-base">Ready for Shipping</p>
                  </div>
                  <Link to={`/trackorder/${item._id}`}>
                    <button className="px-2 py-2 text-sm font-medium border border-gray-200 rounded-sm cursor-pointer">
                      TRACK ORDER
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Orders;
