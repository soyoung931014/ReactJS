import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const changeTodo = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDoError("");
    setTodo(value);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.length < 10) {
      return setToDoError("to do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder="writing todo" onChange={changeTodo} value={todo} />
        <button>click</button>
        <div>{toDoError !== "" ? toDoError : null}</div>
      </form>
    </div>
  );
};

export default ToDoList;
