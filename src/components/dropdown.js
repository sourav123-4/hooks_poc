import React from "react";
import { Dropdown } from "semantic-ui-react";

function dropdown({ label, options, setSelected, selected }) {
  const handleClick = ({ value }) => {
    setSelected(value);
  };
  return (
    <Dropdown
      onChange={handleClick}
      options={options}
      placeholder={label}
      selection
      value={selected}
    />
  );
}

export default dropdown;
