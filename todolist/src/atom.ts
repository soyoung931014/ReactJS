import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// 아래 셀렉터는 toDoState에 뭉쳐있던 toDos를 분류해주고 있다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((todo) => todo.category === "DOING"),
      toDos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
