import "./App.css";
// import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Errorpage from "./pages/Errorpage";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="*" element={<Errorpage/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />{" "} */}


    </>
  );
}

export default App;
