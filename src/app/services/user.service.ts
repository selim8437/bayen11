import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/users")
      .pipe(
        map((response: any) => response || []), 
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return of([]); 
  }
  updateUser(user: any): Observable<any> {
    console.log("beginning ")
    return this.http.put<any>(`${this.apiUrl}/users/${user.client_id}`, user);
  }
  DeleteUser(user: any): Observable<any> {
    console.log("beginning ")
    return this.http.put<any>(`${this.apiUrl}/usersD/${user.client_id}`, user);
  }

  createUser(newUser: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/userss`, newUser);
  }
}
