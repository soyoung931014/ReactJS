import { toDoState } from "atom";
import CreateToDo from "CreateToDo";
import { useRecoilValue } from "recoil";
import ToDo from "ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
