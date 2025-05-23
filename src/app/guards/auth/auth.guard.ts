import { AuthService } from "@/services/auth/auth.service";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(!authService.isLoggedIn()) {
        router.navigate(["/auth/login"]);
        return false;
    }
    return true;
}