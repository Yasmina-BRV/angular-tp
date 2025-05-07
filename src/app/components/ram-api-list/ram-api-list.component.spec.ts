import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamApiListComponent } from './ram-api-list.component';

describe('RamApiListComponent', () => {
  let component: RamApiListComponent;
  let fixture: ComponentFixture<RamApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamApiListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
