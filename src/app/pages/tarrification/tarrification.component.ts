import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarrification',
  templateUrl: './tarrification.component.html',
  styleUrls: ['./tarrification.component.css']
})
export class TarrificationComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
    this.post()

  }
 ;
  pricingData: any[] = [];
 inputData: any[] = [];
post(){
  this.http.post<any[]>('http://localhost:3000/Tarrification', "").subscribe(
  (response) => {
    if (response && response.length > 0) {
      this.pricingData=response ;
    } else {
      console.log('No data received from the server.');
    }
  },
  (error) => {
    console.error('HTTP error:', error);
  });
}
  GetTarif(){
    for (let item of this.pricingData) {
      this.inputData.push(item.customerInput) ;
  }
  console.log(this.pricingData[1].selected)
  this.http.post<{ message: string }>('http://localhost:3000/asking', this.inputData).subscribe(
  (response) => {
      console.log(response);
   
  },
  (error) => {
    console.error('HTTP error:', error);
  });
}
  }

