import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

function Counter() {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className=" flex justify-center  text-white">
      <h1 className="text-4xl font-bold ">Count: {count}</h1>

      <div className="flex gap-5">
        <button
          type="button"
          className="px-6 py-2 bg-green-600 text-white rounded "
          onClick={increment}
        >
          Increment
        </button>

        <button
          type="button"
          className="px-6 py-2 bg-red-600 text-white rounded "
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          type="button"
          className="px-6 py-2 bg-gray-600 text-white rounded "
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
