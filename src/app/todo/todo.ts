import { Component, OnInit } from '@angular/core';
import { TodoItem } from "./components/todo-item/todo-item";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TodoIem } from './interface/todo';
@Component({
  selector: 'app-todo',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TodoItem, RouterLink, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{
  todoArray: TodoIem[] = []
  constructor() {
    this.todoArray = [{
      id: 1,
      title: "todo 1",
      description: "hi from todo 1",
      isRead: false,

    }]
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  addTodo():void{
  console.log("heba")
  }
  valInput(): void{

}
}
