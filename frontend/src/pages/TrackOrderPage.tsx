import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";
import Container from "../Container";
import { useEffect, useState } from "react";

const TrackOrderPage = () => {
  const { cartItems } = useGlobalContext();
  const { _id: productId } = useParams();

  const [order, setOrder] = useState({});

  useEffect(() => {
    const product = cartItems.find((item) => item._id === productId);
    product ? setOrder(product) : null;
  }, [productId]);

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const formattedDeliveryDate = deliveryDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Container>
      <div className="mt-8">
        <h1 className="uppercase mb-8 text-[#1f1f1f] text-[2.4rem] m-0.5 font-extralight">
          Delivered
        </h1>

        {order && (
          <div className="flex flex-col gap-4 border-[0.063rem] border-[#9ca3af] py-8 px-20">
            <div className="flex flex-col gap-4">
              <span className="text-xs text-[#474747]">Delivery date</span>
              <span className="uppercase text-[2.2rem] font-light text[#1f1f1f]">
                {formattedDeliveryDate}
              </span>
            </div>
            <div className="bg-[#474747] h-[0.6rem] w-[60%] rounded-[0.5rem] mb-[0.6rem]">
            </div>
            <div className="flex justify-between mb-4 w-[60%]"></div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TrackOrderPage;
