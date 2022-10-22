import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    //get함수는 atom을 가져오게끔 하는 함수
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    console.log(set);
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
    //1.수정하고픈 atom을 가져온다.
    //2. 새로운 값을 가져온다.
  },
});
