import { AuthService } from "@/services/auth/auth.service";
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const authToken = authService.getToken(); //Lire le token via le service (qui lit le Signal)

    if(authToken) { // Cloner la requête et ajouter l'en-tête Authorization si le token existe
        const authReq = req.clone({
            headers: req.headers.set("Authorization", `Bearer ${authToken}`)
        });
        return next(authReq); // Passer la requête modifiée
    }

    return next (req); // Sinon passer la requête originale
};