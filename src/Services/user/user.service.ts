import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ApiHandler } from 'src/app/abstract/api-handler';
import { RegisterUser, User } from 'src/app/interfaces/User-interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiHandler {

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) {
    super('users')
   }

  registerUser(user: RegisterUser): Observable<Object> {
    const url = this.apiUrl+'/register'
    return this.http.post(url,user)
  }

  loginUser(user: User) {
    const url = this.apiUrl+'/login';
    return this.http.post(url, user);
  } 

}
