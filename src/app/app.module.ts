import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { TrimWhitespacePipe } from './pipes/space_trim';
import { AdminComponent } from './pages/admin/admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminNotificationsComponent } from './pages/admin-notifications/admin-notifications.component';
import { AdminHeaderComponent } from './pages/admin-header/admin-header.component';
import { ClientComponent } from './pages/client/client.component';
import { Client2Component } from './pages/client2/client2.component';
import { PlatsComponent } from './pages/plats/plats.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminPlatsComponent } from './pages/admin-plats/admin-plats.component';
import { ImageUploaderComponent } from './pages/image-uploader/image-uploader.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LoginPageComponent,
    UserViewComponent,
    AdminViewComponent,
    TrimWhitespacePipe,
    AdminComponent,
    AdminUsersComponent,
    AdminNotificationsComponent,
    AdminHeaderComponent,
    ClientComponent,
    Client2Component,
    PlatsComponent,
    PanierComponent,
    AdminPlatsComponent,
    ImageUploaderComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
