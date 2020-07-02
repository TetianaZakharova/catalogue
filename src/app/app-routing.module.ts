import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PhonesPagesComponent } from './phones-pages/phones-pages.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'phones', component: PhonesPagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
