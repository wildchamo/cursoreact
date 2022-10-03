import React from "react";
import "./style/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return(
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
    />
  );
}
export { TodoSearch };
