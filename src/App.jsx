import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementAsync } from "./redux/counterSlice";
import useCounterStore from "./zustand/useCounterStore";
import './App.css'

export default function App() {
  const countRedux = useSelector((state) => state.counter.count);
  const reduxStatus = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  const { count, increase, decrease, reset: resetZustand, decreaseAsync, isWating } = useCounterStore();

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
    <h1 className="text-4xl font-black mb-10 text-gray-800">
      Day 33 Task: State App
    </h1>

    <div className="w-full max-w-2xl space-y-8">
      {/* Redux Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-purple-500">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Redux Counter: {countRedux}
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <button 
            className="bg-purple-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-600 transition"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button 
            className="bg-purple-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-600 transition"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          {countRedux >= 10 && <p className="text-red-500 font-bold animate-pulse">최대치 도달!</p>}
          <button 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button 
            className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg font-bold hover:bg-purple-200 transition"
            onClick={() => dispatch(incrementAsync())}
          >
            {reduxStatus === "loading" ? "Wait..." : "+ 1s"}
          </button>
        </div>
      </div>

      {/* Zustand Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Zustand Counter: {count}
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
            onClick={decrease}
          >
            -
          </button>
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition"
            onClick={increase}
          >
            +
          </button>
          {count >= 10 && <p className="text-red-500 font-bold animate-pulse">최대치 도달!</p>}
          <button 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition"
            onClick={resetZustand}
          >
            Reset
          </button>
          <button 
            className="bg-blue-100 text-blue-700 px-6 py-2 rounded-lg font-bold hover:bg-blue-200 transition"
            onClick={decreaseAsync}
          >
            {isWating ? "Wait..." : "- 1s"}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

// return (
//   <div>
//     <h1>Day 33 Task: State App</h1>
//     <div>
//       <div>
//         <h2>Redux Counter: {countRedux}</h2>
//         <div>
//           <button onClick={() => dispatch(decrement())}>-</button>
//           <button onClick={() => dispatch(increment())}>+</button>
//           {countRedux >= 10 && <p>최대치 도달!</p>}
//           <button onClick={() => dispatch(reset())}>Reset</button>
//           <button onClick={() => dispatch(incrementAsync())}>
//             {reduxStatus === "loading" ? "Wait..." : "+ 1s"}
//           </button>
//         </div>
//       </div>
//       <div>
//         <h2>Zustand Counter: {count}</h2>
//         <div>
//           <button onClick={decrease}>-</button>
//           <button onClick={increase}>+</button>
//           {count >= 10 && <p>최대치 도달!</p>}
//           <button onClick={resetZustand}>Reset</button>
//           <button onClick={decreaseAsync}>
//             {isWating ? "Wait..." : "- 1s"}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }