import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountStepperService {
  stepperCount = new BehaviorSubject(1);

  increaseCount(stepperCount: number) {
    return stepperCount + 1
  }

  decreaseCount(stepperCount: number) {
    return stepperCount - 1
  }
}
