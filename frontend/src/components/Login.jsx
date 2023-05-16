import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useAuth();
    console.log(user, "user here")
    function handleSubmit(e) {
        e.preventDefault();
        login({ email, password });
        setEmail('');
        setPassword('');
    }
    return (
        <div>
            <h3>Login - {user && user.email}</h3>
            <form onSubmit={handleSubmit}>
                <label>Email : </label><br />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Password : </label><br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type='submit' value='Login' /><br />
            </form>
        </div>
    )
}

export default Login