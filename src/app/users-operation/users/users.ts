import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users';
import { User } from './interface/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
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

  view(id: number) {
    console.log(id);

  }
  update() {

  }

  delete() {

  }
}
