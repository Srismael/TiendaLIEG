import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }
}
