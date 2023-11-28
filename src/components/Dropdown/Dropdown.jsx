import { options } from "./data";

const Dropdown = () => {
  return (
    <select className=" outline-none w-full h-full p-3 cursor-pointer">
      {options.map((data) => (
        <option key={data.id} value={data.value}>
          {data.category}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
