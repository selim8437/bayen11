import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  emaili:boolean=true ;
  password: string = '';
  passwordi:boolean =true;
  wrong:boolean=true;

  constructor(private http: HttpClient, private router: Router,private dataSharingService: DataSharingService) {}

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
  login() {
    const self = this;
    if (this.isValidEmail(this.email)) {
      console.log("a") ;
      if (this.isValidPassword(this.password)) {
        console.log("b");

    const data = { email: this.email, password: this.password };
    this.http.post<{ type:Number,message: boolean,messages :string ,id : number}>('http://localhost:3000/login', data).subscribe({
      
      next: (response) => {
        if (response.message === true) {


          console.log("fgfgf"+this.email+this.password);

          this.setSharedVariable(true);
          this.setNameVariable(response.messages);
          this.setIdVariable(response.id);
          console.log(response.id)
          if (response.type==1) {
            this.goToAdmin()
          }else{
            this.goToHome()
          }
        }else{
          this.wrong=false ;
        }
        
      },
      error: (error) => {
        // Handle errors that may occur during the request
        console.error('HTTP error:', error);
      }
     } );
    
    }else{
      this.passwordi=false ;
      console.log("c") ;

    }

  }else{
    this.emaili=false ;
    console.log("d") ;

  }
}
isValidEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    return false;
  }

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
    if (pattern.test(email)) {
      return false;
    }
  }

 

  return true;
}
  goToSignup() {
    this.router.navigate(['/SignUp']);
  }
  
  goToHome() {
    this.router.navigate(['/Plats']);
  }
  goToAdmin() {
    this.router.navigate(['/Admin_users']);
  }
  setSharedVariable(value: boolean) {
    this.dataSharingService.test = value;
  }
  setNameVariable(value:string) {
    this.dataSharingService.name = value;
  }
  setIdVariable(value:number) {
    this.dataSharingService.id = value;
  }
}
