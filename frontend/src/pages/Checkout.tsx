import { useGlobalContext } from "../../GlobalContext";
import { shippingFee } from "../components/constants";
import Title from "../components/Title";
import Container from "../Container";
import PaymentMethods from "../components/PaymentMethods";
import Input from "../components/Input";
import { useState } from "react";
import { cn } from "@sglara/cn";

interface DeliveryField {
  placeholder: string;
  fieldName: keyof DeliveryData;
  isFullWidth: boolean;
  isRequired?: boolean;
}
interface DeliveryData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  mobile: string;
}
const deliveryFields: DeliveryField[] = [
  {
    placeholder: "First Name",
    fieldName: "firstName",
    isFullWidth: false,
    isRequired: true,
  },
  {
    placeholder: "Last Name",
    fieldName: "lastName",
    isFullWidth: false,
  },
  {
    placeholder: "Email Address",
    fieldName: "emailAddress",
    isFullWidth: true,
  },
  {
    placeholder: "Street",
    fieldName: "street",
    isFullWidth: true,
  },
  {
    placeholder: "City",
    fieldName: "city",
    isFullWidth: false,
  },
  {
    placeholder: "State",
    fieldName: "state",
    isFullWidth: false,
  },
  {
    placeholder: "Zip Code",
    fieldName: "zipCode",
    isFullWidth: false,
  },
  {
    placeholder: "Country",
    fieldName: "country",
    isFullWidth: false,
  },
  {
    placeholder: "Mobile",
    fieldName: "mobile",
    isFullWidth: true,
  },
];

const Checkout = () => {
  const { subTotal } = useGlobalContext();

  const [formData, setFormData] = useState<DeliveryData>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile: "",
  });

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
          <div className="flex gap-3 w-full flex-wrap">
            {deliveryFields.map((deliveryField) => (
              <Input
                key={deliveryField.fieldName}
                value={formData[deliveryField.fieldName]}
                size="medium"
                htmlType="text"
                required={deliveryField.isRequired}
                inputClassName="w-full px-4 border-gray-300 rounded mb-1"
                wrapperClassName={cn({
                  "w-full": deliveryField.isFullWidth,
                  "w-[calc(50%-0.375rem)]": !deliveryField.isFullWidth,
                })}
                placeholder={deliveryField.placeholder}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [deliveryField.fieldName]: e.target.value,
                  })
                }
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="min-w-70 mt-8">
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
