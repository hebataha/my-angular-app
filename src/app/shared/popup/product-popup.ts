import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductPopup {
   popupStatus = new BehaviorSubject(false);

  togglePopup(){
    return this.popupStatus.next(!this.popupStatus.value)
  }
}
