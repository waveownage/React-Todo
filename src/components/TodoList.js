import React from "react";
import Item from "./Todo";

const TodoList = props => {
  return (
    <div>
      <div className="todo-list">
        {props.items.map(item => (
          <Item key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Todo
        </button>
      </div>
    </div>
  );
};
export default TodoList;
