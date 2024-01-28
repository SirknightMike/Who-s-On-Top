import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from '../app/interfaces/register-interfaces'
import { ApiHandler } from 'src/app/abstract/api-handler';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiHandler {

  constructor(private http: HttpClient) {
    super('users')
   }

  registerUser(user: RegisterUser): Observable<Object> {
    const url = this.apiUrl+'/user/userRegister'
    return this.http.post(url,user);
  }

  loginClickTest() {
    const url = this.apiUrl + "/test";
    console.log(url)
    return this.http.get(url);
  }

  test(text: string) {
    const url = this.apiUrl + "/api/user/test";
    console.log("this is the url value: ", url)
    return this.http.post<string>(url, { input: text });
  }

  testNames() {
    const url = `${this.apiUrl}/api/user/names`;
    console.log('The url we are checking',url)
    return this.http.get(url);
  }
}
