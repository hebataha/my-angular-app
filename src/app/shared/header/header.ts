import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginCredentials } from '../services/login-credentials';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  logged: boolean = true;
  constructor(private _loginCredentials: LoginCredentials) {
    this._loginCredentials.loggedIn.subscribe((val) =>
      this.logged = val
  )

  }


}
