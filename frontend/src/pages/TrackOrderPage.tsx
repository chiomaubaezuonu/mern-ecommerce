import { useParams } from "react-router-dom";
import { CartItem, useGlobalContext } from "../../GlobalContext";
import Container from "../Container";
import { useEffect, useMemo, useState } from "react";
import tick from "../assets/tick.jpg";

const TrackOrderPage = () => {
  const { cartItems } = useGlobalContext();
  const { _id: productId } = useParams();

  const [order, setOrder] = useState<CartItem | null>(null);

  useEffect(() => {
    const product = cartItems.find((item) => item._id === productId);
    product ? setOrder(product) : null;
  }, [productId]);

  const { shippingDate, formattedDeliveryDate } = useMemo(() => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    const formattedDeliveryDate = deliveryDate
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toUpperCase();

    const shippingDate = deliveryDate
      .toLocaleString("en-GB", {
        month: "long",
        weekday: "long",
        day: "numeric",
      })
      .toUpperCase();

    return { shippingDate, formattedDeliveryDate };
  }, []);

  return (
    <Container>
      <div className="mt-8">
        <h1 className="uppercase mb-8 text-[#1f1f1f] text-[2.4rem] m-0.5 font-extralight">
          Delivered
        </h1>

        {order && (
          <div>
            <div className="flex flex-col gap-4 border-[0.063rem] border-[#9ca3af] p-4 sm:py-8 sm:px-20">
              <div className="flex flex-col gap-4">
                <span className="text-xs text-[#474747]">Delivery date</span>
                <span className="uppercase text-[2.2rem] font-light text[#1f1f1f]">
                  {formattedDeliveryDate}
                </span>
              </div>
              <div className="bg-[#474747] h-[0.6rem] w-full sm:w-[60%] rounded-[0.5rem] mb-[0.6rem]"></div>
              <div className="flex justify-between mb-4 w-full sm:w-[60%]">
                <span className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-0.5 text-[0.6rem] sm:text-[0.7rem]">
                  <img src={tick} className="w-4" alt="tick" />
                  <p>Order Created</p>
                </span>
                <span className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-[0.4rem] text-[0.6rem] sm:text-[0.7rem]">
                  <img src={tick} className="w-4" alt="tick" />
                  <p>Order Received</p>
                </span>
                <span className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-[0.4rem] text-[0.6rem] sm:text-[0.7rem]">
                  <img src={tick} className="w-4" alt="tick" />
                  <p>Order Arranged</p>
                </span>
                <span className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-[0.4rem] text-[0.6rem] sm:text-[0.7rem]">
                  <img src={tick} className="w-4" alt="tick" />
                  <p>Despatched</p>
                </span>
                <span className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-[0.4rem] text-[0.6rem] sm:text-[0.7rem]">
                  <img src={tick} className="w-4" alt="tick" />
                  <p>Delivered</p>
                </span>
              </div>
            </div>
            <div className="mt-6 border-[0.063rem] border-[#9ca3af]">
              <div className="flex gap-4 p-4 sm:py-8 sm:px-16">
                <div className="flex flex-col justify-between gap-4 sm:ml-4 w-full">
                  <span className="font-medium text-xs text-[#474747]">
                    SHIPPING HISTORY
                  </span>

                  <span>
                    {shippingDate} AT{" "}
                    {new Date(order.createdAt)
                      .toLocaleTimeString("en-GB", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .toUpperCase()}
                  </span>

                  <span>Order created</span>
                  <button className="cursor-pointer text-left underline underline-offset-[0.2rem]">
                    Show Full History
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 border-[0.063rem] border-[#9ca3af]">
              <h2 className="w-full ml-4 sm:ml-16 mt-2 mb-2 font-light text-2xl uppercase">
                Order Details
                <span className="text-[1.2rem] bg-[#efefef] inline-flex justify-center items-center rounded-full h-12 w-12 ml-2">
                  {order.quantity}
                </span>
              </h2>
              <div className="p-4 sm:py-8 sm:px-16 gap-4 flex">
                <div className="sm:w-[47%] flex gap-0.5">
                  <img src={order.images[0]} alt="order" className="mr-4 w-40 h-48 object-cover" />
                  <div className="flex flex-col justify-between gap-2">
                    <p className="uppercase font-light text-sm sm:text-[1.2rem]">{order.name} ({order.price})</p>
                    <p className="opacity-[.6] text-[#474747] font-light text-[0.9rem]">{order.name} ({order.price})</p>
                    <p className="mb-4 ">{order.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TrackOrderPage;
