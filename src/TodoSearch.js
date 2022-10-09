import React from "react";
import { TodoContext } from "./App/todoContext";
import "./style/TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
    />
  );
}
export { TodoSearch };
