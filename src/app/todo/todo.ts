import { Component, OnInit } from '@angular/core';
import { TodoItem } from "./todo-item/todo-item";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TodoIem } from './interface/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TodoItem, RouterLink, FormsModule, MatFormFieldModule, MatInputModule,CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{
  todoArray:any = [""]
  constructor() {
    this.todoArray = [""]
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  addTodo():any{
  this.todoArray.push("heba")
  }
  valInput(): void{

}
}
