import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-dial',
  imports: [CommonModule,FormsModule],
  templateUrl: './choose-dial.html',
  styleUrl: './choose-dial.scss',
})
export class ChooseDial {
  selectedRadio: string = "pool";
}
