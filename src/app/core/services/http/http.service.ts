import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  url:string = `${env.apiRoot}app_id=${env.app_id}&app_key=${env.app_key}&nutrition-type=${env.nutrition_type}&ingr=`;


  getData(data:any):Observable<any>{
    this.url+=data;
    console.log(this.url)
    return this.http.get(this.url,data);
  }

  loadRecipe(){

  }
}
