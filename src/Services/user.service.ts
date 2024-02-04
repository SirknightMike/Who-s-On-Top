import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { RegisterUser } from '../app/interfaces/register-interfaces'
import { ApiHandler } from 'src/app/abstract/api-handler';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiHandler {

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) {
    super('users')
   }

  registerUser(user: RegisterUser): Observable<Object> {
    const url = this.apiUrl+'/register'
    console.log('Value of the Url: ', url);
    console.log('The value of the users which is registering: ', user)
    return this.http.post(url,user)
    
  }

}
