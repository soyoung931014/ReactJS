import { Categories, categoryState, toDoSelector } from "atom";
import CreateToDo from "CreateToDo";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import ToDo from "ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
