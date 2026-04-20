import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users';
import { User } from './interface/user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users: User[] = []
  constructor(private _users: UsersService) {
  }
  ngOnInit(): void {
    this._users.getAllUsers().subscribe({

      next: (res) => {
        this.users = res.users,
        console.log(res)
      },
      error: (err) => console.log(err),
      complete: () => {

      }
    }



    )
  }

  view(){

  }
  update(){

  }

  delete() {
    
  }
}
