import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
plats :any[] ;
plats2 :any[] ;
total :number ;
test :boolean ;
valider:boolean=false ;
name :string ;
commande_id: number ;
date =new Date() ;
year = this.date.getFullYear();
month = this.date.getMonth() + 1;
hour = this.date.getHours() ;
minute=this.date.getMinutes();
dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
day = this.dayNames[this.date.getDay()];

constructor(private router :Router,private panierService: PanierService,private dataSharingService : DataSharingService) {}

ngOnInit() {
    this.name=this.dataSharingService.name ;
    this.panierService.cartItems$.subscribe((items) => {
      this.plats= items;
      this.plats2= items;
      let a :number =0;
      for (let plat of this.plats) {
        a+=plat.price ;
      }
      this.total=a ;
    });
    this.test=this.dataSharingService.test ;
  
}
deleteFromCart(i: any){
 this.panierService.deleteFromCart(i) ; 
}
commander(){
  this.valider=true;
  this.plats=null ;
}

}
