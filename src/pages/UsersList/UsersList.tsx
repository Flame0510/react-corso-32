import { useCallback, useEffect, useMemo, useState } from "react";

import "./UserList.scss";
import type { User } from "../../types/users";
import UserCard from "../../components/UserCard/UserCard";

/**
 * Componente lista utenti
 * Gestisce il fetch, visualizzazione ed eliminazione di utenti da API esterna
 */
const UsersList = () => {
    // Stato per la lista degli utenti
    // undefined indica che i dati non sono ancora stati caricati
    const [users, setUsers] = useState<User[] | undefined>(undefined);

    // Stato derivato per il caricamento
    // useMemo per evitare ricalcoli inutili
    // useMemo memorizza il valore di isLoading finché users non cambia
    // Non più usato perché gestito direttamente nel render
    //const isLoading = useMemo(() => !users, [users]);

    // Stato per la ricerca
    const [search, setSearch] = useState<string>("");

    // Funzione per recuperare gli utenti dall'API
    // Memoizzata con useCallback per evitare ricreazioni inutili
    const fetchUsers = useCallback(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        // Simula ritardo di 1 secondo
        setTimeout(() => {
            setUsers(data);
        }, 1000);
    }, []);

    // Funzione per eliminare un utente dalla lista
    // Filtra l'array rimuovendo l'utente con l'id specificato
    const handleDelete = useCallback((id: number) => {
        setUsers((prevUsers) => prevUsers?.filter((user) => user.id !== id));
    }, []);

    // Carica gli utenti al mount del componente
    useEffect(() => {
        fetchUsers();
    }, []);

    // Gestione del caricamento tramite stato users
    if (!users) return <p>Caricamento...</p>;

    return (
        <div className="users">
            <h2>Rubrica Utenti</h2>

            <div className="flex gap-sm my-md">
                {/* Bottone per ricaricare la lista utenti */}
                <button onClick={fetchUsers}>Ricarica</button>

                {/* Input di ricerca utenti */}
                <input
                    type="text"
                    placeholder="Cerca utente..."
                    className="bg-white text-primary px-sm py-xs rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button onClick={() => setSearch("")}>x</button>
            </div>

            {/* Lista degli utenti */}
            <ul className="users__list grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
                {users
                    .filter(
                        ({ name, email }: User) =>
                            // Filtra utenti in base al nome o email che includono la stringa di ricerca
                            // toLowerCase per ricerca case-insensitive
                            name.toLowerCase().includes(search.toLowerCase()) ||
                            email.toLowerCase().includes(search.toLowerCase()),
                    )
                    .map((user) => {
                        // Renderizza una scheda utente per ogni utente filtrato
                        return (
                            <UserCard
                                key={user.id}
                                user={user}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

export default UsersList;
