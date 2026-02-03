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
  itemSelected!: TodoIem;
  showEdit: boolean = false;
  showClear: boolean = false;


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
    this.filterArray = this.todoArray.filter((todo: any) => {
      if (todo.title.toLowerCase().includes(this.inputTask.toLowerCase())) {
        this.searchResult = '';
        return todo.title.toLowerCase().includes(this.inputTask);
      } else {
        this.searchResult = 'No Terms match!';
      }
    });

    // if (this.todoArray == "") {
    // }
    this.todoArray = this.filterArray;
    this.showClear = true



  }

  checkInp() {
    // if (this.inputTask == "") {
    //   alert("heba")

    // }
  }

  deleteItem(id: number) {
    this.todoArray = this.todoArray.filter((todo: any) => todo.id !== id);
  }

  handleTitle(item: TodoIem) {
    this.itemSelected = item;
    this.inputTask = item.title;
    item.title = this.inputTask;
    this.showEdit = true;

  }

  update() {
    // this.inputTask = this.itemSelected.title;
    this.itemSelected.title = this.inputTask
    // this.inputTask = ""
    this.showEdit = false;
  }
  clear() {
    this.inputTask = "";
    this.todoArray = []
    
    
  }
}
