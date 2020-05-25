import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoviddataService {

  constructor( public http : HttpClient) { }


 getdata() {
   return this.http.get('https://coronavirus-19-api.herokuapp.com/countries/morocco')


 }


}



