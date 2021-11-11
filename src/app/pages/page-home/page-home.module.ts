import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { IndicatorCardModule } from 'src/app/components/indicator-card/indicator-card.module';


@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    IndicatorCardModule
  ]
})
export class PageHomeModule { }
