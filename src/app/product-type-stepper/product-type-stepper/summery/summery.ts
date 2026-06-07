import { Component } from '@angular/core';
import { SummeryChooseDials } from "./summery-choose-dials/summery-choose-dials";
import { SummeryDialsInformation } from "./summery-dials-information/summery-dials-information";
import { SummeryCustomerInformation } from "./summery-customer-information/summery-customer-information";
import { SummeryCardAdvanced } from "./summery-card-advanced/summery-card-advanced";
import { CountStepperService } from '../services/count-stepper-service';
import { ProductType } from '../../../shared/enums/product-type';
import { servicePopup } from '../../../shared/popup/service-popup';
import { ReservedDials } from '../steps/services/reserved-dials';

@Component({
  selector: 'app-summery',
  imports: [SummeryChooseDials, SummeryDialsInformation, SummeryCustomerInformation, SummeryCardAdvanced],
  templateUrl: './summery.html',
  styleUrl: './summery.scss',
})
export class Summery {
  stepNum: number = 1;
  stepCount: number = 1;
  ProductType = ProductType;
  cardColor:boolean = true;
  imageShown:boolean = false;

  constructor(private _servicePopup: servicePopup, private _countStepperService: CountStepperService, private _ReservedDials: ReservedDials) {
    this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val);
    this._countStepperService.stepperCount.subscribe((stepNumber) => this.stepCount = stepNumber)
    this._ReservedDials.dialsNumber.subscribe((numberVal) => this.theNumber = numberVal)
    this._ReservedDials.dialsNumber3.subscribe((numberVal) => this.theNumber3 = numberVal)
    this._ReservedDials.dialsNumber2.subscribe((numberVal) => this.theNumber2 = numberVal)
    this._ReservedDials.dialsNumber4.subscribe((numberVal) => this.theNumber4 = numberVal)

  }
  theNumber: number = 0;
  theNumber2: number = 0;
  theNumber3: number = 0;
  theNumber4: number = 0;


}
