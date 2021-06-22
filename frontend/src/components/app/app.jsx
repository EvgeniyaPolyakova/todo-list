import React, { useEffect, useState } from "react";
import ToDoList from "../list";
import Form from "../form";
import { getTodos, addTodo, deleteTodo, changeCompleted } from "../../api";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const deleteItemHandler = (id) => {
    deleteTodo(id).then(() => {
      const newToDoList = toDoList.filter((item) => item.id !== id);
      setToDoList(newToDoList);
    });
  };

  const onSaveHandler = (value) => {
    const newItem = {
      id: Date.now(),
      value,
      completed: false,
    };

    addTodo(newItem).then(() => {
      setToDoList((prev) => {
        return [...prev, newItem];
      });
    });
  };

  useEffect(() => {
    getTodos().then((res) => setToDoList(res.toDoList));
  }, []);

  const isCompleted = (id) => {
    changeCompleted(id).then(() => {
      setToDoList((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        });
      });
    });
  };

  return (
    <>
      <Form saveToDo={onSaveHandler} />
      <ToDoList
        toDoList={toDoList}
        deleteItem={deleteItemHandler}
        completedTodo={isCompleted}
      />
    </>
  );
};

export default App;
