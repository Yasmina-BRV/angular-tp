import { RamApiI } from "@/interfaces/ram-api.interface";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class RamApiService {
    private readonly API = "https://rickandmortyapi.com/api/character";
    private http = inject(HttpClient);

    //constructor(private readonly httpClient: HttpClient) {}
    
    getRamapiById(ramapiId:  number): Observable<RamApiI[] | undefined>  {
        const ramData = this.http.get<RamApiI[]>(this.API);
        return ramData;
    }

    getRamapiList(): Observable<RamApiI[] | undefined>  {
        const ramData = this.http.get<RamApiI[]>(this.API);
        return ramData;
    }
}