import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  

  getJSON(): Observable<User[]> {
    return this.http.get("../assets/mocks/users.json") as Observable<User[]>;
  }
}
