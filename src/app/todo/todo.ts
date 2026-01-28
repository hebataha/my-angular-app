import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TodoIem } from './interface/todo';
import { CommonModule, JsonPipe } from '@angular/common';
import { TodoItem } from './components/todo-item/todo-item';

@Component({
  selector: 'app-todo',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TodoItem,
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit {
  todoArray: TodoIem[] = [];
  filterArray: any = [];
  inputTask: string = '';
  updatedTodoArray: TodoIem[] = [];
  searchResult: string = '';
  itemSelected: {} = {};

  constructor() {
    // this.todoArray = [{
    //   id: 0,
    //   title: "",
    //   description: "",
    //   isRead: true,
    // }]
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  addTodo(): any {
    this.todoArray.push({
      id: this.todoArray.length + 1,
      title: this.inputTask,
    });
    this.inputTask = '';
    this.searchResult = '';
  }
  valInput() {
    this.todoArray = this.todoArray.filter((todo: any) => {
      if (todo.title.toLowerCase().includes(this.inputTask.toLowerCase())) {
        this.searchResult = '';
        return todo.title.toLowerCase().includes(this.inputTask);
      } else {
        this.searchResult = 'No Terms match!';
        console.log(this.searchResult);
      }
    });

    // console.log(this.todoArray)
    // if (this.todoArray == "") {
    // }
  }

  checkInp() {
    // if (this.inputTask == "") {
    //   alert("empty")
    // }
  }

  deleteItem(id: number) {
    this.todoArray = this.todoArray.filter((todo: any) => todo.id !== id);
    // console.log('parent received:', id);
    // console.log(this.todoArray);
  }

  handleTitle(item: any) {
    console.log(item , "from parent");
    this.itemSelected = item;
    this.inputTask = item.title;
  }
}
