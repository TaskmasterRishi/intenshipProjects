import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  const Incr = () => {
    setTimeout(() => {
      setValue((currentValue) => ++currentValue);
      console.log(value);
    },3000)
  };

  const Decr = () => {
    setValue(value - 1);
    console.log(value);
  };

  const Reset = () => {
    setValue(0);
  };

  const Toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div>
        {visible && (
          <>
            <p>Click Count : {value}</p>
          </>
        )}
        <button onClick={Incr}>Increment</button>
        <button onClick={Decr}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Toggle}>Toggle</button>
      </div>
    </>
  );
};

export default Counter;