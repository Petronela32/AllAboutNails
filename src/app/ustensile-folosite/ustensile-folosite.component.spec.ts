import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstensileFolositeComponent } from './ustensile-folosite.component';

describe('UstensileFolositeComponent', () => {
  let component: UstensileFolositeComponent;
  let fixture: ComponentFixture<UstensileFolositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstensileFolositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UstensileFolositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
