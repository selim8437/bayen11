import { Component } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent {
  displayedOrderId: boolean = false;

  Plats: any[] = [];
  selectedPlat: any = null;
  newPlat: any = { name: '', descr: '', src: '',price:0 };
  constructor(private platService:PlatService) {}
  
 
  

  ngOnInit() {
    this.loadPlats();
  }

  loadPlats() {
    this.platService.getPlats().subscribe((data) => {
      this.Plats= data;
    });
  }

  editPlat(plat: any) {
    this.selectedPlat= { ...plat }; 
  }
  delitePlat(plat : any){
    this.editPlat(plat) ;
    if (this.selectedPlat.id_plat) {
      this.platService.DeletePlat(this.selectedPlat).subscribe(
        (response) => {
          console.log("Update successful", response);
          this.loadPlats();
          this.selectedPlat = null;  
        },
        (error) => {
          console.log("Update error", error);
        }
      );
  
      }
    } 
  savePlat() {
    console.log("dfffdd")
    if (this.selectedPlat.id_plat) {
      console.log(this.selectedPlat)
      this.platService.updatePlat(this.selectedPlat).subscribe(
        (response) => {
          console.log("Update successful", response);
          this.loadPlats();
          this.selectedPlat = null;  
        },
        (error) => {
          console.log("Update error", error);
        }
      );
    } else {
      
    }
  }

  createPlat() {
    this.platService.createPlat(this.newPlat).subscribe(
      (response) => {
        console.log(response); 
  
        this.loadPlats(); 
        this.newPlat = { name: '', descr: '', source: '', price: 0 };  
      },
      (error) => {
        console.error('Error:', error); 
      }
    );
  }
}
