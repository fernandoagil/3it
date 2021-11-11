import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./pages/page-home/page-home.module').then(m => m.PageHomeModule)
  },
  { 
    path: 'indicator/:type',
    loadChildren: () => import('./pages/page-indicator/page-indicator.module').then(m => m.PageIndicatorModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
