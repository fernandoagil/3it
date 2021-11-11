import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageIndicatorRoutingModule } from './page-indicator-routing.module';
import { PageIndicatorComponent } from './page-indicator.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { IndicatorCardDetailModule } from 'src/app/components/indicator-card-detail/indicator-card-detail.module';
import { IndicatorTableModule } from 'src/app/components/indicator-table/indicator-table.module';
import { IndicatorFiltersModule } from 'src/app/components/indicator-filters/indicator-filters.module';
import { IndicatorChartModule } from 'src/app/components/indicator-chart/indicator-chart.module';


@NgModule({
  declarations: [
    PageIndicatorComponent
  ],
  imports: [
    CommonModule,
    PageIndicatorRoutingModule,
    RouterModule,
    HeaderModule,
    IndicatorTableModule,
    IndicatorFiltersModule,
    IndicatorChartModule,
    IndicatorCardDetailModule,
    FooterModule
  ]
})
export class PageIndicatorModule { }
