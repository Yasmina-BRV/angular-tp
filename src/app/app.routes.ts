import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const appTitle = "RamApiApp";

export const routes: Routes = [
    {
        path: "",
        title: `Accueil - ${ appTitle }`,
        loadComponent: () => import("@/components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
    },
    {
        path: "ramapis",
        title: `Liste des personnages de  - ${ appTitle}`,
        canActivate: [AuthGuard],
        loadComponent: () => import("@/components/ram-api-list/ram-api-list.component").then(m => m.RamApiListComponent)
    },
    {
        path: "ramapis/ramapi/:id",
        title: `Ramapi - ${ appTitle}`,
        loadComponent: () => import("@/components/ram-api/ram-api.component").then(m => m.RamApiComponent)
    },
    {
        path: "auth",
        loadChildren: () => import("./routes/auth.route").then(m => m.authRoutes)
    },
    {
        path: "error/404",
        title: `Error 404 - ${ appTitle }`,
        loadComponent: () => import("@/components/error-page/error-page.component").then(m => m.ErrorPageComponent)
    },
    {
        path:"**",
        redirectTo: "error/404"
    }
];
