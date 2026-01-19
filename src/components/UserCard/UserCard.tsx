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
    return (
        <li className="user">
            <div className="user__info">
                {/* Nome utente */}
                <p className="user__data user__name">{user.name}</p>
                
                {/* Email utente */}
                <p className="user__data user__email">{user.email}</p>
                
                {/* Bottone per eliminare l'utente */}
                <button className="user__delete" onClick={() => handleDelete(user.id)}>
                    Elimina
                </button>
            </div>
        </li>
    );
};

export default UserCard;
