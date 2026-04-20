import { Component } from '@angular/core';
import { UsersService } from '../../core/services/users';

@Component({
  selector: 'app-single-user',
  imports: [],
  templateUrl: './single-user.html',
  styleUrl: './single-user.scss',
})
export class SingleUser {
  constructor(private _userService:UsersService) {
  
}
}
