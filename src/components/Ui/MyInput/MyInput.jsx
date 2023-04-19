import React from "react";
import Classes from "./MyInput.module.css";
const MyInput = ({ placeholder, ...props }) => {
  return (
    <div className={Classes.wrap}>
      <input maxLength="30" className={Classes.MyInput} {...props} required />
      <label className={Classes.label}>{placeholder}</label>
    </div>
  );
};

export default MyInput;
