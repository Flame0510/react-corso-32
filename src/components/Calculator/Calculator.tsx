import { useEffect, useState } from "react";

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);

    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        // Montaggio
        console.log("CALCULATOR MONTATO");

        const interval = setInterval(() => {
            console.log("INTERVALLO ATTIVO");
        }, 1000);

        // Smontaggio
        return () => {
            console.log("CALCULATOR SMONTATO");

            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1 className="mb-md">Calculator</h1>

            <div>
                <div className="flex gap-sm mb-md">
                    <input
                        className="bg-white text-primary px-sm py-xs rounded-md"
                        type="number"
                        placeholder="First Number"
                        onChange={(e) => setFirstNumber(+e.target.value)}
                    />
                    <input
                        className="bg-white text-primary px-sm py-xs rounded-md"
                        type="number"
                        placeholder="Second Number"
                        onChange={(e) => setSecondNumber(Number(e.target.value))}
                    />
                </div>

                <div className="flex gap-sm justify-center">
                    <button onClick={() => setResult(firstNumber + secondNumber)}>
                        +
                    </button>
                    <button onClick={() => setResult(firstNumber - secondNumber)}>
                        -
                    </button>
                    <button onClick={() => setResult(firstNumber * secondNumber)}>
                        *
                    </button>
                    <button onClick={() => setResult(firstNumber / secondNumber)}>
                        /
                    </button>
                </div>

                <div className="my-md">Result: {result}</div>
            </div>
        </div>
    );
};

export default Calculator;
