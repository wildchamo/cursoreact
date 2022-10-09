import React, { useContext } from "react";
import { TodoContext } from "./App/todoContext";
import './style/TodoCounter.css';

function TodoCounter(){
    const {totalTodos,completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};



