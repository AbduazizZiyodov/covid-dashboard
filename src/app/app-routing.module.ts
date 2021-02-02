import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryPageComponent } from './country-page/country-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:code',
    component: CountryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
