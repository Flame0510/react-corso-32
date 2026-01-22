import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types/users";

const SingleData = ({ type, data }: { type: string; data: string }) => (
    <p>
        {type}: <span className="text-primary">{data}</span>
    </p>
);

const User = () => {
    // Recupera il parametro userId dalla URL
    const { userId } = useParams();

    const [user, setUser] = useState<User | undefined>(undefined);

    // Stato per il caricamento, ma non necessario se si usa il controllo su user
    //const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchUser = useCallback(async (id: string) => {
        setUser(undefined);
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();

        // Simulazione di un caricamento asincrono a 0.5 secondi
        setTimeout(() => {
            setUser(data);
        }, 500);

        // Stampa user - undefined come valore aspettato perchè è asincrono
        // setUser non aggiorna immediatamente lo stato, ma programma un aggiornamento per il prossimo ciclo di rendering
        //console.log("User:", user);
    }, []);

    useEffect(() => {
        if (userId) {
            fetchUser(userId);
        }
    }, [userId, fetchUser]);

    // Gestione del caricamento tramite stato user - se non definito, mostra caricamento
    if (!user) return <div>Caricamento...</div>;

    return (
        <div>
            {/* SingleData centralizzato invece di ripetere il codice */}
            <SingleData type="Utente" data={user.name} />
            <SingleData type="Email" data={user.email} />
            <SingleData type="Città" data={user.address.city} />
            <SingleData type="Azienda" data={user.company.name} />

            {/* <p>
                Utente: <span className="text-primary">{user.name}</span>
            </p>
            <p>
                Email: <span className="text-primary">{user.email}</span>{" "}
            </p>
            <p>
                Città: <span className="text-primary">{user.address.city}</span>
            </p>
            <p>
                Azienda:<span className="text-primary"> {user.company.name}</span>
            </p> */}
        </div>
    );
};

export default User;
