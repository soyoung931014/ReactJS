import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
// typescript에게 toDoState은 toDo들의 배열이라는 것을 알려줄것이다. 이를 위해 타입스크립트에게
//  toDo가 어떻게 생긴지 알려줄 인터페이스 하나를 만들 것이다.
interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

interface IForm {
  [key: string]: string;
}
const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // 이제 typescript는 우리의 toDos가 여기에 있는 IToDo 객체로 이루어진 배열임을 안다.

  const { register, handleSubmit, setValue } = useForm();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(handleValid)}
      >
        <input
          placeholder="write to do"
          {...register("toDo", {
            required: "plz write a To Do",
          })}
        />

        <button>click</button>
        {toDos.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </form>
    </div>
  );
};

export default ToDoList;
