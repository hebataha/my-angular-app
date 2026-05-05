import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api/api-service';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root',
})


export class UsersService {
  constructor(private _apiService: ApiService) {

  }
  private endPoint = "users"
  //  get<T>(endpoint: string, params?: QueryParams)
  getAllUsers(): Observable<any> {
    return this._apiService.get(this.endPoint)
  }

  getUser(id: number): Observable<any> {
    return this._apiService.get(`${this.endPoint}/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this._apiService.put(`${this.endPoint}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this._apiService.delete(`${this.endPoint}/${id}`)
  }
  addUser(user: any): Observable<any> {
    return this._apiService.post(`${this.endPoint}` + '/add', user);
  }
  searchUsers(query: string) {
    return this._apiService.get(`${this.endPoint}/search?q=${query}`);
  }
  // filterUsers() {
  //   return;
  // }

}
