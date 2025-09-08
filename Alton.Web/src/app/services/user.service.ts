import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  url = environment.url

  login(data: any) {
    const uri = `${this.url}api/User/login`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.post(uri, data, httpOptions);
  }

  getUsers() {
    const token: any = localStorage.getItem("atoken");
    const uri = `${this.url}api/User/getUsers`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }),
    };
    return this.http.get(uri, httpOptions);
  }

}