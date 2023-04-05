import React from "react";
import { useTodos } from "../../App/useTodos";
import { TodoHeader } from "../../App/components/TodoHeader";
import { TodoCounter } from "../../App/components/TodoCounter";
import { TodoSearch } from "../../App/components/TodoSearch";
import { TodoList } from "../../App/components/TodoList";
import { TodoItem } from "../../App/components/TodoItem";
import { TodosError } from "../../App/components/TodosError";
import { TodosLoading } from "../../App/components/TodosLoading";
import { EmptyTodos } from "../../App/components/EmptyTodos";
import { TodoForm } from "../../App/components/TodoForm";
import { CreateTodoButton } from "../../App/components/CreateTodoButton";
import { Modal } from "../../App/components/Modal";

function HomePage() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchT={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchR={(searchText) => (
          <p>No hay resultado para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => console.log("Hola,Jose")}
          />
        )}
      />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { HomePage };
