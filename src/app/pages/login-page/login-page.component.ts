import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
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
    this.router.navigate(['/User-view'])

  }

  goToSignup() {
    this.router.navigate(['/SignUp']);
  }
}
