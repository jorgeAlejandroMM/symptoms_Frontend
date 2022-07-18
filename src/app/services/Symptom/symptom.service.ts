import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  URL:string;
  constructor( private http :HttpClient) { 
    this.URL="http://localhost:3000/symptoms";
   
  }

  getSymptom(){
   
    const data= this.http.get(this.URL);
     return data;
  }
}
