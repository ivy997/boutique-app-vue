export interface IUser {
    userId: number;
    name: string;
    surname: string;
    email: string;
    roles: Array<string>;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IRegisterRequest {
    name: string;
    surname: string;
    email: string;
    address: string;
    password: string;
    confirmPassword: string;
}