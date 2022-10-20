import { categoryState, toDoState } from "atom";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface IForm {
  [key: string]: string;
}
const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  console.log(category);
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
    setValue("toDo", "");
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

export default CreateToDo;
