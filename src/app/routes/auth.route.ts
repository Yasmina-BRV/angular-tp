import {Routes} from "@angular/router";

export const authRoutes: Routes = [
    {
        path: "login", //Chemin relatif (sera enfant à la route "/auth", donc "auth/login")
        loadComponent: () => import("@/components/auth/login/login.component")
        .then(m => m.LoginComponent)
    }
    //Dans ce fichier de routes, on ajoutera les route sspécifiques au login : register, forgot-password, etc
];