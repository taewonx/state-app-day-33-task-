import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import useCounterStore from "./zustand/useCounterStore";

export default function App() {
  const countRedux = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { count, increase, decrease, reset: resetZustand } = useCounterStore();

  return (
    <div>
      <h2>Redux Counter: {countRedux}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <h2>Zustand Counter: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={resetZustand}>Reset</button>
    </div>
  );
}

