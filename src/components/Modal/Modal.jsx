import React from "react";
import FormItem from "../FormItem/FormItem";
import Classes from "./Modal.module.css";
import sortSelectFunction from "../Ui/MySelect/sortSelectFunction";
const Modal = ({ modalProps }) => {
  const createItem = (newItem) => {
    modalProps.handleGreenClick();
    const newItems = [...modalProps.items, newItem];
    sortSelectFunction(
      modalProps.selectedSort,
      newItems,
      modalProps.setItems,
      modalProps.setSelectedSort
    );
    modalProps.setActiveModal(false);
  };
  return (
    <div
      className={
        Classes.overlay +
        " " +
        (modalProps.activeModal ? Classes.overlay_active : {})
      }
      onClick={() => modalProps.setActiveModal(false)}
    >
      <div
        className={
          (modalProps.lightTheme ? Classes.lightTheme : Classes.blackTheme) +
          " " +
          Classes.modal
        }
        onClick={(e) => e.stopPropagation()}
      >
        <FormItem createItem={createItem}></FormItem>
      </div>
    </div>
  );
};

export default Modal;
