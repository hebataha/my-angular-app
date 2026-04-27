import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { RouterLink } from '@angular/router';
import { UsersService } from '../services/users-service';
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [RouterLink, ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  users: User[] = [];
  deletedUsers: User[] = [];
  loading = true;
  showTable: boolean = false;

  constructor(private _users: UsersService) {
  }

  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    maidenName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    address: new FormGroup({
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      stateCode: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      coordinates: new FormGroup({
        lat: new FormControl('', [Validators.required]),
        lng: new FormControl('',[Validators.required])
      })
    }),
    company: new FormGroup({
      department: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required])
    }),
    university: new FormControl('', [Validators.required]),
  });

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

  tableShown() {
    console.log(this.form.controls)
    this.showTable = !this.showTable;
  }
  submit() {
    console.log(this.form.value);
    this._users.addUser(this.form.value).subscribe({
      next: (res) => {
       this.users = [res, ...this.users];
          console.log(res)
    
      },
      error:(err)=> {
        console.log(err);
        
      }
    })

  }
}
