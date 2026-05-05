import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { LoginCredentials } from '../../../shared/services/login-credentials';
import { servicePopup } from '../../../shared/popup/service-popup';
import { ApiService } from '../../../core/services/api/api-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  errorMsg: string = "";
  welcome: string = '';
  pop: boolean = false;


  constructor(private _loginCredentials: LoginCredentials, private router: Router, private _productPopup: servicePopup, private _apiService: ApiService) {
    this._productPopup.popupStatus.subscribe((val) =>
      this.pop = val)
  }

  form = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.minLength(6)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  get userName() {
    return this.form.controls.userName
  }
  get password() {
    return this.form.controls.password
  }



  onSubmit() {
    // console.log(this.form.value);
    // if (this.form.controls.userName.value === this._loginCredentials.getUserName() && this.form.controls.password.value === this._loginCredentials.getPassword()) {
    //   this._loginCredentials.setLoggedIn(true)

    //   this.router.navigate(['/todoApp'])
    // } else {
    //   console.log("not matched");
    //   this.errorMsg = "password or username not correct!";
    //   this._loginCredentials.setLoggedIn(false)

    // }
    console.log(this.form.controls.userName.value)
    this._apiService.post('auth/login', {
      username: this.form.controls.userName.value,
      password: this.form.controls.password.value
    }).subscribe({
      next: (res: any) => {
        console.log(res)
        if (res.accessToken) {
          this.router.navigate(['/todoApp'])
          this.welcome = "login successfully";
          localStorage.setItem("token", res.accessToken)
          
        }
      },
      error: (err: any) => {
        console.log(err)
      }
    })


  }


}

