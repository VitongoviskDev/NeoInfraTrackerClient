import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { user, login } = useAuth();

    useEffect(() => {
        if (user) navigate('/');
    }, [user]);

    const handleLogin = () => {
        login({ login: username, password: password });
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <form action={handleLogin}>
                <div>
                    <label htmlFor="login">Login:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-sm ring ring-gray-400'/>
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-sm ring ring-gray-400'/>
                </div>
                <button type='submit'>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default LoginPage