import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolileUnghieiComponent } from './bolile-unghiei.component';

describe('BolileUnghieiComponent', () => {
  let component: BolileUnghieiComponent;
  let fixture: ComponentFixture<BolileUnghieiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolileUnghieiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolileUnghieiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
