import { ILoginRequest, IRegisterRequest, IUser } from "./types";

export interface IAuthenticationService {
    login(request: ILoginRequest): IUser;
    logout(): void;
    register(request: IRegisterRequest): void;
}