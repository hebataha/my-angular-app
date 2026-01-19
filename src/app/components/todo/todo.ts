import { Component } from '@angular/core';
import { TodoItem } from "./todo-item/todo-item";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,TodoItem,RouterLink],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

}
