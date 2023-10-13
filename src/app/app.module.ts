import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import {HttpClientModule} from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { TarrificationComponent } from './pages/tarrification/tarrification.component';
import { TrimWhitespacePipe } from './pipes/space_trim';
import { AdminComponent } from './pages/admin/admin.component';
import { ParentComponent } from './pages/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    UserViewComponent,
    AdminViewComponent,
    TarrificationComponent,
    TrimWhitespacePipe,
    AdminComponent,
    ParentComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
