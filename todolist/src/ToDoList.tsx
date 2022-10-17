import { useForm } from "react-hook-form";
interface IForm {
  [key: string]: string;
}
const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm();
  const handleValid = (data: IForm) => {
    console.log(data.toDo);
    setValue(data.toDo, "");
  };
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
      </form>
    </div>
  );
};

export default ToDoList;
