import { Options, Vue } from "vue-class-component";
import Login from "@/components/LoginContent/index.vue";
import Register from "@/components/RegisterContent/index.vue";

@Options({
    name: "login-register-modal",
    components: { 
        Login,
        Register 
    }
})
export default class LoginRegisterModal extends Vue {
    private get container(): HTMLElement | null {
        return document.getElementById('container');
    }

    public onSignUp(): void {
        this.container?.classList.add("right-panel-active");
    }

    public onSignIn(): void {
        this.container?.classList.remove("right-panel-active");
    }
}