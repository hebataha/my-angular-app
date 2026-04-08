import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservedDials {
  dialsNumber = new BehaviorSubject(0);
  dialsNumber2 = new BehaviorSubject(0);
  dialsNumber3 = new BehaviorSubject(0);
  dialsNumber4 = new BehaviorSubject(0);

}
