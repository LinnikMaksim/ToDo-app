import React from "react";
import Gear from "../../../images/gear8.png";
import Classes from "./ButtonAddNew.module.css";
export const ButtonAddNew = ({ setActiveModal }) => {
  return (
    <div className={Classes.wrap}>
      <button
        onClick={() => setActiveModal(true)}
        id="btnAdd"
        className={Classes.btn}
      >
        <img className={Classes.btnImg} src={Gear} alt="" />
        <span className={Classes.center}>+</span>
      </button>
      <label htmlFor="btnAdd">
        <span>Add New</span>
      </label>
    </div>
  );
};
