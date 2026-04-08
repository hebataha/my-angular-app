import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summery-card-advanced',
  imports: [],
  templateUrl: './summery-card-advanced.html',
  styleUrl: './summery-card-advanced.scss',
})
export class SummeryCardAdvanced {
  @Input() enhance!:boolean;
}
