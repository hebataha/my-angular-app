import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class Users {

  constructor(private _http: HttpClient) {

  }
  getAllUsers():Observable<any> {
   return this._http.get('https://dummyjson.com/users')
  }
}
