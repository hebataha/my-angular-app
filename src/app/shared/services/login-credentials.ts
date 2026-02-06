import { Injectable } from '@angular/core';
import { DataLogin } from './interface/data-login';

@Injectable({
  providedIn: 'root',
})
export class LoginCredentials {
  loginDataService: DataLogin = {
    email: "",
    password: "",
  }
}
