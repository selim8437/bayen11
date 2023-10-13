import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { TarrificationComponent } from './pages/tarrification/tarrification.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [{path:"",redirectTo:'/Home', pathMatch: 'full'},
{path:"Home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"Contact",component:ContactComponent},
{path:"Services",component:ServicesComponent},
{path:"SignUp",component:SignupComponent},
{path:"Services",component:ServicesComponent},
{path:"Login",component:LoginComponent},
{path:"Login_page",component:LoginPageComponent},
{path:"User-view",component:UserViewComponent},
{path:"Admin",component:AdminComponent},
{path:"Tarrification",component:TarrificationComponent}];



@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
