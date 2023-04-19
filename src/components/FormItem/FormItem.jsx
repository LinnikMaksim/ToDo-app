import React from "react";
import MyButton from "../Ui/MyButton/MyButton";
import MyInput from "../Ui/MyInput/MyInput";
import Classes from "./FormItem.module.css";
import { useState } from "react";
const FormItem = ({ createItem }) => {
  const [task, setTask] = useState("");
  const [erroeInput, setErrorInput] = useState(false);
  const inputWarning = task.length >= 30 ? "Max input length reached!" : "";
  const handleInputChange = (event) => {
    setTask(event.target.value);
    setErrorInput(false);
  };
  const addNew = (e) => {
    e.preventDefault();
    const newItem = {
      task,
      id: String(Date.now()),
      complete: false,
    };
    if (newItem.task === "") {
      setErrorInput(true);
    } else {
      createItem(newItem);
    }
    setTask("");
  };
  return (
    <form className={Classes.Form} action="">
      <h5 className={Classes.title}>To Do</h5>
      {inputWarning && <div className={Classes.warning}>{inputWarning}</div>}
      {erroeInput && (
        <div className={Classes.warning}>Task cannot be empty!</div>
      )}
      <MyInput
        onChange={handleInputChange}
        value={task}
        placeholder="Enter your task"
      ></MyInput>
      <MyButton onClick={addNew} title="Add new"></MyButton>
    </form>
  );
};

export default FormItem;
