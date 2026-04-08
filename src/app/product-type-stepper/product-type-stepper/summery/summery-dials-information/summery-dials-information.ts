import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summery-dials-information',
  imports: [],
  templateUrl: './summery-dials-information.html',
  styleUrl: './summery-dials-information.scss',
})
export class SummeryDialsInformation {
  @Input() numberValue!: number;
  constructor() {
  }

}
