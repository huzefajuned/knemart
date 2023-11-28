import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { toast } from "react-toastify";

const SearchBar = ({ products, setProducts }) => {
  const [query, setQuery] = useState("");
  const notify = () => {
    if (query === "") {
      toast.error("search bar is empty...!!");
    } else {
      toast.info(query);
    }
  };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-md shadow-sm cursor-pointer hover:shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="text-md flex flex-row text-gray-700 px-6 border-r-[1px]">
          {/* // */}
          <select className=" outline-none w-full h-full p-3 cursor-pointer">
            {/* {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.category}
              </option>
            ))} */}
          </select>
          {/* <RiArrowDropDownLine size={20} /> */}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-700 flex flex-row items-center gap-3">
          <div className="hidden sm:block">
            <input
              id="searchItem"
              type="text"
              placeholder="Search products..."
              className=" bg-transparent border-none outline-none h-8"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>
          <div className=" p-2 rounded-full text-black hover:bg-red-400 hover:text-white">
            <IoMdSearch size={18} onClick={notify} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
