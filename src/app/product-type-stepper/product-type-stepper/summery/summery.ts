import { Component } from '@angular/core';
import { SummeryChooseDials } from "./summery-choose-dials/summery-choose-dials";
import { SummeryDialsInfornation } from "./summery-dials-infornation/summery-dials-infornation";

@Component({
  selector: 'app-summery',
  imports: [SummeryChooseDials, SummeryDialsInfornation],
  templateUrl: './summery.html',
  styleUrl: './summery.scss',
})
export class Summery {

}
