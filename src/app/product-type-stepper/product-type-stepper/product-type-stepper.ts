import { Component } from '@angular/core';
import { servicePopup } from '../../shared/popup/service-popup';
import { ProductType } from '../../shared/enums/product-type';
import { Summery } from './summery/summery';
import { StepperStep } from './stepper-step/stepper-step';
import { ChooseDial } from "./steps/choose-dial/choose-dial";
import { ChooseDialOptions } from './steps/choose-dial-options/choose-dial-options';
import { ChoosePlan } from "./steps/choose-plan/choose-plan";
import { ConsumerInfoCard } from "./steps/consumer-info-card/consumer-info-card";
import { CountStepperService } from './services/count-stepper-service';

@Component({
  selector: 'app-product-type-stepper',
  imports: [Summery, StepperStep, ChooseDialOptions, ChooseDial, ChoosePlan, ConsumerInfoCard],
  templateUrl: './product-type-stepper.html',
  styleUrl: './product-type-stepper.scss',
})
export class ProductTypeStepper {
  stepNum: number = 1;
  ProductType = ProductType;
  stepCount: number = 1;
  constructor(private _servicePopup: servicePopup, private _countStepperService: CountStepperService) {
    this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val);
    this._countStepperService.stepperCount.subscribe((stepNumber) => this.stepCount = stepNumber)
  }

  back(): void {
    // this.stepCount = this.stepCount - 1
    this._countStepperService.decreaseCount()

    console.log(this.stepCount);
    if (this.stepCount === 1) {
      return;
    }
  }
  next(): void {
    // this.stepCount = this.stepCount + 1
    this._countStepperService.increaseCount()

    console.log(this.stepCount);
    if (this.stepCount > 5) {
      this.stepCount = 5;
    }
  }
}
