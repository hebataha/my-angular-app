import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from "./shared/footer/footer";
import { ProductPopup } from './shared/popup/product-popup/product-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,ProductPopup],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
