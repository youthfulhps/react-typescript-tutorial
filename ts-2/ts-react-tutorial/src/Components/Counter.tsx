import React, { useState, useReducer } from "react";

//useState를 사용하면, 제네릭을 사용하지 않아도 알아서 타입을 유추함
//제네릭을 사용하면 좋은 경우는, null일수도 있고 아닐 수도 있는 경우 사용
//혹은, 데이터 타입이 까다로운 구조인 경우, 데이터 타입이 배열인 경우

// interface Information{
//   name: string,
//   description: string,
// }

// const [info, setInfo] = useState<Information | null>(null);

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  //reducer 함수에서는 state의 입력 타입과 반환 타입이 일치해야 한다.
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled Error");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  // const [count, setCount] = useState<number>(0);
  // const onIncrease = () => setCount(count + 1);
  // const onDecrease = () => setCount(count - 1);

  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>Count : {count}</h1>
      <div>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease}>+1</button>
      </div>
    </div>
  );
}

export default Counter;
