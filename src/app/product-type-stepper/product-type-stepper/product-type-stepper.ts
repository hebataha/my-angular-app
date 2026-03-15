import { Component } from '@angular/core';
import { servicePopup } from '../../shared/popup/service-popup';

@Component({
  selector: 'app-product-type-stepper',
  imports: [],
  templateUrl: './product-type-stepper.html',
  styleUrl: './product-type-stepper.scss',
})
export class ProductTypeStepper {
  stepNum: number = 1;
  constructor(private _servicePopup: servicePopup) {
    this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val)
  }


}
