import React from "react";
// export default class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: this.props.initialValue
//         };
//     }
//
//     handleIncrement = () => {
//         this.setState(prevState => ({
//             count: ++prevState.count
//         }));
//     };
//
//     handleDecrement = () => {
//         this.setState(prevState => ({
//             count: --prevState.count
//         }));
//     };
//
//     render() {
//         return React.createElement(
//             "div",
//             null,
//             React.createElement(
//                 "p",
//                 null,
//                 "Count: ",
//                 this.state.count
//             ),
//             React.createElement(
//                 "button",
//                 { onClick: this.handleDecrement },
//                 "Decrement"
//             ),
//             React.createElement(
//                 "button",
//                 { onClick: this.handleIncrement },
//                 "Increment"
//             )
//         );
//     }
// }

import { useState } from "react";

interface ICounter {
  initialValue: number;
}

export default function Counter({ initialValue }: ICounter) {
  let [newValue, setNewValue] = useState<number>(initialValue);

  function increment(): void {
    setNewValue(++newValue);
  }

  function decrement(): void {
    setNewValue(--newValue);
  }

  return (
    <div role={"CounterComponent"}>
      <p>Count: {newValue}</p>
      <button role={"IncrementButton"} onClick={increment}>
        Increment
      </button>
      <button role={"DecrementButton"} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
