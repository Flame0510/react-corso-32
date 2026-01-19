import { useEffect, useState } from "react";
import MathAction from "../MathAction/MathAction";

/* const sum = (a: number, b: number): number => {
    return a + b;
};

const sumSingleArg = ({ a, b }: { a: number; b: number }) => {
    return a + b;
}; */

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("NEW COUNT", count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <MathAction type={"-"} setValue={setCount} />
            <MathAction type={"+"} setValue={setCount} />
            <MathAction type={"x"} setValue={setCount} multiplier={4} />
            <MathAction type={"/"} setValue={setCount} multiplier={4} />
        </div>
    );
};

export default Counter;
