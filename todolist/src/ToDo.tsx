import { IToDo } from "atom";
import React from "react";

const ToDo = ({ text }: IToDo) => {
  return (
    <li>
      {text}
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
