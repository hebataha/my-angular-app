import { Component } from '@angular/core';
import { ContainerWrapper } from '../../../shared/container-wrapper/components/container-wrapper/container-wrapper';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ContainerWrapper,ReactiveFormsModule,JsonPipe],
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
