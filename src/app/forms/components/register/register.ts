import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials } from '../../../shared/services/login-credentials';
import { DataLogin } from '../../../shared/header/interface/data-login';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api/api-service';

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


  constructor(private _loginCredentials: LoginCredentials, private router: Router, private _apiService: ApiService) {

  }
  get email() {
    return this.form.controls.email
  }
  onSubmit() {
    this._loginCredentials.setUserName(this.form.controls.email.value!);
    this._loginCredentials.setPassword(this.form.controls.password.value!)
    const email = this._loginCredentials.getUserName();
    const password = this._loginCredentials.getPassword();
    console.log(email);
    console.log(password);

    if (this.form.valid) {
      this.router.navigate(['/login'])
    }

    this._apiService.post("users/add", {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    }).subscribe({
      next: (res:any) => {
        console.log(res)
      },
      error: (err:any) => {
        console.log(err)
      }
    })

    // post<T>(endpoint: string, body: unknown): Observable<T> {
    //   return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
    //     headers: this.getHeaders()
    //   });
    // }
  }
  onTerms() {
    this.terms = !this.terms
  }
}
