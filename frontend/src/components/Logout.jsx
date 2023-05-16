import React from 'react';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
    const { user, login, logout } = useAuth();
    return (
        <div>
            <h1>User email : {user && user.email}</h1>
            {
                user?.email && <button onClick={logout}>Logout</button>
            }

        </div>
    )
}

export default Logout