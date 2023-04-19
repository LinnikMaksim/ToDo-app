import React from "react";
import Classes from "./ItemButton.module.css";
import plus from "../../images/checked.png";
import exit from "../../images/ex.png";
import trash from "../../images/delete3.png";

export const ItemButton = ({ remove, completeFun, item }) => {
  return (
    <div className={Classes.wrap}>
      <button onClick={() => completeFun(item)} className={Classes.btn}>
        <img
          className={item.complete ? Classes.exit : Classes.plus}
          src={item.complete ? exit : plus}
          alt={item.complete ? "cancellation" : "plus"}
        />
        <span>Done</span>
      </button>
      <button onClick={() => remove(item)} className={Classes.btn}>
        <img className={Classes.trash} src={trash} alt="trash" />
        <span>Delelte</span>
      </button>
    </div>
  );
};
