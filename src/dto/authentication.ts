import type UserDTO from "./userDTO";

export interface LoginPayloadDTO {
  login: string;
  password: string;
}

export interface LoginResponseDTO {
  user: UserDTO;
  token: string;
}

//REGISTRATION
export interface RegisterPayload {
  login: string;
  password: string;
}

export interface ResgisterResponseDTO {
  user: UserDTO;
  token: string;
}