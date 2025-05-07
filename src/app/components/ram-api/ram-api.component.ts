import { RamApiService } from '@/services/auth/ram-api.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RamApiI } from '@/interfaces/ram-api.interface';
import {Observable} from 'rxjs';
@Component({
    selector: 'app-ram-api',
    imports: [
        CommonModule
    ],
    templateUrl: './ram-api.component.html',
    styleUrl: './ram-api.component.css'
})

export class RamApiComponent implements OnInit {
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    protected ramApiService = inject(RamApiService);
    ramapi!: Observable<RamApiI[] | undefined>;

    ngOnInit(): void {
        let id: number = Number(this.route.snapshot.params["id"]);

        if(!id){
        this.router.navigateByUrl("error/404");
        }

        this.ramapi = this.ramApiService.getRamapiById(id);
        if(!this.ramapi) {
            this.router.navigateByUrl("ramapis");
        }
    }
}
