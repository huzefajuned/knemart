import { options } from "./data";
import { toast } from "react-toastify";

const Dropdown = () => {
  //
  const getSelectedOption = (event) => {
    const selectedOption = event.target.value;
    toast.info(`Selected: ${selectedOption}`);
  };

  return (
    <select
      className=" outline-none w-full h-full p-3 cursor-pointer"
      onChange={getSelectedOption}
    >
      <option disabled selected>
        --select something--
      </option>
      {options.map((data) => (
        <option key={data.id} value={data.category}>
          {data.category}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
