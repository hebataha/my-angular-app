import { Component } from '@angular/core';
import { ContainerWrapper } from '../../../shared/container-wrapper/components/container-wrapper/container-wrapper';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ContainerWrapper, ReactiveFormsModule, JsonPipe],
  templateUrl: './register.html',
  styleUrl: './register.scss',
}) 
export class Register {
  touched: boolean = false
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rePassword: new FormControl('', [Validators.required , Validators.minLength(8)]),

  })
  constructor() {
    this.touched = this.form.controls.email.touched;

  }
  onSubmit() {
  }
}
