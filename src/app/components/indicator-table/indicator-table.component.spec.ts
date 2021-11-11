import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorTableComponent } from './indicator-table.component';

describe('IndicatorTableComponent', () => {
  let component: IndicatorTableComponent;
  let fixture: ComponentFixture<IndicatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
