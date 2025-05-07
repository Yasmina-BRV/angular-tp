import { RamApiI } from '@/interfaces/ram-api.interface';
import { RamApiService } from '@/services/auth/ram-api.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ram-api-details',
  imports: [
    CommonModule
  ],
  templateUrl: './ram-api-details.component.html',
  styleUrl: './ram-api-details.component.css'
})

export class RamApiDetailsComponent {
  protected ramapiService = inject(RamApiService);
  private router = inject(Router);
  @Input({ required: true}) 
  ramapi!: RamApiI;

  onShowRamapi(id: number): void{
    this.router.navigateByUrl(`ramapis/ramapi/${id}`);
  }
}
