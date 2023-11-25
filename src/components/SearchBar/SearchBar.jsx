import React from "react";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-md shadow-sm cursor-pointer hover:shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm flex flex-row text-gray-700 px-6 border-r-[1px]">
          <p>All Categories</p>
          <RiArrowDropDownLine size={20} />
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-700 flex flex-row items-center gap-3">
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search products..."
              className=" bg-transparent border-none outline-none h-8"
            />
          </div>
          <div className=" p-2 rounded-full text-black">
            <IoMdSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
