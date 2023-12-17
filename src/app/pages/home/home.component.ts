import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {  Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router,private dataSharingService :DataSharingService,private renderer: Renderer2, private el: ElementRef){}
  abc :boolean =false ;

  ngOnInit(): void {
    this.abc=this.dataSharingService.test ;
  }
  scrollToServices(): void {
    const servicesSection = this.el.nativeElement.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  goToServices(){
    this.router.navigate(['/Services']) ;
  }
  goToPlats(){
    if (this.abc){
      this.router.navigate(['/Plats']) ;
    }else{
      this.router.navigate(['/Login']) ;
    }

  }
}
