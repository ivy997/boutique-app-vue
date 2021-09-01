import axios from "axios";
import { injectable } from "inversify-props";
import { IAuthenticationService } from "./IAuthenticationService";
import { ILoginRequest, IRegisterRequest, IUser } from "./types";
import { BASE_URL, USER_KEY } from "@/constants";
import { BaseService } from "../BaseService";

@injectable()
export class AuthenticationService
    extends BaseService
    implements IAuthenticationService
{
    public login(loginRequest: ILoginRequest): IUser {
        let userResponse: IUser = null;
        axios.post(`${BASE_URL}login`, loginRequest).then((response) => {
            const data = response.data as IUser;

            if (data.accessToken) {
                userResponse = {
                    accessToken: data.accessToken,
                    tokenType: data.tokenType,
                    userId: data.userId,
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    roles: data.roles,
                    refreshToken: data.refreshToken,
                };
            }

            localStorage.setItem(USER_KEY, JSON.stringify(userResponse));
        });

        return userResponse;
    }

    public logout() {
        localStorage.removeItem(USER_KEY);
    }

    public register(registerRequest: IRegisterRequest): void {
        axios.post(`${BASE_URL}register`, registerRequest);
    }
}
