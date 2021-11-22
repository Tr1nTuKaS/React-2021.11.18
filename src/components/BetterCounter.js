import { useEffect, useState } from "react";

function rand() {
  return Math.floor(Math.random() * 6) + 1;
}

function BetterCounter({ startValue }) {
  const [count, setCount] = useState(startValue);
  const [colors, setColors] = useState([]);
  const [randIndx, setRandIndx] = useState(5);

  useEffect(() => {
    setColors(["red", "green", "blue", "violet", "yellow", "tomato"]);
  }, []);

  useEffect(() => {
    setRandIndx(rand(0, colors.length));
  }, [colors, count]);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const rest = () => setCount(0);

  const colorFun = () => {
    if (count > 5) return { color: colors[randIndx] };
 
  };

  return (
    <div>
      <h3 style={colorFun()}>Points: {count}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={rest}>reset</button>
    </div>
  );
}

export default BetterCounter;
