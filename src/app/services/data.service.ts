// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchData() {
    // You can send a POST request here to fetch the data from the server
    this.http.post<any[]>('http://localhost:3000/Tarrification', {}).subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.dataSubject.next(response);
        }
      },
      (error) => {
        console.error('HTTP error:', error);
      }
    );
  }
}
