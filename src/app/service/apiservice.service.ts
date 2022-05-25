import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

 private baseUrl:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getData(url:string, queryParams = {}){
    let fullUrl = this.baseUrl + url
    let options  = {
      headers : {
        "Accept" : "application/json"
      },
     params: queryParams
    }

   return this.http.get(fullUrl, options)
  }
// -------------------------------------post data---------------------------

  postData(url: string, data: any, queryParams = {}) {
    let fullUrl = this.baseUrl + url
    let options  = {
      headers : {
        "Accept" : "application/json"
      }
      ,
     params: queryParams
    }

    return this.http.post(fullUrl,data,options)
  }


}
