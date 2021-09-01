import { IAuthenticationService } from "@/services/AuthenticationService";
import { ILoginRequest } from "@/services/AuthenticationService/types";
import { inject } from "inversify-props";
import { Options, prop, Vue } from "vue-class-component";

@Options({
    name: "login",
})
export default class Login extends Vue {
    @inject()
    authenticationService: IAuthenticationService;

    private loginModel: ILoginVueModel = {
        email: null,
        password: null,
    };

    public get loginRequest(): ILoginVueModel {
        return this.loginModel;
    }

    public set loginRequest(value: ILoginVueModel) {
        this.loginModel = value;
    }

    public login() {
        const convertedLoginRequest = this.convertLoginVueModelToService(
            this.loginRequest
        );
        const login = this.authenticationService.login(convertedLoginRequest);
    }

    private convertLoginVueModelToService(
        value: ILoginVueModel
    ): ILoginRequest {
        return {
            email: value.email,
            password: value.password,
        };
    }
}

interface ILoginVueModel {
    email: string;
    password: string;
}
