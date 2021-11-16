import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionDataTableComponent } from './nutrition-data-table.component';

describe('NutritionDataTableComponent', () => {
  let component: NutritionDataTableComponent;
  let fixture: ComponentFixture<NutritionDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
