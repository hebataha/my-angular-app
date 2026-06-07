import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerType } from "../customer-type/customer-type";

@Component({
  selector: 'app-consumer-info-card',
  imports: [FormsModule, CustomerType],
  templateUrl: './consumer-info-card.html',
  styleUrl: './consumer-info-card.scss',
})
export class ConsumerInfoCard {
  citizenStatus: string = "";

}
