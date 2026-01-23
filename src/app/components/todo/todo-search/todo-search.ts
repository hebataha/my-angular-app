import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './todo-search.html',
  styleUrl: './todo-search.scss',
})
export class TodoSearch {

}
