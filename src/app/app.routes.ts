import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todo } from './todo/todo';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "todoApp", component: Todo },
];
