import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials } from '../../../shared/services/login-credentials';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  terms: boolean = false;
  loginData: object = {
    email: "",
    password: "",
  }
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rePassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })


  constructor(private _loginCredentials:LoginCredentials) {

  }
  get email() {
    return this.form.controls.email
  }
  onSubmit() {
    this.loginData = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    }
    // console.log(this.loginData)
    this._loginCredentials.loginDataService = this.loginData;
    console.log("service shared data" , this._loginCredentials.loginDataService);


  }
  onTerms() {
    this.terms = !this.terms
  }
}
