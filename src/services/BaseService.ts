import { USER_KEY } from "@/constants";
import { IUser } from "./AuthenticationService";

export class BaseService {
    public getAuthHeader() {
        const user: IUser = JSON.parse(localStorage.getItem(USER_KEY));

        if (user && user.accessToken) {
            return { Authorization: `${user.tokenType} ${user.accessToken}` };
        } else {
            return {};
        }
    }
}
