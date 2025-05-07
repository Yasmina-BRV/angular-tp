import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, Observable } from 'rxjs';

@Component({
    selector: 'app-error-page',
    imports: [
        CommonModule
    ],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
    interval$!: Observable<number>;

    private router = inject(Router);

    onRollback(): void {
        this.router.navigateByUrl("");
    }

    ngOnInit(): void {
        this.interval$ = interval(1000).pipe(
            map(value => value * 2),
            
        );
    }

}
