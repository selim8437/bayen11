import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent {
  plats: any[];
  plats2: any[];
  searchTerm: string = '';
  panierCount: number =0 ;
  abc:boolean =false ;
  constructor(private http: HttpClient,private dataSharingService: DataSharingService,private panierService :PanierService) {
   }

  ngOnInit() {
    const apiUrl = 'http://localhost:3000';  
    this.abc=this.dataSharingService.test ;
    this.http.get<any[]>(`${apiUrl}/plats`,{}).subscribe(
      (data) => {
        this.plats = data;
        this.plats2=data ;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
}
searchPlatByName() {
  const searchTermLower = this.searchTerm.toLowerCase();

  this.plats= this.plats2.filter((plat) =>
    plat.name.toLowerCase().startsWith(searchTermLower)
  );
    
  
}
onAll(){
  this.plats=this.plats2 ;
}
onAdd(a:any){
  
  this.panierService.addToCartItem(a);

}


  
  
}
