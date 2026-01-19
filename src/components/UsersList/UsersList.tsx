import { useCallback, useEffect, useState } from "react";

import "./UserList.scss";
import type { User } from "../../types/users";
import UserCard from "../UserCard/UserCard";

/**
 * Componente lista utenti
 * Gestisce il fetch, visualizzazione ed eliminazione di utenti da API esterna
 */
const UsersList = () => {
    // Stato per la lista degli utenti
    const [users, setUsers] = useState<User[]>([]);

    // Funzione per recuperare gli utenti dall'API
    // Memoizzata con useCallback per evitare ricreazioni inutili
    const fetchUsers = useCallback(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
    }, []);

    // Funzione per eliminare un utente dalla lista
    // Filtra l'array rimuovendo l'utente con l'id specificato
    const handleDelete = useCallback((id: number) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }, []);

    // Carica gli utenti al mount del componente
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="users">
            <h2>Rubrica Utenti</h2>

            {/* Bottone per ricaricare la lista utenti */}
            <button onClick={fetchUsers}>Ricarica</button>

            {/* Lista degli utenti */}
            <ul className="users__list">
                {users.map((user) => {
                    return (
                        <UserCard key={user.id} user={user} handleDelete={handleDelete} />
                    );
                })}
            </ul>
        </div>
    );
};

export default UsersList;
