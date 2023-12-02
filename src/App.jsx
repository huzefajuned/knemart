import "./App.css";
// import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Errorpage from "./pages/Errorpage";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./components/About/About";
import ProductView from "./components/ProductView/ProductView";
import { useState } from "react";
import Products from "./components/Products/Products";
import Pagination from "./components/Pagination/Pagination";
import AddCart from "./components/Cart/AddCart";
import ShowCart from "./components/Cart/ShowCart";
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="*" element={<Errorpage />} />
          <Route
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/ProductView/:id" element={<ProductView cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/showcart" element={<ShowCart/>} />
        </Routes>
        <Pagination />
      </BrowserRouter>

      {/* Toast Container--
       * dont commene or remove this
       */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
