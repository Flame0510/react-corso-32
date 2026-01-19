import { useEffect, useState } from "react";
import MathAction from "../MathAction/MathAction";

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

    return (
        <div>
            <p>Count: {count}</p>
            {/* Operazioni matematiche sul contatore */}
            <MathAction type={"-"} setValue={setCount} />
            <MathAction type={"+"} setValue={setCount} />
            <MathAction type={"x"} setValue={setCount} multiplier={4} />
            <MathAction type={"/"} setValue={setCount} multiplier={4} />
        </div>
    );
};

export default Counter;
