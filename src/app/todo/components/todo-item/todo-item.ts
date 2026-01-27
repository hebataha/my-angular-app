import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-todo-item',
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() item: any = "";
  @Output() deleteItem = new EventEmitter<number>();
  handelDeleteItem() {
    this.deleteItem.emit(this.item.id);
  }
}
