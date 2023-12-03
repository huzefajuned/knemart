import { options } from "./data";
import { toast } from "react-toastify";

const Dropdown = () => {
  //
  const getSelectedOption = (event) => {
    const selectedOption = event.target.value;
    toast.info(`Selected: ${selectedOption}`);
  };

  return (
    <div className="w-auto">
      <select
        className="outline-none w-auto cursor-pointer text-gray-500 p-3"
        onChange={getSelectedOption}
      >
        <option selected="selected">All</option>
        {options.map((data) => (
          <option key={data.id} value={data.category}>
            {data.category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
