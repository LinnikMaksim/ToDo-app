import React from "react";
import Classes from "./Pagination.module.css";
export const Pagination = ({ mainProps }) => {
  const pageNumbers = [];

  for (let i = 1; i <= mainProps.totalPages; i++) {
    pageNumbers.push(i);
  }
  const prevFunc = () => {
    if (mainProps.currentPage > 1) {
      mainProps.setCurrentPage((prev) => prev - 1);
    }
  };
  const nextFunc = () => {
    if (mainProps.currentPage < pageNumbers.length) {
      mainProps.setCurrentPage((prev) => prev + 1);
    }
  };
  const onPageChange = (pageNumber) => {
    mainProps.setCurrentPage(pageNumber);
  };

  return (
    <ul
      className={`
        ${Classes.pagination} ${pageNumbers.length < 2 ? Classes.hidden : ""}
      `}
    >
      <li
        className={`${Classes.items} ${
          mainProps.currentPage <= 1 ? Classes.disable : " "
        }`}
        onClick={() => prevFunc()}
      >
        {"<"}
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`${Classes.items} ${
            mainProps.currentPage === number ? Classes.active : " "
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </li>
      ))}
      <li
        className={`
          ${Classes.items} ${
          mainProps.currentPage === pageNumbers.length ? Classes.disable : " "
        }
        `}
        onClick={() => nextFunc()}
      >
        {">"}
      </li>
    </ul>
  );
};
