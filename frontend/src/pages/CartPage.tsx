import { useGlobalContext } from "../../GlobalContext";
import Title from "../components/Title";
import Container from "../Container";
import binIcon from "../assets/bin_icon.png";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";

const CartPage = () => {
  const {  cartItems, setCartItems } = useGlobalContext();

  const deleteItemFromCart = async (productId: string) => {
    toast.success("Product deleted successfully");
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  return (
    <Container>
      <div className="pt-14 border-t-[0.063rem] border-t-gray-200">
        <div className="mb-3 text-2xl">
          <Title text1="YOUR" text2="CART" />
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item._id}
                className="border-t border-b border-gray-200 py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] gap-4 items-center"
              >
                <div className="flex items-start gap-6">
                  <img src={item.images[0]} className="w-6 sm:w-20" alt="" />
                  <div>
                    <p className="text-sm font-medium sm:text-lg">
                      {item.name}
                    </p>
                    <div className="flex items-center mt-2 gap-5">
                      <p>${item.price.toFixed(2)}</p>
                      <p className="bg-slate-50 border border-gray-200 px-2 sm:px-3 sm:py-1  ">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) => e.target.value}
                  type="number"
                  className="border border-gray-200 p-1 max-w-10 sm:max-w-20 sm:px-2"
                  value={item.quantity}
                />
                <img
                  src={binIcon}
                  className="cursor-pointer w-4 mr-4 sm:w-5"
                  alt="bin icon"
                  onClick={() => deleteItemFromCart(item._id)}
                />
              </div>
            );
          })}
          <CartTotal />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
