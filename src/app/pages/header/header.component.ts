import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit{
  email: string = '';
  emaili:boolean=true ;
  password: string = '';
  passwordi:boolean =true;
  message :boolean =false ;
  abc:boolean=false ;
  name :string ="";
  showMenu: boolean = false;
  panierCount: number =0 ;

  constructor(private http: HttpClient, private router: Router,private dataSharingService: DataSharingService,private panierService: PanierService) {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
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
  login() {
    if (this.isValidEmail(this.email)) {
      if (this.isValidPassword(this.password)) {
    
    const data = { email: this.email, password: this.password };
    this.http.post<{ message: boolean,messages :string }>('http://localhost:3000/login', data).subscribe({
      next: (response) => {
        console.log(response);
        if (response.message === true) {
          console.log(response.messages);
          this.abc=true;
          this.name=response.messages ;
          this.router.navigate(['/Tarrification']);
         
        }
      },
      error: (error) => {
        // Handle errors that may occur during the request
        console.error('HTTP error:', error);
      }
     } );
    
    }else{
      this.passwordi=false ;
    }

  }else{
    this.emaili=false ;
  }
}
  
  
  goToSignup() {
    this.router.navigate(['/SignUp']);
  }
  goToPanier(){
    this.router.navigate(['/Panier']);

  }
  
  
  ngOnInit(): void {
    this.abc=this.dataSharingService.test ;
    this.name=this.dataSharingService.name ;
    this.panierService.cartCount$.subscribe((count) => {
      this.panierCount = count;
    });
  }
  

  
    
  
  
 

  goToLogin(){
    this.router.navigate(['/Login'])
  }
  deconnecter(){
    this.abc=false ;
    this.router.navigate(['/Home']) ;
    this.dataSharingService.test=this.abc ;
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
}

