import { Link } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";
import Container from "../Container";
import Title from "../components/Title";
import { Products } from "../../GlobalContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CollectionsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const { isSearchBarOpen, setIsSearchBarOpen } = useGlobalContext();
  const [checkedBox, setCheckedBox] = useState({
    Men: false,
    Women: false,
    Kids: false,
    Topwear: false,
    Bottomwear: false,
    Winterwear: false,
  });
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios
      .get("https://mern-ecommerce-ngdf.onrender.com/products")
      .then((res) => {
        setProducts(res.data);
        setAllProducts(res.data);
      })

      .catch((err) => console.error(err));
  }, []);

  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedBox((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const sortChangeUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as
      | "name-asc"
      | "name-desc"
      | "price-asc"
      | "price-desc"
      | "createdAt-asc";
    let sortedProducts;
    if (value === "price-asc") {
      sortedProducts = products?.toSorted((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sortedProducts = products?.toSorted((a, b) => b.price - a.price);
    } else if (value === "name-asc") {
      sortedProducts = products?.toSorted((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (value === "name-desc") {
      sortedProducts = products?.toSorted((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else if (value === "createdAt-asc") {
      sortedProducts = products?.toSorted(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    sortedProducts ? setProducts(sortedProducts) : [];
  };
  const filteredProducts = products.filter((product) => {
    const productMatchesSearch =
      product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.name.toLowerCase().includes(searchInput.toLowerCase());
    if (searchInput && !productMatchesSearch) {
      return false;
    }
    const productIsMenCategory = product.category === "Men";
    const productIsWomenCategory = product.category === "Women";
    const productIsKidsCategory = product.category === "Kids";
    const productIsTopwearSubCategory = product.subCategory === "Topwear";
    const productIsBottomwearSubCategory = product.subCategory === "Bottomwear";
    const productIsWinterwearSubCategory = product.subCategory === "Winterwear";
   
    if (checkedBox.Men && productIsMenCategory) {
      return true;
    }
    if (checkedBox.Women && productIsWomenCategory) {
      return true;
    }
    if (checkedBox.Kids && productIsKidsCategory) {
      return true;
    }
    if (checkedBox.Topwear && productIsTopwearSubCategory) {
      return true;
    }
    if (checkedBox.Bottomwear && productIsBottomwearSubCategory) {
      return true;
    }
    if (checkedBox.Winterwear && productIsWinterwearSubCategory) {
      return true;
    }
    if (
      checkedBox.Men ||
      checkedBox.Women ||
      checkedBox.Kids ||
      checkedBox.Topwear ||
      checkedBox.Bottomwear ||
      checkedBox.Winterwear
    ) {
      return false;
    }
    return true;
  });
  console.log(
    products.filter((product) => product.subCategory === "Bottomwear")
  );
  return (
    <Container>
      {isSearchBarOpen && (
        <div className="flex items-center justify-center border-t-[0.063rem] border-gray-200 border-b-gray-200 bg-gray-50">
          <div className="w-3/4  flex items-center justify-between px-5 py-2 mx-3 my-5 sm:w-1/2 border border-gray-400 rounded-full">
            <input
              type="text"
              className="text-sm bg-inherit outline-none z-50"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
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
                <input
                  type="checkbox"
                  className="w-3"
                  name="Men"
                  checked={checkedBox.Men}
                  onChange={toggleCheckbox}
                />
                Men
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  name="Women"
                  onChange={toggleCheckbox}
                  checked={checkedBox.Women}
                />
                Women
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  name="Kids"
                  onChange={toggleCheckbox}
                  checked={checkedBox.Kids}
                />
                Kids
              </label>
            </div>
          </div>
          <div className="hidden sm:block gap-2 border pl-5 py-3 my-5 mt-6 border-gray-300 text-sm">
            <p className="font-medium mb-3 text-sm">TYPES</p>
            <div className="flex flex-col gap-2 text-gray-700 text-sm font-light">
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  name="Topwear"
                  onChange={toggleCheckbox}
                  checked={checkedBox.Topwear}
                />
                Topwear
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  name="Bottomwear"
                  onChange={toggleCheckbox}
                  checked={checkedBox.Bottomwear}
                />
                Bottomwear
              </label>
              <label htmlFor="" className="gap-2 flex cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3"
                  name="Winterwear"
                  onChange={toggleCheckbox}
                  checked={checkedBox.Winterwear}
                />
                Winterwear
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              setCheckedBox({
                Men: false,
                Women: false,
                Kids: false,
                Topwear: false,
                Bottomwear: false,
                Winterwear: false,
              });
              allProducts ? setProducts(allProducts) : [];
            }}
            className="hidden sm:block mt-1 rounded text-white cursor-pointer bg-black px-4 py-2 hover:bg-gray-900"
          >
            Clear Filters
          </button>
        </div>
        <div>
          <div className="flex justify-between text-base mb-2 sm:text-2xl">
            <div className="flex items-center mb-3 gap-2">
              <Title text1="All" text2="Collections" />
            </div>
            <select
              onChange={sortChangeUpdate}
              className="border-2 text-sm h-9 px-2 cursor-pointer border-gray-300"
            >
              <option value="name-asc" className="cursor-pointer">
                Sort by: Name-Asc
              </option>
              <option value="name-desc" className="cursor-pointer">
                Sort by: Name-Desc
              </option>
              <option value="price-asc" className="cursor-pointer">
                Sort by: Low to High
              </option>
              <option value="price-desc" className="cursor-pointer">
                Sort by: High to Low
              </option>
              <option value="createdAt-asc" className="cursor-pointer">
                Sort by: CreatedAt-Asc
              </option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              return (
                <Link to={`/product/${product._id}`} key={product._id}>
                  <div className="flex flex-col cursor-pointer overflow-hidden">
                    <img
                      src={product.images[0]}
                      className="tranition ease-in-out hover:scale-110"
                      alt="product"
                    />
                    <p className="text-sm pt-3 pb-1 text-[#374151]">
                      {product.name}
                    </p>
                    <p className="text-sm font-medium text-[#374151]">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollectionsPage;
