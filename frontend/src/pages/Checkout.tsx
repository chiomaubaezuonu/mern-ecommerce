import { useGlobalContext } from "../../GlobalContext";
import { shippingFee } from "../components/constants";
import Title from "../components/Title";
import Container from "../Container";
import PaymentMethods from "../components/PaymentMethods";

const Checkout = () => {
  const { subTotal } = useGlobalContext();

  return (
    <Container>
      <div
        className="border-t border-gray-200 
      flex flex-col justify-between sm:flex-row min-h-[80vh] pt-5 sm:pt-14 gap-4"
      >
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="my-3 text-xl sm:text-2xl">
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="First Name"
            />

            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="w-full px-4 py-2 rounded border border-gray-300 "
            placeholder="Email Address"
          />
          <input
            type="text"
            className="w-full px-4 py-2 rounded border border-gray-300 "
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="City"
            />
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="Zip Code"
            />
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 "
              placeholder="Country"
            />
          </div>
          <input
            type="number"
            className="w-full px-4 py-2 rounded border border-gray-300 "
            placeholder="Mobile"
          />
        </div>
        <div className="mt-8">
          <div className="min-w-80 mt-8">
            <div className="w-full">
              <div className="text-2xl">
                <Title text1="CART" text2="TOTAL" />
              </div>
              <div className="mt-2 flex flex-col text-sm gap-2">
                <div className="flex justify-between text-lg font-medium">
                  <p>Sub Total</p>
                  <p>$ {subTotal.toFixed(2)}</p>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-medium">
                  <p>Shipping Fee</p>
                  <p>$ {shippingFee.toFixed(2)}</p>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-2xl font-semibold">
                  <p>Total Amount</p>
                  <p>$ {(subTotal + shippingFee).toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div>
                {" "}
                <Title text1="PAYMENT" text2="Methods" />
              </div>

              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
