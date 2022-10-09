import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./todoContext/index";

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo  }) => (
          <TodoList>
            {loading && <p>Estamos cargando, no desesperes</p>}
            {error && <p>Hubo un error</p>}
            {!loading && !searchedTodos.length && <p>crea tu primer todo!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
