import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionHistoryComponent } from './components/conversion-history/conversion-history.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'history',
    component: ConversionHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
