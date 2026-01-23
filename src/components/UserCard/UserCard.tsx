import { Link, useNavigate } from "react-router-dom";
import type { User } from "../../types/users";

import "./UserCard.scss";
import { memo } from "react";

/**
 * Componente per visualizzare una singola card utente
 * Props:
 * - user: oggetto utente con dati da visualizzare
 * - handleDelete: callback per eliminare l'utente dalla lista
 */
const UserCard = memo(
    ({ user, handleDelete }: { user: User; handleDelete: (id: number) => void }) => {
        console.log("Rendering UserCard for user:", user);

        // Navigatore per la navigazione programmatica con hook useNavigate()
        //const navigate = useNavigate();

        // Navigazione programmatica (esempio commentato)
        // const navigateToUser = () => navigate(`/users/${user.id}`);

        // Navigazione programmatica con bottone
        // <button onClick={() => navigate(`/users/${user.id}`)}>Vai all'utente</button>;

        return (
            <li className="user">
                {/* Navigazione programmatica esempio con Link (migliore per questo caso) */}
                <Link to={`/users/${user.id}`} className="user__info">
                    <div className="bg-button-dark text-white p-sm rounded-md">
                        {/* Nome utente */}
                        <p className="user__data user__name">{user.name}</p>

                        {/* Email utente */}
                        <p className="user__data user__email">{user.email}</p>

                        {/* Bottone per eliminare l'utente */}
                        <button
                            className="user__delete"
                            onClick={(e) => {
                                e.preventDefault(); // Previene la navigazione al click sul bottone

                                // Chiamata callback per eliminare l'utente
                                handleDelete(user.id);
                            }}
                        >
                            Elimina
                        </button>
                    </div>
                </Link>
            </li>
        );
    },
    (prevProps, nextProps) => {
        // Evita il rerender se le props user e handleDelete non sono cambiate

        //console.log("Comparing UserCard props:", prevProps.user, nextProps.user);

        // Confronto superficiale delle props
        // Se true, attiva il memo e previene il rerender
        // Se false, disattiva il memo e forza il rerender
        return (
            prevProps.user === nextProps.user && // Se user non cambia
            prevProps.handleDelete === nextProps.handleDelete // Se handleDelete non cambia
        );

        //return true; // Attiva il memo e previene il rerender
        //return false; // Disattiva il memo e renderizza sempre
    },
);

export default UserCard;
