import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { servicePopup } from '../service-popup';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-popup',
  imports: [RouterLink],
  templateUrl: './product-popup.html',
  styleUrl: './product-popup.scss',
})
export class ProductPopup{
  constructor(private _servicePopup: servicePopup,) {

  }

  close() {
    this._servicePopup.togglePopup()

  }

  numberFun(num:number) {
   console.log(this._servicePopup.popupNumber.value);
    return this._servicePopup.changePopupNumber(num)
    
  }
}
