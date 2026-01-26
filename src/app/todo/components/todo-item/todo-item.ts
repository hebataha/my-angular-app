import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [MatButtonModule,MatToolbarModule,MatIconModule,JsonPipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() item: any = "";


}
