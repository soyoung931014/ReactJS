import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const changeTodo = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("todo:", todo);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input placeholder="writing todo" onChange={changeTodo} value={todo} />
        <button>click</button>
      </form>
    </div>
  );
};

export default ToDoList;
