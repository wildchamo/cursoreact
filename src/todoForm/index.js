import React from "react";
import { TodoContext } from "../App/todoContext";

function ToDoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState();
  const { AddTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false)
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    AddTodo(newTodoValue);
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>

        <button type="submit" onClick={onSubmit}>
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
