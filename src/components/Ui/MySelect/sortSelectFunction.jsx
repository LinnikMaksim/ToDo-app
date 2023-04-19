const sortSelectFunction = (sortValue, items, setItems, setSelectedSort) => {
  if (!sortValue) {
    setItems(items);
  } else if (
    sortValue.slice(
      sortValue.slice("").length - 3,
      sortValue.slice("").length
    ) !== "Rev"
  ) {
    setSelectedSort(sortValue);
    setItems(
      [...items].sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
    );
  } else {
    setSelectedSort(sortValue);
    const reverseItem = [...items]
      .sort((a, b) =>
        a[sortValue.slice(0, sortValue.length - 3)].localeCompare(
          b[sortValue.slice(0, sortValue.length - 3)]
        )
      )
      .reverse();
    setItems(reverseItem);
  }
};
export default sortSelectFunction;
