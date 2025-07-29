import { createContext, useState, useEffect, type ReactNode } from 'react';

import { loginUser, registerUser } from '../services/authService';
import type { LoginPayloadDTO, RegisterPayload } from '../dto/authentication';
import type UserDTO from '../dto/user';


interface AuthContextType {
    user: UserDTO | null;
    token: string | null;
    login: (loginPayload: LoginPayloadDTO) => Promise<void>;
    logout: () => void;
    register: (loginPayload: RegisterPayload) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (loginPayload: LoginPayloadDTO) => {
        try {
            const { user, token } = await loginUser(loginPayload);
            setUser(user);
            setToken(token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
            //Handle login errors
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const register = async (registerPayload: RegisterPayload) => {try {
            const { user, token } = await registerUser(registerPayload);
            setUser(user);
            setToken(token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
            //Handle login errors
        }
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
