import { useForm } from "react-hook-form";
interface IForm {
  [key: string]: string;
}

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
// }

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "naver.com",
    },
  });
  const onValid = (data: IForm) => {
    console.log(data); // {email: 'so@naver.com', password: '33333d', passwordCheck: '33333333', secondName: '33', thirdName: '333333'}
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "password are not same" },
        { shouldFocus: true }
      );
    }
    //  setError("extraError", { message: "Server offline" });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          placeholder="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors?.email?.message}</span>
        <input
          placeholder="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors?.password?.message}</span>
        <input
          placeholder="password check"
          {...register("passwordCheck", {
            required: "passwordCheck is required",
            minLength: {
              value: 5,
              message: "your passwordCheck is too short",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors?.passwordCheck?.message}</span>
        <input
          placeholder="firstName"
          {...register("firstName", {
            required: "write here",
            validate: {
              nosoyoung: (value) =>
                value.includes("soyoung") ? "soyoung is not allowed" : true,
              noNico: (value) =>
                value.includes("nico") ? "nico is not allowed" : true,
            }, // value가 soyoung을 포함하지 않는다면 true를 반환할것이다. false면 focus진행됨
          })}
        />
        <span style={{ color: "red" }}>{errors?.firstName?.message}</span>
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
