import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private baseUrl = 'http://localhost:8080/auth'

  constructor(private http: HttpClient) { }

  // it will store our user value;
  authSubject= new BehaviorSubject<any>({
    recipe:[],
    loading:false,
    newRecipe:null
  });

  private getHeaders(): HttpHeaders{
    const token= localStorage.getItem('jwt')
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    })

  }

}
