import React from "react";
import Classes from "./MyButton.module.css";

const MyButton = ({ title, ...props }) => {
  return (
    <div className={Classes.wrap}>
      <button className={Classes.MyBtn} {...props}>
        {title}
      </button>
      <span className={Classes.top} />
      <span className={Classes.right} />
      <span className={Classes.left} />
      <span className={Classes.bottom} />
    </div>
  );
};

export default MyButton;
