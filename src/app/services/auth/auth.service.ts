import { User } from "@/models/user.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    private authApiUrl: string = "http://localhost:3000/users";

    // Signal pour suivre l'état d'authentification 
    // // Initialisé à true si un token existe déjà dans localStorage (persistance simple)
    isAuthenticated: WritableSignal<boolean> = signal<boolean>(!!localStorage.getItem("fake-jwt"));

    private authToken: WritableSignal<string | null> = signal<string | null>(localStorage.getItem("fake-jwt"));

    private http = inject(HttpClient);

    private router = inject(Router);

    private toastr: ToastrService = inject(ToastrService);

    showErrorToaster() {
        this.toastr.error("Erreur", "Connexion échouée: Nom d'utilisateur ou mot de passe incorrect."); 
    }
    showSuccesToaster() {
        this.toastr.success("Success", "Connexion réussie !")
    }

    // Lire la valeur du Signal authToken
    getToken(): string | null {
        return this.authToken();
    }

    // Méthode de connexion (simulée)
    login(username: string, password: string): Observable<User[] | undefined> {
        // Dans une vraie app, ce serait un POST vers '/login' avec {username, password}, on ne ferait pas circuler le password en clair dans l’url ! 
        // // Ici, on simule en cherchant l'utilisateur dans db.json
        return this.http.get<User[]>(`${this.authApiUrl}?username=${username}&password=${password}`).pipe(
            tap(users => {
                const user = users[0]; //json-server retourne un tableau, on prend le premier
                if(!user || !user.token) { // Simuler l'échec
                    this.showErrorToaster();
                    this.isAuthenticated.set(false);
                    this.authToken.set(null);
                    throw new Error("Le nom de l'utilisateur ou le mot de passe sont incorrects / L'utilisateur n'existe pas dans la base de données")
                }
                this.showSuccesToaster();
                localStorage.setItem("fake-jwt", user.token); // Simuler la réussite de la connexion
                this.authToken.set(user.token); // Mettre à jour le Signal token
                this.isAuthenticated.set(true); // Mettre à jour le Signal d'authentification
                this.router.navigate(["/ramapis"]); // Rediriger
            })
        );
    }

    // Méthode de déconnexion
    logout(): void {
        localStorage.removeItem("fake-jwt");
        this.authToken.set(null);
        this.isAuthenticated.set(false);
        this.router.navigate(["/auth/login"]);
    }

    // Lire la valeur du Signal isAuthenticated pour les guards
    isLoggedIn() {
        return this.isAuthenticated;
    }
}