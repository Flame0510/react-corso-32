import { useEffect, useState } from "react";

/**
 * Componente contatore con operazioni matematiche
 * Gestisce uno stato numerico con varie operazioni (+, -, *, /)
 */
const Counter = () => {
    // Stato per il valore del contatore
    const [count, setCount] = useState<number>(0);

    // Log del contatore ad ogni cambiamento
    useEffect(() => {
        console.log("NEW COUNT", count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const calc = (action: "+" | "-" | "*" | "/") => {
        let result = count;

        switch (action) {
            case "+":
                result = count + 1;
                break;
            case "-":
                result = count - 1;
                break;
            case "*":
                result = count * 2;
                break;
            case "/":
                result = count / 2;
        }

        if (result < 0) {
            result = 0;
        }

        setCount(result);
        //setCount(Math.floor(Math.max(0, result)));
    };

    return (
        <div>
            <p>Count: {count}</p>
            {/* <p>Counter: {counter}</p> */}

            <button onClick={() => calc("-")}>-</button>
            <button onClick={() => calc("+")}>+</button>
            <button onClick={() => calc("*")}>*2</button>
            <button onClick={() => calc("/")}>/2</button>
            {/* <button
                onClick={() => {
                    counter = counter + 1;
                }}
            >
                counter +
            </button> */}
        </div>
    );
};

export default Counter;
