import React from "react";

const ToDoList = ({ toDoList, deleteItem, completedTodo }) => {
  console.log(toDoList)
  return (
    <ol>
      {toDoList.map(({id, value, completed}, index) => (
        <li key={id}>
          <input type="checkbox" checked={completed} onChange={() => {completedTodo(id)}}/>
          {value}
          <button
            onClick={() => {
              deleteItem(id);
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ol>
  );
};

export default ToDoList;
