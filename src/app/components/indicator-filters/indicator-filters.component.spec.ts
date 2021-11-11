import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorFiltersComponent } from './indicator-filters.component';

describe('IndicatorFiltersComponent', () => {
  let component: IndicatorFiltersComponent;
  let fixture: ComponentFixture<IndicatorFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
