import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../users-operation/users/interface/user';

@Injectable({
  providedIn: 'root',
})


export class UsersService {
  API: string = 'https://dummyjson.com/users';
  constructor(private _http: HttpClient) {

  }
  getAllUsers(): Observable<any> {
    return this._http.get(this.API)
  }

  getUser(id: number): Observable<any> {
    return this._http.get(`${this.API}/${id}`)
  }

  updateUser(user: User): Observable<any> {
    return this._http.put(`${this.API}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.API}/${id}`)
  }
  addUser(user: User): Observable<any> {
    return this._http.post(`${this.API}/add`, user);
  }
  searchUsers(query: string) {
    return this._http.get(`${this.API}/search?q=${query}`);
  }
  // filterUsers() {
  //   return;
  // }

}
