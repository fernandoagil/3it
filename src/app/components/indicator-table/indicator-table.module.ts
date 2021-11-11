import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorTableComponent } from './indicator-table.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { DayjsPipe } from './pipes/dayjs.pipe';



@NgModule({
  declarations: [
    IndicatorTableComponent,
    PaginationPipe,
    DayjsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IndicatorTableComponent
  ]
})
export class IndicatorTableModule { }
