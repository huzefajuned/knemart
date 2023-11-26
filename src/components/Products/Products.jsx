import React, { useEffect, useState } from "react";
import { DummyData } from "../../Datas/Data";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";
import Loader from "../Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //  API baseURL
  const apiBaseURL = "https://fakestoreapi.com";

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get(`${apiBaseURL}/products`);
        setProducts(data.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <div className=" bg-white flex flex-row flex-wrap cursor-pointer justify-center">
        {products.map((product, index, arr) => {
          // key descr.... of  a single  product object----
          const { id, category, description, image, price, title, rating } =
            product;
          return (
            <div id={id} className="  m-10 w-72  text-center shadow-lg">
              <img src={image} alt="" className=" h-72 p-7" />
              <h2 className="text-xl text-black font-bold tracking-widest p-2">
                {title}
              </h2>
              <h3 className="text-xl">Price:{price}</h3>
              <h3 className="text-xl tracking-wide"> Category:{category}</h3>
              <CustomButton button={"Add To cart"} />
            </div>
          );
        })}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Products;
