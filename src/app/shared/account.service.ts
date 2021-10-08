import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../authentication/create-user/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}
  private user: string = 'http://localhost:8000/api/v2/create-user/';


  login(user: User) {
    return new Promise((resolve) => {

      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(user: User): Observable<User>{
    if(user.id){
      return this.http.put<User>(`${this.user}/${user.id}`, user);
    }else{
      /*console.log(user)*/ 
      return this.http.post<User>(`${this.user}`, user);
    }
  }
}