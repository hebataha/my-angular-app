import { Component } from '@angular/core';
import { SummeryChooseDials } from "./summery-choose-dials/summery-choose-dials";
import { SummeryDialsInformation } from "./summery-dials-information/summery-dials-information";
import { SummeryCustomerInformation } from "./summery-customer-information/summery-customer-information";
import { SummeryCardAdvanced } from "./summery-card-advanced/summery-card-advanced";
import { SummeryTotal } from "./summery-total/summery-total";
import { SummeryTotalDetails } from "./summery-total-details/summery-total-details";
import { DialCardAdvanced } from "./dial-card-advanced/dial-card-advanced";
import { CountStepperService } from '../services/count-stepper-service';
import { ProductType } from '../../../shared/enums/product-type';
import { servicePopup } from '../../../shared/popup/service-popup';
import { ReservedDials } from '../steps/services/reserved-dials';
import { CustomerInfo } from "../steps/customer-info/customer-info";
import { ConsumerInfoCard } from "../steps/consumer-info-card/consumer-info-card";

@Component({
  selector: 'app-summery',
  imports: [SummeryChooseDials, SummeryDialsInformation, SummeryCustomerInformation, SummeryCardAdvanced, SummeryTotal, SummeryTotalDetails, DialCardAdvanced, CustomerInfo, ConsumerInfoCard],
  templateUrl: './summery.html',
  styleUrl: './summery.scss',
})
export class Summery {
  stepNum: number = 1;
  stepCount: number = 1;
  ProductType = ProductType;

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
