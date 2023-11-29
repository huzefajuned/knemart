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
    <div className=" bg-zinc-100 w-full h-20 sticky bottom-0">
      <div className="flex flex-wra w-11/12 h-full m-auto gap-9 overflow-hidden overflow-x-scroll">
        {pages.map((page) => (
          <button
            key={page}
            className="bg-red-300 flex items-center justify-center  p-6 w-10 h-10 m-auto rounded-full"
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
