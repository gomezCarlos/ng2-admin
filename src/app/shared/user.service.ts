import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
      .post('http://localhost:7890/api/v1/auth',
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

  isLoggedIn(){
    return this.loggedIn;
  }
}
