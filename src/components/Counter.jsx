import React from "react";
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialValue
        };
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            count: ++prevState.count
        }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            count: --prevState.count
        }));
    };

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "Count: ",
                this.state.count
            ),
            React.createElement(
                "button",
                { onClick: this.handleDecrement },
                "Decrement"
            ),
            React.createElement(
                "button",
                { onClick: this.handleIncrement },
                "Increment"
            )
        );
    }
}



// import {useState} from "react";
//
// export default function Counter({initialValue}) {
//     let [newValue, setNewValue] = useState(initialValue);
//
//     function increment() {
//         setNewValue(++newValue);
//     }
//
//     function decrement() {
//         setNewValue(--newValue);
//     }
//
//     return (
//         <div>
//             <p>Count: {newValue}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }
