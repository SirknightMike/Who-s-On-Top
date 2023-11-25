import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:5000'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<string[]> {
    const url = this.apiUrl+'/names'
    return this.http.get<string[]>(url);
  }
}
