import { useEffect, useRef } from "react";

const RefPage = () => {
    // Creazione del ref per l'input
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Esempio di utilizzo del ref per accedere al valore dell'input del DOM
        console.log("Input ref:", inputRef.current);

        // Confronto con l'accesso diretto tramite ID (non raccomandato in React)
        // Meglio usare i ref per accedere agli elementi DOM
        console.log("Input element:", document.getElementById("input"));
    }, []);

    return (
        <div className="flex flex-col gap-md">
            <h1>Ref Page</h1>

            <p>Questa è una pagina di esempio per l'uso di Ref in React.</p>
            <p>useRef accede all'elemento DOM senza dover usare querySelector o simili</p>

            <input
                id="input"
                type="text"
                placeholder="Scrivi qualcosa..."
                className="bg-white text-primary px-sm py-xs rounded-md"
                ref={inputRef}
            />
        </div>
    );
};

export default RefPage;
