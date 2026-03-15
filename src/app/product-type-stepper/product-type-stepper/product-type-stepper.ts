import { Component } from '@angular/core';
import { servicePopup } from '../../shared/popup/service-popup';
import { ProductType } from '../../shared/enums/product-type';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-product-type-stepper',
  imports: [JsonPipe],
  templateUrl: './product-type-stepper.html',
  styleUrl: './product-type-stepper.scss',
})
export class ProductTypeStepper {
  stepNum: number = 1;
  ProductType = ProductType;
  ngOnInit() {  }
  constructor(private _servicePopup: servicePopup) {
    this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val)
  }

}
