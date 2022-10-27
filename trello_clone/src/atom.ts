import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}
export interface IToDoState {
  [key: string]: ITodo[];
}
export const todoList = atom<IToDoState>({
  key: "toDo",
  default: {
    "to do": [],
    doing: [],
    done: [],
  },
});
