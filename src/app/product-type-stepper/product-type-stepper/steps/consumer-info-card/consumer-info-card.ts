import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChooseDial } from "../choose-dial/choose-dial";
import { CustomerType } from "../customer-type/customer-type";

@Component({
  selector: 'app-consumer-info-card',
  imports: [FormsModule, ChooseDial, CustomerType],
  templateUrl: './consumer-info-card.html',
  styleUrl: './consumer-info-card.scss',
})
export class ConsumerInfoCard {
  citizenStatus: string = "";

}
