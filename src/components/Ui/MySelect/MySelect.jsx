import React from "react";
import Clasess from "./MySelect.module.css";
import sortSelectFunction from "../MySelect/sortSelectFunction";
const MySelect = ({ options, defaultValue, headerProps }) => {
  return (
    <select
      className={Clasess.MySelect}
      value={headerProps.value}
      onChange={(event) =>
        sortSelectFunction(
          event.target.value,
          headerProps.items,
          headerProps.setItems,
          headerProps.setSelectedSort
        )
      }
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option
          className={Clasess.Options}
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
