import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import localStorage from 'localStorage';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http){
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username: string, password: string){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http
      .post('http://193.1.3.20:7890/api/v1/auth',
      JSON.stringify({username,password}),
      {headers})
      .map(res => res.json())
      .map((res) =>{
        if(res.token){
          localStorage.setItem('auth_token',res.token);
          this.loggedIn = true;
        }
        return res.token;
      })
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  getToken(){
    let token = localStorage.getItem('auth_token');
    if(token !=null)
      return localStorage.getItem('auth_token');
    else
      return "";
  }

  getUser(){
    let headers = new Headers({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.getToken().toString(),
    })
    let options = new RequestOptions({headers: headers})
    return this.http.get('http://193.1.3.20:7890/api/v1/accounts/current',options).map(res => res.json())
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
