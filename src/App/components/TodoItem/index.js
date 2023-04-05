import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import penIcon from "./penIcon.png";

import "./TodoItem.css";

function TodoItem(props) {
  const onEdit = () => {
    console.log("Hola, Jose");
  };

  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      <img onclick={onEdit()} src={penIcon} />
    </li>
  );
}

export { TodoItem };
