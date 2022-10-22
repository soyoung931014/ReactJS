import { hourSelector, minuteState } from "atom";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinuteesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinuteesChange}
        placeholder="Minutes"
      />
      <input type="number" value={hours} placeholder="Hours" />
    </div>
  );
};

export default App;
