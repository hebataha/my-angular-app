import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { servicePopup } from '../service-popup';

@Component({
  selector: 'app-product-popup',
  imports: [],
  templateUrl: './product-popup.html',
  styleUrl: './product-popup.scss',
})
export class ProductPopup {
  constructor(private _servicePopup: servicePopup) {

  }
  close() {
    console.log("close");
    this._servicePopup.togglePopup()

  }
}
