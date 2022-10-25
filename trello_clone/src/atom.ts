import { atom, selector } from "recoil";

export interface IToDoState {
  [key: string]: string[];
}

export const todoList = atom<IToDoState>({
  key: "toDo",
  default: {
    "to do": ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
