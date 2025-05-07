import { Component, inject, OnInit } from '@angular/core';
import { RamApiDetailsComponent } from '../ram-api-details/ram-api-details.component';
import { RamApiService } from '@/services/auth/ram-api.service';
import { RamApiI } from '@/interfaces/ram-api.interface';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-ram-api-list',
    imports: [
        RamApiDetailsComponent
    ],
    templateUrl: './ram-api-list.component.html',
    styleUrl: './ram-api-list.component.css'
})
export class RamApiListComponent implements OnInit{
    private ramapiService = inject(RamApiService);

    ramApiDataList!:Observable<RamApiI[] | undefined>;

    ngOnInit(): void {
        this.ramApiDataList = this.ramapiService.getRamapiList();
    }
}
