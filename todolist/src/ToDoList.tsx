import React, { useState } from "react";
import { useForm } from "react-hook-form";
const ToDoList = () => {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input placeholder="email" {...register("email")} />
        <input placeholder="password" {...register("password")} />
        <input placeholder="frstName" {...register("frstName")} />
        <input placeholder="secondName" {...register("secondName")} />
        <input placeholder="thirdName" {...register("thirdName")} />
        <button>click</button>
      </form>
    </div>
  );
};

export default ToDoList;
