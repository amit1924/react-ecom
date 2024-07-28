import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

const Sidebar = () => {
  const {
    searchQuery = "",
    setSearchQuery,
    selectedCategory = "",
    setSelectedCategory,
    minPrice = "",
    setMinPrice,
    maxPrice = "",
    setMaxPrice,
    keyword = "",
    setKeyword,
  } = useFilter();
  const [categories, setCategories] = useState([]);
  const keywords = ["apple", "fashion", "watch", "trend", "shoes", "shirt"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(uniqueCategories);

        setCategories(uniqueCategories);
      } catch (e) {
        console.error("Error fetching products", e.message);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : "");
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : "");
  };

  const handleRadioChangeCategories = (category) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    setKeyword("");
  };

  return (
    <div className="w-full mx-auto md:w-64 lg:w-80 p-2 h-full bg-white shadow-md overflow-y-auto">
      <h1 className="text-lg font-bold mb-4">E-Store</h1>

      <section>
        <input
          type="text"
          placeholder="Search products"
          className="w-full border-2 border-gray-300 rounded-md px-2 py-1 mb-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <input
            type="number"
            placeholder="Min"
            className="w-full md:w-1/2 border-2 border-gray-300 rounded-md py-1 px-2 mb-2 md:mb-0 md:mr-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max"
            className="w-full md:w-1/2 border-2 border-gray-300 rounded-md py-1 px-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2">Categories</h2>
          <section>
            {categories.map((category, index) => (
              <label key={index} className="block mb-1 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  onChange={() => handleRadioChangeCategories(category)}
                  className="mr-1 w-[14px] h-[14px] cursor-pointer"
                  checked={selectedCategory === category}
                />
                {category.toUpperCase()}
              </label>
            ))}
          </section>
        </div>

        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2">Keywords</h2>
          <div>
            {keywords.map((kw, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(kw)}
                className={`block w-full mb-1 px-2 py-1 text-left border rounded-md hover:bg-gray-100 transition text-sm ${
                  keyword === kw ? "bg-gray-200" : ""
                }`}
              >
                {kw.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>
      <button
        className="w-full py-1 bg-black text-white rounded-md mt-2 hover:bg-gray-800 transition"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
