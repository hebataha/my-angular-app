import { Component } from '@angular/core';
import { ProductType } from '../../../shared/enums/product-type';
import { CountStepperService } from '../services/count-stepper-service';
import { servicePopup } from '../../../shared/popup/service-popup';

@Component({
  selector: 'app-stepper-step',
  imports: [],
  templateUrl: './stepper-step.html',
  styleUrl: './stepper-step.scss',
})
export class StepperStep {
  stepNum: number = 1;
    typeNum: number = 1;

  step1: number = 1;
  step2: number = 2;
  step3: number = 3;
  step4: number = 4;
  step5: number = 5;


  ProductType = ProductType;
  constructor(private _countStepperService: CountStepperService, private _servicePopup: servicePopup) {
    this._countStepperService.stepperCount.subscribe((val) => this.stepNum = val);
    this._servicePopup.popupNumber.subscribe((val) => this.typeNum = val);

  }
}
