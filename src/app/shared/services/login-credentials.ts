import { Injectable } from '@angular/core';
import { DataLogin } from '../header/interface/data-login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginCredentials {
  userName = new BehaviorSubject<string>('')
  password = new BehaviorSubject<string>('')
  loggedIn = new BehaviorSubject<boolean>(false)

  setLoggedIn(logged: boolean) {
    return this.loggedIn.next(logged)
  }

  getLoggedIn() {
    return this.loggedIn.getValue()
  }

  setUserName(email: string) {
    console.log(email)
    return this.userName.next(email)
  }

  getUserName() {
    return this.userName.getValue();

  }

  setPassword(password: string) {
    return this.password.next(password)
  }

  getPassword() {
    return this.password.getValue();
  }
}
