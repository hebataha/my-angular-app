import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountStepperService {
  stepperCount = new BehaviorSubject(1);

  increaseCount() {
    this.stepperCount.next(this.stepperCount.value + 1);
 
    
  }

  decreaseCount() {
    this.stepperCount.next(this.stepperCount.value - 1)
  }
}
