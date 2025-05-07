import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamApiComponent, } from './ram-api.component';

describe('RamApiComponent', () => {
  let component: RamApiComponent;
  let fixture: ComponentFixture<RamApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
