import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../users-operation/interface/user';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})


export class UsersService {
  constructor(private _apiService: ApiService) {

  }
  //  get<T>(endpoint: string, params?: QueryParams)
  getAllUsers(): Observable<any> {
    return this._apiService.get('users')
  }

  getUser(id: number): Observable<any> {
    return this._apiService.get(`users/${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this._apiService.put(`users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this._apiService.delete(`users/${id}`)
  }
  addUser(user: User): Observable<any> {
    return this._apiService.post(`users`, user);
  }
  searchUsers(query: string) {
    return this._apiService.get(`users/search?q=${query}`);
  }
  // filterUsers() {
  //   return;
  // }

}
