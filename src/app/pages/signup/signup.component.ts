import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      const serverUrl = 'http://localhost:3000';
      this.http.post<any>(`${serverUrl}/signup`, formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Handle success (e.g., show a success message)
        },
        (error) => {
          console.error('Form submission error:', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.log('Form is invalid. Please correct errors.');
    }
  }
}
