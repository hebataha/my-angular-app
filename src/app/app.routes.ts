import { Routes } from '@angular/router';
import { Todo } from './components/todo/todo';
import { Home } from './components/home/home';

export const routes: Routes = [
  {path:"" , component:Home},
  {path:"todoApp", component:Todo},
];
