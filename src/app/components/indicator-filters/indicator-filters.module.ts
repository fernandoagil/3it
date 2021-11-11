import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorFiltersComponent } from './indicator-filters.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndicatorFiltersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    IndicatorFiltersComponent
  ]
})
export class IndicatorFiltersModule { }
