type MathActionProps = {
    type: "+" | "-" | "x" | "/";
    setValue: React.Dispatch<React.SetStateAction<number>>;
    multiplier?: number;
};

const MathAction = ({ type, setValue, multiplier = 2 }: MathActionProps) => {
    const handleClick = () => {
        switch (type) {
            case "+":
            case "-":
                setValue((prevCount: number) => prevCount + (type === "+" ? 1 : -1));
                break;

            case "x":
                setValue((prevCount: number) => prevCount * multiplier);
                break;

            case "/":
                setValue((prevCount: number) => prevCount / multiplier);
        }
    };

    return (
        <button onClick={handleClick}>
            {type}
            {type !== "+" && type !== "-" && multiplier}
        </button>
    );
};

export default MathAction;
