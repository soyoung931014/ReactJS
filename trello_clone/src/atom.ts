import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    //get함수는 atom을 가져오게끔 하는 함수
    const minutes = get(minuteState);
    return minutes / 60;
  },
});
