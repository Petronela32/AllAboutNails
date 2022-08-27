import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreUnghiaNaturalaComponent } from './despre-unghia-naturala.component';

describe('DespreUnghiaNaturalaComponent', () => {
  let component: DespreUnghiaNaturalaComponent;
  let fixture: ComponentFixture<DespreUnghiaNaturalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespreUnghiaNaturalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespreUnghiaNaturalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
