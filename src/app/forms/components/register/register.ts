import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule,JsonPipe],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  terms: boolean = false
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
  constructor() {

  }
get email(){
  return this.form.controls.email
}
  onSubmit() {
    console.log(this.form.valid)
  }
  onTerms() {
    this.terms = !this.terms
  }
}
