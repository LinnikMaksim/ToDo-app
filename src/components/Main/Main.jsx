import React from "react";
import ItemList from "../ItemList/ItemList";
import { Pagination } from "../Pagination/Pagination";
import { EmptyList } from "../EmptyList/EmptyList";
export const Main = ({ mainProps }) => {
  return (
    <main>
      <section>
        {mainProps.items.length !== 0 ? (
          <ItemList mainProps={mainProps}></ItemList>
        ) : (
          <EmptyList title="To-Do List Is Empty" />
        )}
      </section>
      <Pagination mainProps={mainProps} />
    </main>
  );
};
