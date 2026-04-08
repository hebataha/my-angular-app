import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SimNumber } from '../sim-number/sim-number';
import { ReservedDials } from '../services/reserved-dials';

@Component({
  selector: 'app-choose-dial-options',
  imports: [FormsModule, SimNumber],
  templateUrl: './choose-dial-options.html',
  styleUrl: './choose-dial-options.scss',
})
export class ChooseDialOptions {
  constructor(private _ReservedDials: ReservedDials) {
    this._ReservedDials.dialsNumber.subscribe((numberVal) => this.theNumber = numberVal)
    this._ReservedDials.dialsNumber3.subscribe((numberVal) => this.theNumber3 = numberVal)
    this._ReservedDials.dialsNumber2.subscribe((numberVal) => this.theNumber2 = numberVal)
    this._ReservedDials.dialsNumber4.subscribe((numberVal) => this.theNumber4 = numberVal)


  }
  dial1: boolean = false;
  dial2: boolean = false;
  dial3: boolean = false;
  dial4: boolean = false;

  theNumber: number = 0;
  theNumber2: number = 0;
  theNumber3: number = 0;
  theNumber4: number = 0;

  inputNumber(num: number): void {
    if (this.dial3) {
      this._ReservedDials.dialsNumber3.next(num);

    }
    else {
      this._ReservedDials.dialsNumber3.next(0);

    }

    if (this.dial1) {
      this._ReservedDials.dialsNumber.next(num);

    }
    else {
      this._ReservedDials.dialsNumber.next(0);

    }
    if (this.dial2) {
      this._ReservedDials.dialsNumber2.next(num);

    }
    else {
      this._ReservedDials.dialsNumber2.next(0);

    }

    if (this.dial4) {
      this._ReservedDials.dialsNumber4.next(num);

    }
    else {
      this._ReservedDials.dialsNumber4.next(0);

    }
  }
}




