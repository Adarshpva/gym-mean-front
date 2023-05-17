import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL='http://localhost:3000'
  constructor(private http:HttpClient) { }


  // get all products
  getallfitness(){
    // api
    return this.http.get(`${this.BASE_URL}/users/all-fit`)
  }

  // view product
  viewfitness(id:any){

    return this.http.get(`${this.BASE_URL}/users/view-fitness/${id}`)

  }



}
