import React from "react";
import "./style/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
    />,
    <p>{searchValue}</p>
  ];
}
export { TodoSearch };
