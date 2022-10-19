import { toDoSelector, toDoState } from "atom";
import CreateToDo from "CreateToDo";
import { useRecoilValue } from "recoil";
import ToDo from "ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  // const selectorOutput = useRecoilValue(toDoSelector); // 아래와 같이 구조분해한다.
  // console.log(selectorOutput);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <CreateToDo />
      <h2>To Do</h2>
      {toDo.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      <h2>Doing</h2>
      {doing.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      <h3>Done</h3>
      {done.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
    </div>
  );
};

export default ToDoList;
