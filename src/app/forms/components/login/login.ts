import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
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
    console.log(this.form.value);

  }
}
