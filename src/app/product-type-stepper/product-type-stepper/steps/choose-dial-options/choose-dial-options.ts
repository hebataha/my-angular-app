import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SimNumber } from '../sim-number/sim-number';

@Component({
  selector: 'app-choose-dial-options',
  imports: [FormsModule, SimNumber],
  templateUrl: './choose-dial-options.html',
  styleUrl: './choose-dial-options.scss',
})
export class ChooseDialOptions {
  dial1: boolean = false;
  dial2: boolean = false;
  dial3: boolean = false;
  dial4: boolean = false;


}
