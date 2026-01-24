import { Component } from '@angular/core';
import { TodoItem } from "./todo-item/todo-item";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,TodoItem,RouterLink,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

}
