import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const Products = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //  API baseURL
  const apiBaseURL = "https://fakestoreapi.com";

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get(`${apiBaseURL}/products`);
        setProducts(data.data);
        if (data) {
          toast.success("products loaded");
        }
      } catch (error) {
        console.log("error", error);
        if (error) {
          toast.error("products error to load");
        }
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
            <div
              key={id}
              className="  m-10 w-72  text-center shadow-lg  flex flex-col justify-between items-center"
            >
              <img src={image} alt="" className=" h-72 p-2" />
              <h2 className="text-xl text-black font-bold tracking-widest p-2">
                {title}
              </h2>
              <h3 className="text-xl">Price:{price}</h3>
              <h3 className="text-xl tracking-wide"> Category:{category}</h3>
              <CustomButton
                button={"Add To cart"}
                product={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          );
        })}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Products;
