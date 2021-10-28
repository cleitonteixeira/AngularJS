import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../authentication/create-user/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}
  private createuser: string = 'http://localhost:8000/api/v2/create-user/';
  private loginuser: string = 'http://localhost:8000/api/v2/create-user/';

  usuario: User = new User()

  login(user: User): Observable<User> {
    
    let params = new HttpParams();

    if(user.email){
      params.set('email', user.email_log);
    }
    if(user.password){
      params.set('password', user.password_log);
    }

    return this.http.get<User>(`${this.loginuser}`,{params});

    // return new Promise((resolve) => {
    //   this.usuario = this.http.get<User>(`${this.loginuser}`,{params});
    //   window.localStorage.setItem('token', 'meu-token');
    //   resolve(true);
    // });
  }

  createAccount(user: User): Observable<User>{
    if(user.id){
      return this.http.put<User>(`${this.createuser}/${user.id}`, user);
    }else{
      /*console.log(user)*/ 
      return this.http.post<User>(`${this.createuser}`, user);
    }
  }
}