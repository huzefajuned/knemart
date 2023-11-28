import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL } from "../components/Products/Products";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const ProductView = () => {
  const { id } = useParams();
  // console.log(id)
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const data = await axios.get(`${apiBaseURL}/products/${id}`);
        console.log('dataa', data)
        setProduct(data.data);
        // console.log(product)
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [id]);

  const { category, brand, description, price, rating, images } = product;

  return (
    <>
      <div>
        <div>
          <img src={images?.[0]} alt="images" />
          <h2>{brand}</h2>
          <h3>{category}</h3>
        </div>

        {loading && <Loader />}
      </div>
    </>
  );
};

export default ProductView;
