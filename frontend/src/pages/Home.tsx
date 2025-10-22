import "../index.css";
import Container from "../Container";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { useGlobalContext } from "../../GlobalContext";
import { useEffect } from "react";

export interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestSeller: boolean;
}
const Home = () => {
  const { products, setIsUserDetailOpen } = useGlobalContext();
  useEffect(() => {
    setIsUserDetailOpen(false);
  }, []);
  return (
    <Container>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="py-10 sm:py-0 sm:w-1/2 flex flex-col items-center justify-center lg:text-5xl  w-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 font-bold h-[0.125rem] bg-[#414141]"></p>
              <p className="uppercase font-medium text-sm md:text-base text-[#414141]">
                our best sellers
              </p>
            </div>
            <h1 className="text-3xl leading-relaxed prata-regular text-[#414141] font-normal lg:text-5xl">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="uppercase font-semibold text-[#414141] text-sm md:text-base">
                Shop now
              </p>
              <p className="w-8 md:w-11 font-bold h-[0.063rem] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        <img src="/images/hero-img.png" className="sm:w-1/2" alt="hero-img" />
      </div>

      {/* Second section */}
      <div className="my-10">
        <div className="py-8 flex flex-col justify-center items-center">
          <div className="mb-3 flex items-center gap-1 uppercase">
            <p className="text-gray-500 sm:text-[#6B7280] text-2xl sm:text-3xl">
              Latest
            </p>
            <span className="flex items-center gap-1 text-gray-700 font-medium text-2xl sm:text-3xl">
              Collections
              <p className="w-8 sm:w-12 h-[0.063rem] sm:h-[0.125rem] bg-gray-700 sm:bg-[#374151]"></p>
            </span>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base mx-9 sm:mx-32 text-[#4B5563] text-center">
              {" "}
              Step into a world of style with our newest collections, carefully
              curated to bring you the best in fashion, home decor, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.slice(0, 10).map((product: Products) => {
          return (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="flex overflow-hidden flex-col justify-between h-full text-gray-700 cursor-pointer"
            >
              <img
                className="hover:scale-110 transition ease-in-out"
                src={product?.images[0]}
                alt={`${product.name}-${product.images}`}
              />
              <p className="text-sm pb-1 pt-3">{product.name}</p>
              <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
            </Link>
          );
        })}
      </div>
      <div className="my-10">
        <div className="py-8 text-center text-3xl">
          <Title text1="Best" text2="sellers" />
          <p className="w-3/4 text-gray-600 text-xs sm:text-sm md:text-base mx-auto">
            Our best sellers are a curated selection of top-rated items that
            have won over shoppers with their quality, style, and value.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
          {products
            .filter((product) => product.bestSeller === true)
            .map((product) => (
              <Link
                to={`/product/${product._id}`}
                key={product._id}
                className="flex overflow-hidden flex-col justify-between h-full text-gray-700 cursor-pointer"
              >
                <img
                  className="hover:scale-110 transition ease-in-out"
                  src={product.images[0]}
                  alt={`${product.name}-${product.images}`}
                />
                <p className="text-sm pb-1 pt-3">{product.name}</p>
                <p className="text-sm font-medium">
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))
            .splice(0, 5)}
        </div>
      </div>
      <div className="flex flex-col py-8 justify-around gap-12 text-xs text-gray-700 text-center sm:text-sm md:text-base sm:flex-row sm:gap-2 ">
        <div className="">
          <img
            className="m-auto mb-3 w-12"
            src="/images/return-icon.png"
            alt="return"
          />
          <p className="font-semibold mb-2">Easy Return & Exchange Policy</p>
          <p className="text-gray-400">
            Easy Returns/exchanges within 10 days.
          </p>
        </div>
        <div>
          <img
            className="m-auto mb-3 w-12"
            src="/images/quality-icon.png"
            alt="quality-icon"
          />
          <p className="font-semibold mb-2">Our Quality Policy</p>
          <p>Trendify ensures top-quality products.</p>
        </div>
        <div>
          <img
            className="m-auto mb-3 w-12"
            src="/images/earphone.png"
            alt="earphone"
          />
          <p className="font-semibold mb-2">Best Customer Support</p>
          <p className="text-gray-400">We support via email, phone, or chat.</p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-800 font-medium text-2xl"></p>
        <p className="mt-3 text-gray-400"></p>
      </div>
    </Container>
  );
};

export default Home;
