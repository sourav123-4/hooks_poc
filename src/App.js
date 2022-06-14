import "./App.css";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import { useState, useRef } from "react";
function App() {
  const options = [
    {
      value: "red",
      label: "this is red",
    },
    {
      value: "green",
      label: "this is green",
    },
    {
      value: "blue",
      label: "this is blue",
    },
  ];
  const [selected, setSelected] = useState();
  const ref = useRef();
  console.log(selected);
  console.log(ref.current);
  return (
    <div ref={ref}>
      <Search />
      <br />
      {/* <Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
      /> */}
      <Translate />
    </div>
  );
}

export default App;
