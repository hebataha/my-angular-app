import { Injectable } from '@angular/core';
import { DataLogin } from './interface/data-login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginCredentials {
  email = new BehaviorSubject<string>('')
  password = new BehaviorSubject<string>('')
  loggedIn = new BehaviorSubject<boolean>(false)

  setLoggedIn(logged: boolean) {
    return this.loggedIn.next(logged)
  }

  getLoggedIn() {
    return this.loggedIn.getValue()
  }

  setEmail(email: string) {
    console.log(email)
    return this.email.next(email)
  }

  getEmail() {
    return this.email.getValue();

  }

  setPassword(password: string) {
    return this.password.next(password)
  }

  getPassword() {
    return this.password.getValue();
  }
}
