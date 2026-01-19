import { useCallback, useEffect, useState } from "react";

import "./UserList.scss";
import type { User } from "../../types/users";

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useCallback(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="users">
            <h2>Users List</h2>
            <ul className="users__list">
                {users.map((user) => {
                    return (
                        <li key={user.id} className="user">
                            <div className="user__info">
                                <p className="user__data user__name">{user.name}</p>
                                <p className="user__data user__email">{user.email}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UsersList;
