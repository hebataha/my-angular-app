import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { TodoIem } from '../../interface/todo';

@Component({
  selector: 'app-todo-item',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() item: any = [];
  @Output() deleteItem = new EventEmitter<number>();
  @Input() listArray: TodoIem[] = []
  @Input() typedTodo: string = ""
  handelDeleteItem() {
    this.deleteItem.emit(this.item.id);
    console.log(this.listArray);
  }
  handleEditItem() {

  }
}
