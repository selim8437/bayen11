import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formulairi =false ;
  signupForm: FormGroup;
  confirmi=false ;
  constructor(private router: Router,private fb: FormBuilder, private http: HttpClient,private dataSharingService : DataSharingService) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required ,Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required,],
    });
  }

  onSubmit() {
    if (this.signupForm.valid ) {
      const formData = this.signupForm.value;
      if(formData.password===formData.confirmPassword){
        const serverUrl = 'https://localhost:3000';
        this.http.post<any>(`${serverUrl}/signup`, formData).subscribe(
          (response) => {
            alert('Account Created successfully:');
            this.goToHome();
            this.dataSharingService.test=true ;
          // Handle success (e.g., show a success message)
          },
          (error) => {
            console.error('Form submission error:', error);
            // Handle error (e.g., show an error message)
          }
        );
      }else{
        this.confirmi=true ;
      }
    }else {
      this.formulairi=true;
    }
  }
   isValidPassword(password: string): boolean {
    const sqlInjectionPatterns = [
      /SELECT\s+/i,
      /INSERT\s+/i,
      /UPDATE\s+/i,
      /DELETE\s+/i,
      /DROP\s+/i,
      /UNION\s+/i,
      /--/i,
    ];
  
    for (const pattern of sqlInjectionPatterns) {
      if (pattern.test(password)) {
        return false;
      }
    }
  
    if (password.length < 8) {
      return false; 
    }
  
   
  
    return true;
  }
  goToLogin(){
    this.router.navigate(['/Login']) ;
  }
  goToHome(){
    this.router.navigate(['/Home']) ;
  }
}
