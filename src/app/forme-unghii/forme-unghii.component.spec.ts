import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeUnghiiComponent } from './forme-unghii.component';

describe('FormeUnghiiComponent', () => {
  let component: FormeUnghiiComponent;
  let fixture: ComponentFixture<FormeUnghiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormeUnghiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormeUnghiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
