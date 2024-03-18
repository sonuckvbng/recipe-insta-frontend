import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  // it will store our user value;
  authSubject= new BehaviorSubject<any>({
    user: null
  });

  login(userData:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/signin`,userData)
  }

  register(userData:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/signup`,userData)
  }

  getUserProfile(): Observable<any>{
    const header= new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    })
    return this.http.post<any>(`${this.baseUrl}/signup`, {header}).pipe(
      tap((user)=>{
        const currenyState= this.authSubject.value;
        this.authSubject.next({...currenyState, user})
      })
    )
  }

  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }

}
