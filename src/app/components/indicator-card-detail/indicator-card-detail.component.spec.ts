import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorCardDetailComponent } from './indicator-card-detail.component';

describe('IndicatorCardDetailComponent', () => {
  let component: IndicatorCardDetailComponent;
  let fixture: ComponentFixture<IndicatorCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
