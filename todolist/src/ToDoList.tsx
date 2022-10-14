import { useForm } from "react-hook-form";
const ToDoList = () => {
  const { register, handleSubmit, formState } = useForm();
  console.log(handleSubmit);
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input placeholder="email" {...register("email", { required: true })} />
        <input
          placeholder="password"
          {...register("password", { required: true, minLength: 10 })}
        />
        <input
          placeholder="frstName"
          {...register("frstName", { required: true })}
        />
        <input
          placeholder="secondName"
          {...register("secondName", { required: true })}
        />
        <input
          placeholder="thirdName"
          {...register("thirdName", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
        />
        <button>click</button>
      </form>
    </div>
  );
};

export default ToDoList;
