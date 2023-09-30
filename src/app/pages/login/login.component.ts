import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginResponse$: Observable<{ message: string }> = new Observable(); // Initialize as an empty observable

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const data = { email: this.email, password: this.password };
    this.http.post<{ message: string }>('http://localhost:3000/login', data).subscribe(
      (response) => {
        // Handle the response data from the server
        console.log(response);
      },
      (error) => {
        // Handle errors that may occur during the request
        console.error('HTTP error:', error);
      }
    );
  }

  goToSignup() {
    this.router.navigate(['/SignUp']);
  }
}
