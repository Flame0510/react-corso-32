/**
 * Props per il componente MathAction
 * - type: tipo di operazione matematica da eseguire
 * - setValue: funzione per aggiornare il valore del contatore
 * - multiplier: moltiplicatore/divisore per operazioni x e / (default: 2)
 */
type MathActionProps = {
    type: "+" | "-" | "x" | "/";
    setValue: React.Dispatch<React.SetStateAction<number>>;
    multiplier?: number;
};

/**
 * Componente bottone per operazioni matematiche
 * Esegue operazioni aritmetiche sul valore del contatore
 */
const MathAction = ({ type, setValue, multiplier = 2 }: MathActionProps) => {
    // Gestisce il click sul bottone ed esegue l'operazione corrispondente
    const handleClick = () => {
        switch (type) {
            case "+":
            case "-":
                // Incrementa o decrementa di 1
                setValue((prevCount: number) => prevCount + (type === "+" ? 1 : -1));
                break;

            case "x":
                // Moltiplica per il moltiplicatore
                setValue((prevCount: number) => prevCount * multiplier);
                break;

            case "/":
                // Divide per il moltiplicatore
                setValue((prevCount: number) => prevCount / multiplier);
        }
    };

    return (
        <button onClick={handleClick}>
            {type}
            {/* Mostra il moltiplicatore solo per operazioni x e / */}
            {type !== "+" && type !== "-" && multiplier}
        </button>
    );
};

export default MathAction;
