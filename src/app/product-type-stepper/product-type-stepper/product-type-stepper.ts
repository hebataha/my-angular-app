import { Component } from '@angular/core';
import { servicePopup } from '../../shared/popup/service-popup';
import { ProductType } from '../../shared/enums/product-type';
import { Summery } from './summery/summery';
import { SetupOptions } from './steps/setup-options/setup-options';
import { StepperStep } from './stepper-step/stepper-step';
import { ChooseDial } from "./steps/choose-dial/choose-dial";
import { ChooseDialOptions } from './steps/choose-dial-options/choose-dial-options';
import { CustomerInfo } from "./steps/customer-info/customer-info";
import { ChoosePlan } from "./steps/choose-plan/choose-plan";
import { ChooseBundle } from "./steps/choose-bundle/choose-bundle";
import { ExtraAddons } from "./steps/extra-addons/extra-addons";
// import { Use Points } from "./steps/use-points/use-points";
import { DialInformation } from "./steps/dial-information/dial-information";
import { ChooseDialInput } from "./steps/choose-dial-input/choose-dial-input";
import { IdInformation } from "./steps/id-information/id-information";
import { UploadContract } from "../../upload-contract/upload-contract";
import { ContractLanguage } from './steps/contract-language/contract-language';
import { DialInfoCard } from "./summery/dial-info-card/dial-info-card";
import { InsertDial } from "./steps/insert-dial/insert-dial";
import { DialPatternContainer } from "./steps/dial-pattern-container/dial-pattern-container";
import { ConsumerInfoCard } from "./steps/consumer-info-card/consumer-info-card";
import { CountStepperService } from './services/count-stepper-service';

@Component({
  selector: 'app-product-type-stepper',
  imports: [Summery, SetupOptions, StepperStep, ChooseDialOptions, ChooseDial, CustomerInfo, ChoosePlan, ChooseBundle, ExtraAddons, DialInformation, ChooseDialInput, IdInformation, UploadContract, ContractLanguage, DialInfoCard, InsertDial, DialPatternContainer, ConsumerInfoCard],
  templateUrl: './product-type-stepper.html',
  styleUrl: './product-type-stepper.scss',
})
export class ProductTypeStepper {
  stepNum: number = 1;
  ProductType = ProductType;
  stepCount: number = 1;
  constructor(private _servicePopup: servicePopup ,private _countStepperService:CountStepperService) {
    this._servicePopup.popupNumber.subscribe((val) => this.stepNum = val);
    this._countStepperService.stepperCount.subscribe((stepNumber)=> this.stepCount = stepNumber )
  }

  back(): void {
    this.stepCount = this.stepCount - 1
    console.log(this.stepCount);
    if ( this.stepCount === 1) {
      return;
    }
  }
  next(): void {
    this.stepCount = this.stepCount + 1
    console.log(this.stepCount);
        if ( this.stepCount > 5) {
          this.stepCount = 5;
    }
  }
}
