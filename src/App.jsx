import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>KneMArt</p>
        <p className="bg-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad
          voluptatem commodi in eos, aspernatur voluptatum fugiat adipisci,
          impedit est facilis non architecto quod veritatis dicta minus unde
          officiis libero.
        </p>
      </div>
    </>
  );
}

export default App;
