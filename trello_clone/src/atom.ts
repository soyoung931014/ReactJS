import { atom, selector } from "recoil";

export const todoList = atom({
  key: "get",
  default: ["a", "b", "c", "d", "e", "f"],
});
