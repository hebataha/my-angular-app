import { Component } from '@angular/core';
import { ProductType } from '../../../shared/enums/product-type';
import { servicePopup } from '../../../shared/popup/service-popup';

@Component({
  selector: 'app-stepper-step',
  imports: [],
  templateUrl: './stepper-step.html',
  styleUrl: './stepper-step.scss',
})
export class StepperStep {
  stepNum: number = 1;
  ProductType = ProductType;
    constructor(private _servicePopup: servicePopup) {
      this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val)
    }
}
