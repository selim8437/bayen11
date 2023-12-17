import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(private http: HttpClient, private router: Router,private dataSharingService: DataSharingService) {
  }
  deconnecter(){
    
    this.dataSharingService.test=false ;

      this.router.navigate(['/Home']) ;
    
  } ;
}
