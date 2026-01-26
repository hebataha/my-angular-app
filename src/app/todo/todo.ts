import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TodoIem } from './interface/todo';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { TodoItem } from './components/todo-item/todo-item';


@Component({
  selector: 'app-todo',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TodoItem, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit {
  todoArray: any = []
  inputTask: string = ""
  constructor() {
    this.todoArray = []
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  addTodo(): any {
    this.todoArray.push(this.inputTask)
    console.log(this.inputTask)
  }
  valInput(): void {
    // this.todoArray.filter((todo)=> this.inputTask === todo )

  }
}
