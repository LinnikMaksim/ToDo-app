import { React } from "react";
import Item from "../Item/Item";
import { EmptyList } from "../EmptyList/EmptyList";

const ItemList = ({ mainProps }) => {
  function prevPage() {
    if (mainProps.currentItems.length === 1 && mainProps.currentPage > 1) {
      mainProps.setCurrentPage((prev) => prev - 1);
    }
  }
  const completeFun = (item) => {
    mainProps.handleGreenClick();
    mainProps.setItems(
      mainProps.items.map((thisItem) => {
        if (thisItem.id === item.id) {
          thisItem.complete = !thisItem.complete;
        }

        return thisItem;
      })
    );
    prevPage();
  };
  const removeItem = (thisItem) => {
    mainProps.handleRedClick();
    mainProps.setItems(mainProps.items.filter((i) => i.id !== thisItem.id));
    prevPage();
  };

  return (
    <>
      {mainProps.currentItems.length === 0 ? (
        <EmptyList title="This List Is Empty" />
      ) : (
        ""
      )}

      {mainProps.currentItems.map((item, index) => (
        <Item
          key={item.id}
          completeFun={completeFun}
          remove={removeItem}
          number={index + 1 + mainProps.indexItem}
          item={item}
        ></Item>
      ))}
    </>
  );
};

export default ItemList;
