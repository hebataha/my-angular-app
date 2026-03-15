import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class servicePopup {
  popupStatus = new BehaviorSubject(false);
  popupNumber = new BehaviorSubject(1);

  togglePopup(){
    return this.popupStatus.next(!this.popupStatus.value)
  }

  changePopupNumber(num:number){
    return this.popupNumber.next(num)
  }
}
