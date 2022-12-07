import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoListContainer">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchR(props.searchT)}

      {props.searchedTodos.map(renderFunc)}
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
