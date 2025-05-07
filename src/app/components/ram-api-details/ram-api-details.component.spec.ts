import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamApiDetailsComponent } from './ram-api-details.component';

describe('RamApiDetailsComponent', () => {
  let component: RamApiDetailsComponent;
  let fixture: ComponentFixture<RamApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamApiDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
