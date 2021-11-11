import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorChartComponent } from './indicator-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    IndicatorChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    IndicatorChartComponent
  ]
})
export class IndicatorChartModule { }
