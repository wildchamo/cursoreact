import React from "react";
import './style/TodoItem.css'


function TodoItem(props) {


  const onDelete =() =>{
    alert("Borraste el todo " + props.text);
  }

  return (
    <li className="TodoItem">
      <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>V</span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

      <span onClick={props.onDelete} className="Icon Icon-delete">X</span>
    </li>
  );
}
export { TodoItem };
