import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{path:"",redirectTo:'/Home', pathMatch: 'full'},{path:"Home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"Contact",component:ContactComponent},
{path:"Services",component:ServicesComponent}];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
