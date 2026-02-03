import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
  form = new FormGroup({
  email: new FormControl("", [Validators.required , Validators.minLength(6), Validators.email])
})
get email(){
 return this.form.controls.email
  }
  
  onSubmit() {
    console.log(this.form.value);
    
  }
}
