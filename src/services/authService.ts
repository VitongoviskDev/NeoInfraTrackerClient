import type { LoginPayloadDTO, LoginResponseDTO, RegisterPayload, ResgisterResponseDTO } from "../dto/authentication";
import api from "./axios";

export const loginUser = async (userData: LoginPayloadDTO): Promise<LoginResponseDTO> => {
    return {
        user: {
            id: '1',
            name: 'Vitor Campos',
            email: userData.login,
            roles: ['ROLE_ADMIN'],
            profileImage: '',
            site: {
                name: "Mogi das Cruzes",
                abreviation: "MGC"
            }
        },
        token: 'senha:' + userData.password
    }
    const response = await api.post<LoginResponseDTO>('/api/login', userData);
    return response.data;
};

export const registerUser = async (userData: RegisterPayload): Promise<ResgisterResponseDTO> => {
    return {
        user: {
            id: '1',
            name: 'Vitor Campos',
            email: userData.login,
            roles: ['ROLE_ADMIN'],
            profileImage: '',
            site: {
                name: "Mogi das Cruzes",
                abreviation: "MGC"
            }
        },
        token: 'senha:' + userData.password
    }
    const response = await api.post<LoginResponseDTO>('/api/register', userData);
    return response.data;
}