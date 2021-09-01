import { IAuthenticationService, AuthenticationService } from "@/services/AuthenticationService";
import { container } from "inversify-props";

export default function buildDependencyContainer(): void {
	container.addTransient<IAuthenticationService>(AuthenticationService);
}