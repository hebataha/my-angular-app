import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../users/interface/user';

@Component({
  selector: 'app-single-user',
  imports: [RouterLink],
  templateUrl: './single-user.html',
  styleUrl: './single-user.scss',
})
export class SingleUser implements OnInit {
  id!: number;
  singleUser!: User;
  loading = true;

  constructor(
    private _userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log(this.id);

      this._userService.getUser(this.id).subscribe({
        next: (data) => {
          this.singleUser = data;
          console.log(data);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;

        }
      });
    });
  }
}