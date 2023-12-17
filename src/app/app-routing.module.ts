import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import {PlatsComponent} from './pages/plats/plats.component' ;
import { PanierComponent } from './pages/panier/panier.component';
import { AdminPlatsComponent } from './pages/admin-plats/admin-plats.component';


const routes: Routes = [{path:"",redirectTo:'/Home', pathMatch: 'full'},
{path:"Home",component:HomeComponent},
{path:"About",component:AboutComponent},
{path:"Contact",component:ContactComponent},
{path:"SignUp",component:SignupComponent},
{path:"Login",component:LoginPageComponent},
{path:"User-view",component:UserViewComponent},
{path:"Admin",component:AdminComponent},{path:"Plats",component:PlatsComponent},
{path:"Admin_users",component:AdminUsersComponent},
{path:"AdminPlats",component:AdminPlatsComponent},
{path:"Panier",component:PanierComponent}];




@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
