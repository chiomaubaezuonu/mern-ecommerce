import { useGlobalContext } from "../../GlobalContext";
import Container from "../Container";
import { products } from "../assets/assets";
import Title from "../components/Title";

const CollectionsPage = () => {
  const { isSearchBarOpen, setIsSearchBarOpen } = useGlobalContext();

  return (
    <Container>
      {isSearchBarOpen && (
        <div className="flex items-center justify-center border-t-[0.063rem] border-gray-200 border-b-gray-200 bg-gray-50">
          <div className="w-3/4  flex items-center justify-between px-5 py-2 mx-3 my-5 sm:w-1/2 border border-gray-400 rounded-full">
            <input
              type="text"
              className="text-sm bg-inherit outline-none"
              placeholder="Search..."
            />
            <img src="/images/search.png" className="w-4" alt="search icon" />
          </div>
          <img
            src="/images/search-close.png"
            className="w-3 cursor-pointer"
            alt="search-close"
            onClick={() => setIsSearchBarOpen(false)}
          />
        </div>
      )}
      <div className="flex flex-col pt-10 border-t-[0.063rem] border-gray-200 gap-1 sm:gap-10 sm:flex-row">
        <div className="min-w-60">
          <div>
            <p className="flex gap-2 items-center text-xl my-2 cursor-pointer">
              FILTERS
              <img
                src="/images/back-arrow.png"
                className="h-3 sm:hidden"
                alt="back-arrow"
              />
            </p>
          </div>
          <div className="hidden sm:block border pl-5 py-3 mt-6 border-gray-300">
            <p className="font-medium mb-3 text-sm">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input type="checkbox" className="w-3" value="men" />
                Men
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input type="checkbox" className="w-3" value="women" />
                Women
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input type="checkbox" className="w-3" value="kids" />
                Kids
              </label>
            </div>
          </div>
          <div className="hidden sm:block gap-2 border pl-5 py-3 my-5 mt-6 border-gray-300 text-sm">
            <p className="font-medium mb-3 text-sm">TYPES</p>
            <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
              <label
                htmlFor=""
                className="gap-2 flex cursor-pointer"
              >
                <input type="checkbox" className="w-3" value="topwear" />
                Topwear
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input type="checkbox" className="w-3" value="bottomwear" />
                Bottomwear
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input type="checkbox" className="w-3" value="winterwear" />
                Winterwear
              </label>
            </div>
          </div>
          <button className="hidden sm:block mt-1 rounded text-white bg-black px-4 py-2 hover:bg-gray-900">
            Clear Filters
          </button>
        </div>
        <div>
          <div className="flex justify-between text-base mb-2 sm:text-2xl">
            <div className="flex items-center mb-3 gap-2">
              <Title text1="All" text2="Collections" />
            </div>
            <select className="border-2 text-sm h-9 px-2 border-gray-300">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              return (
                <div key={product._id} className="flex flex-col cureor-pointer overflow-hidden">
                  <img src={product.images[0]} className="tranition ease-in-out hover:scale-110" alt="product" />
                  <p className="text-sm pt-3 pb-1 text-[#374151]">
                    {product.name}
                  </p>
                  <p className="text-sm font-medium text-[#374151]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollectionsPage;
