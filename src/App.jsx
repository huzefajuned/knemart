import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h3 className="bg-pink-500 text-2xl">new change by enayat</h3>
        <h2 className="bg-blue-400  text-2xl">This is changes by Huzefa</h2>
        <h1 className="bg-yellow-500 text-3xl">This is changes by Bushra..</h1>
      </div>
    </>
  );
}

export default App;
