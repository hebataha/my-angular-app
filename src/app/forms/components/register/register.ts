import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials } from '../../../shared/services/login-credentials';
import { DataLogin } from '../../../shared/header/interface/data-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  terms: boolean = false;

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


  constructor(private _loginCredentials: LoginCredentials, private router: Router) {

  }
  get email() {
    return this.form.controls.email
  }
  onSubmit() {
    this._loginCredentials.setEmail(this.form.controls.email.value!);
    this._loginCredentials.setPassword(this.form.controls.password.value!)
    const email = this._loginCredentials.getEmail();
    const password = this._loginCredentials.getPassword();
    console.log(email);
    console.log(password);

    if (this.form.valid) {
      this.router.navigate(['/login'])
    }


  }
  onTerms() {
    this.terms = !this.terms
  }
}
