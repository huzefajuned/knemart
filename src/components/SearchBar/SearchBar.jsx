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
    <div className="flex bg-white border-[1px] md:w-auto w-[97%] md:py-2 py-1.5 rounded-md shadow-sm cursor-pointer  absolute top-24 left-3 hover:shadow-md md:static md:flex ">
      <div className="flex flex-row  w-full items-center justify-between">
        <div className="text-md flex w-6/12 flex-row text-gray-700 px-6 border-r-[1px] ">
          <Dropdown />
        </div>
        <div className="text-sm pl-10 w-6/12  text-gray-700 flex flex-row items-center justify-between gap-3">
          <div className="w-full">
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
          <div className=" p-2 rounded-full text-black hover:bg-red-400 hover:text-white">
            <IoMdSearch size={18} onClick={notify} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
