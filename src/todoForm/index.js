import React from "react";

function ToDoForm() {

    const onCancel= ()=>{

    };

    const onSubmit= ()=>{

    };
  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea placeholder="Cortar la cebolla para el almuerzo"></textarea>
      <div>
        <button type="button" onClick={onCancel}>Cancelar</button>

        <button type="submit" onClick={onSubmit}>Añadir</button>
      </div>
    </form>
  );
}

export { ToDoForm };
