import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  
  getPlats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/Plats")
      .pipe(
        map((response: any) => response || []), 
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return of([]); 
  }
  updatePlat(Plat: any): Observable<any> {
    console.log("beginning ")
    return this.http.put<any>(`${this.apiUrl}/PlatsE/${Plat.id_plat}`, Plat);
  }
  DeletePlat(Plat: any): Observable<any> {
    console.log("beginning ")
    return this.http.put<any>(`${this.apiUrl}/PlatsD/${Plat.id_plat}`, Plat);
  }

  createPlat(newPlat: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/PlatsI`, newPlat);
  }
}
