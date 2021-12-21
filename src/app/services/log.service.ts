import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http:HttpClient) { }

  postLogin(data:any):Observable<any>{
return this.http.post("https://adultfamilyhomes.org/api/myafh/login?role=user",data)
  }

  getLogin():Observable<any>{
    return this.http.get("https://adultfamilyhomes.org/api/myafh/filtered_list?city=kirkland")
      }
}
