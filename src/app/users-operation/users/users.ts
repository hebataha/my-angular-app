import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { RouterLink } from '@angular/router';
import { UsersService } from '../services/users-service';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users: User[] = [];
  deletedUsers: User[] = [];
  loading = true;

  constructor(private _users: UsersService) {
  }
  ngOnInit(): void {
    this._users.getAllUsers().subscribe({

      next: (res) => {
        this.users = res.users,
          console.log(res)
        this.loading = false
      },
      error: (err) => {
        console.log(err)
        this.loading = false

      },
      complete: () => {

      }
    }



    )
  }


  update() {

  }

  delete(id: any) {
    this._users.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    })
  }
}
