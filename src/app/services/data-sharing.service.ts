import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  
  constructor() { }
  test: boolean=false;
  name :string ='' ;
  id : number =0 ;
  panier :any[]=[];
  panierCount :number ;

}
