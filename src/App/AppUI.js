import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./todoContext/index";
import {Modal} from "../modal"

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal,setOpenModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

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


      {openModal && (
      <Modal>
        <p>{searchedTodos[0]?.text}</p>
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
