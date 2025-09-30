import { Link, useParams } from "react-router-dom";
import Container from "../Container";
import { useEffect, useState } from "react";
import { Products } from "./Home";
import axios from "axios";
import star from "../assets/star_icon.png";
import dullStar from "../assets/star_dull_icon.png";
import Title from "../components/Title";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../GlobalContext";
import { products } from "../assets/assets";

export interface CartItem extends Products {
  quantity: number;
}
// toast.success("Product added to cart!");
// toast.error("Something went wrong");
// toast.info("This is an info message");
const ProductPage = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  // const [relatedProducts, setRelatedProducts] = useState<Products[]>([]);
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);

  const { cartItems, setCartItems, products } = useGlobalContext();
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    axios
      .get(`https://mern-ecommerce-ngdf.onrender.com/products/${_id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.error(err));
  }, [_id]);

  useEffect(() => {
    product ? setMainImage(product.images[0]) : "";
  }, [product]);

   const addToCart = (productId: string) => {
    if (!selectedSize) {
      toast.warning("Please Select a Size");
      return;
    }
    const alreadyInCart = cartItems.find((product) => product._id === productId);
    if (alreadyInCart) {
      setCartItems((prevItem) =>
        prevItem.map((item) => {
          return item._id === productId && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1, size: selectedSize }
            : item;
        })
      );
      toast.info("Product updated");
    } else if (product) {
      setCartItems((prev) => [
        ...prev,
        { ...product, quantity: 1, size: selectedSize },
      ]);
      toast.success("Product added to cart");
    }
  };

//    const addToCart = (productId: string) => {
//   if (!selectedSize) {
//     toast.warning("Please Select a Size");
//     return;
//   }

//   // ✅ Check the CART, not the PRODUCTS list
//   const existingItem = cartItems.find(
//     (item) => item._id === productId && item.size === selectedSize
//   );

//   if (existingItem) {
//     // ✅ Update quantity
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === productId && item.size === selectedSize
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//     toast.info("Product quantity updated");
//   } else if (product) {
//     // ✅ Add new item
//     setCartItems((prevItems) => [
//       ...prevItems,
//       { ...product, quantity: 1, size: selectedSize },
//     ]);
//     toast.success("Product added to cart");
//   }
// };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        progressClassName="toast-progress-bar"
        autoClose={3000}
      />
      <div className="transition-opacity duration-500 ease-in border-t-2 border-gray-200 opacity-100 pt-10">
        <div className="flex flex-col gap-12 sm:flex-row">
          <div className="flex flex-col-reverse gap-3 sm:flex-row flex-1">
            <div className="flex sm:flex-col justify-between sm:justify-normal w-full sm:w-[18.7%]">
              {product?.images.slice(0, 4).map((image, index) => {
                return (
                  <img
                    src={image}
                    key={index}
                    className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${
                      mainImage === image
                        ? "border-2 border-gray-600 p-2"
                        : "border-none"
                    }  sm:w-full`}
                    alt="product"
                    onClick={() => {
                      setMainImage(image);
                      console.log(index);
                    }}
                  />
                );
              })}
            </div>
            <div className="w-full sm:w-[80%]">
              <img
                src={mainImage}
                className="w-full h-auto"
                alt={`${product?.name}`}
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-medium mt-2">{product?.name}</h1>
            <div className="flex items-center mt-2 gap-1">
              <img src={star} className="w-3" alt="star" />
              <img src={star} className="w-3" alt="star" />
              <img src={star} className="w-3" alt="star" />
              <img src={star} className="w-3" alt="star" />
              <img src={dullStar} className="w-3" alt="star" />
              <p className="pl-2">122</p>
            </div>
            <p className="text-3xl font-medium mt-5">${product?.price}</p>
            <p className="mt-5 text-gray-500">{product?.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {product?.sizes.map((size) => {
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border cursor-pointer ${
                        selectedSize === size
                          ? "border-orange-500"
                          : "border-gray-200"
                      }  rounded-md bg-gray-100`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            {product && (
              <button
                onClick={() => addToCart(product._id)}
                className="py-3 text-white bg-black active:bg-gray-700 px-8 w-[9.7rem] text-sm cursor-pointer"
              >
                ADD TO CART
              </button>
            )}
            <hr className=" mt-8 sm:w-4/5 text-gray-200" />
            <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
              <p>Guaranteed 100% Authentic - Shop with Confidence!</p>
              <p>Enjoy Cash on Delivery - Pay at Your Doorstep!</p>
              <p>
                Hassle-Free Returns &amp; Exchanges - 10 Days, No Questions
                Asked!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex">
            <p className="border border-gray-200 font-bold text-sm px-5 py-3">
              Description
            </p>
            <p className="border border-gray-200 text-sm px-5 py-3">
              Reviews(122)
            </p>
          </div>
          <div className="flex flex-col border border-gray-200 p-6 gap-4 text-gray-500 text-sm">
            <p>
              Elevate your style with our meticulously crafted Trendify quality
              products. Designed with a perfect balance of elegance and
              practicality, these Trendify quality products made from premium
              materials that ensure both durability and comfort.
            </p>
            <p>
              Whether you're dressing up for a special occasion or adding a
              touch of sophistication to your everyday look, the Trendify
              quality products offer unparalleled versatility. Its timeless
              design, coupled with a flawless fit, makes it a must-have addition
              to any wardrobe. Don't miss out on the chance to own a piece that
              combines both form and function—experience the difference today.
            </p>
          </div>
          <div className="my-24">
            <div className="text-3xl text-center py-2">
              <Title text1="RELATED" text2="PRODUCTS" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
              {products
                .filter(
                  (relatedProduct) =>
                    relatedProduct.category === product?.category
                )
                .slice(0, 5)
                .map((relatedProduct) => {
                  return (
                    <Link
                      to={`/product/${relatedProduct._id}`}
                      className="overflow-hidden"
                      key={relatedProduct._id}
                    >
                      <img
                        src={relatedProduct.images[0]}
                        className="transition ease-in-out hover:scale-110"
                        alt=""
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
