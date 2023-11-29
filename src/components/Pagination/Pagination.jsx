import React from "react";
import { toast } from "react-toastify";

const Pagination = () => {
  const pages = [];
  for (let i = 1; i <= 100; i++) {
    pages.push(i);
  }

  const pageClicked = (event) => {
    const clickedPage = event.target.value;
    toast.info(`Clicked: ${clickedPage}`);
  };

  return (
    <div className=" bg-white w-full h-20 fixed bottom-0 overflow-scroll no-scrollbar">
      <div className="flex flex-wra w-11/12 h-full m-auto gap-9  overflow-scroll no-scrollbar  ">
        {pages.map((page) => (
          <button
            key={page}
            className="flex items-center justify-center  p-6 w-10 h-10 m-auto rounded-full text-gray-600 shadow-md hover:shadow-lg  hover:text-black"
            onClick={pageClicked}
            value={page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
