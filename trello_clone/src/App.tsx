import { hourSelector, minuteState } from "atom";
import React from "react";
import { useRecoilState } from "recoil";

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        type="number"
        value={minutes}
        onChange={onMinuteesChange}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={hours}
        onChange={onHoursChange}
        placeholder="Hours"
      />
    </div>
  );
};

export default App;
