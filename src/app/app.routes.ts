import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todo } from './todo/todo';
import { Register } from './forms/components/register/register';
import { Login } from './forms/components/login/login';
import { ForgetPassword } from './forms/components/forget-password/forget-password';

export const routes: Routes = [
  { path: "", component: Home },
  { path: "todoApp", component: Todo },
  { path: "register", component: Register },
  { path: "login", component: Login },
  { path: "forgetPassword", component: ForgetPassword },

];
