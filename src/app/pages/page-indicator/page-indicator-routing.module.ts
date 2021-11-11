import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndicatorComponent } from './page-indicator.component';

const routes: Routes = [{ path: '', component: PageIndicatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageIndicatorRoutingModule { }
