import { Component } from '@angular/core';
import { SummeryChooseDials } from "./summery-choose-dials/summery-choose-dials";
import { SummeryDialsInformation } from "./summery-dials-information/summery-dials-information";
import { SummeryCustomerInformation } from "./summery-customer-information/summery-customer-information";
import { SummeryCardAdvanced } from "./summery-card-advanced/summery-card-advanced";
import { SummeryTotal } from "./summery-total/summery-total";
import { SummeryTotalDetails } from "./summery-total-details/summery-total-details";
import { DialCardAdvanced } from "./dial-card-advanced/dial-card-advanced";

@Component({
  selector: 'app-summery',
  imports: [SummeryChooseDials, SummeryDialsInformation, SummeryCustomerInformation, SummeryCardAdvanced, SummeryTotal, SummeryTotalDetails, DialCardAdvanced],
  templateUrl: './summery.html',
  styleUrl: './summery.scss',
})
export class Summery {

}
