import { Component } from '@angular/core';
import { TodoItem } from "./todo-item/todo-item";

@Component({
  selector: 'app-todo',
  imports: [TodoItem],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

}
