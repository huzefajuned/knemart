import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { toast } from "react-toastify";
import Dropdown from "../Dropdown/Dropdown";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const notify = () => {
    if (query === "") {
      toast.error("search bar is empty...!!");
    } else {
      toast.info(query);
    }
  };

  return (
    <div className="flex border-[1px] md:w-[55%] w-[97%] md:py-2 py-1.5 rounded-md shadow-sm cursor-pointer  absolute top-24 left-3 hover:shadow-md md:static md:flex ">
      <div className="flex flex-row w-[100%] h-full items-center justify-center">
        <div className=" text-md w-auto flex flex-row text-gray-700 border-r-[1px]">
          <Dropdown />
        </div>
        <div className="text-sm w-[100%] h-full text-gray-700 flex flex-row items-center justify-center gap-3 pr-1">
          <div className="w-full  text-lg pl-6 py-2">
            <input
              id="searchItem"
              type="text"
              placeholder="Search products..."
              className=" bg-transparent border-none outline-none h-8 w-full"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>
          <div className=" flex flex-row justify-center items-center bg-gray-400 p-2 rounded-full text-black hover:bg-red-400 hover:text-white">
            <IoMdSearch size={30} onClick={notify} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
