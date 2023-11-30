import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from '../app/interfaces/register-interfaces'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:5000'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  registerUser(user: RegisterUser): Observable<Object> {
    const url = this.apiUrl+'/user/userRegister'
    return this.http.post(url,user);
  }
}
