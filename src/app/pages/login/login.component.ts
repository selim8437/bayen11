import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message :boolean =false ;
  constructor(private http: HttpClient, private router: Router,private dataSharingService: DataSharingService) {}
  login() {
    const data = { email: this.email, password: this.password };
    this.http.post<{ message: boolean }>('http://localhost:3000/login', data).subscribe({
      next: (response) => {
        console.log(response);
        if (response.message === true) {
          console.log(response.message);
          this.setSharedVariable(true);
          this.router.navigate(['/Home']);
        }
      },
      error: (error) => {
        // Handle errors that may occur during the request
        console.error('HTTP error:', error);
      }
     } );
    


  }
  
  setSharedVariable(value: boolean) {
    this.dataSharingService.test = value;
  }
  goToSignup() {
    this.router.navigate(['/SignUp']);
  }
}
