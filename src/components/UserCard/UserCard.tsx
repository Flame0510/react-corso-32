import { Link, useNavigate } from "react-router-dom";
import type { User } from "../../types/users";

import "./UserCard.scss";

/**
 * Componente per visualizzare una singola card utente
 * Props:
 * - user: oggetto utente con dati da visualizzare
 * - handleDelete: callback per eliminare l'utente dalla lista
 */
const UserCard = ({
    user,
    handleDelete,
}: {
    user: User;
    handleDelete: (id: number) => void;
}) => {
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
};

export default UserCard;
