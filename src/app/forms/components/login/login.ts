import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { LoginCredentials } from '../../../shared/services/login-credentials';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  errorMsg: string = "";
  welcome: string = '';

  constructor(private _loginCredentials: LoginCredentials, private router: Router) {
  }

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(6), Validators.email]),
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
    if (this.form.controls.email.value === this._loginCredentials.getEmail() && this.form.controls.password.value === this._loginCredentials.getPassword()) {
      this._loginCredentials.setLoggedIn(true)

      this.router.navigate(['/todoApp'])
    } else {
      console.log("not matched");
      this.errorMsg = "password or username not correct!";
      this._loginCredentials.setLoggedIn(false)

    }

  }
}

