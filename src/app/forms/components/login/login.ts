import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { LoginCredentials } from '../../../shared/services/login-credentials';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private _loginCredentials:LoginCredentials) {

  }
  form =new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(6) ,Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  get email() {
    return this.form.controls.email
  }
    get password() {
    return this.form.controls.password
  }

  onSubmit() {
    // console.log(this.form.value);
    console.log(this._loginCredentials.loginDataService)

  }
}
