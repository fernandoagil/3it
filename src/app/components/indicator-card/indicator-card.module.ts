import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorCardComponent } from './indicator-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndicatorCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IndicatorCardComponent
  ]
})
export class IndicatorCardModule { }
