import { IAuthenticationService } from "@/services/AuthenticationService";
import { IRegisterRequest } from "@/services/AuthenticationService/types";
import { inject } from "inversify-props";
import { Options, Vue } from "vue-class-component";

@Options({
    name: "register"
})
export default class Register extends Vue {
    @inject()
    authenticationService: IAuthenticationService;

    private registerModel: IRegisterVueModel = {
        name: null,
        surname: null,
        email: null,
        address: null,
        password: null,
        confirmPassword: null
    };

    public get registerRequest(): IRegisterVueModel {
        return this.registerModel;
    }

    public set registerRequest(value: IRegisterVueModel) {
        this.registerModel = value;
    }

    public register() {
        const convertedRegisterRequest = this.convertRegisterVueModelToService(
            this.registerRequest
        );
        this.authenticationService.register(convertedRegisterRequest);
    }

    private convertRegisterVueModelToService(
        value: IRegisterVueModel
    ): IRegisterRequest {
        return {
            name: value.name,
            surname: value.surname,
            email: value.email,
            address: value.address,
            password: value.password,
            confirmPassword: value.confirmPassword
        };
    }
}

interface IRegisterVueModel {
    name: string;
    surname: string;
    email: string;
    address: string;
    password: string;
    confirmPassword: string;
}