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
import { useState } from "react";
import Pagination from "./components/Pagination/Pagination";

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
