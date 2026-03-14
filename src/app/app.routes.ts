import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todo } from './todo/todo';
import { Register } from './forms/components/register/register';
import { Login } from './forms/components/login/login';
import { ForgetPassword } from './forms/components/forget-password/forget-password';
import { FromGroup } from './forms/from-group/from-group';
import { ProductPopup } from './shared/popup/product-popup/product-popup';
import { ProductTypeStepper } from './product-type-stepper/product-type-stepper/product-type-stepper';

export const routes: Routes = [
  { path: "", component: Login },
  { path: "todoApp", component: Todo },
  { path: "register", component: Register },
  { path: "login", component: Login },
  { path: "forgetPassword", component: ForgetPassword },
  { path: "formGroup", component: FromGroup },
  { path: "productPopup", component: ProductPopup },
  { path: "productStepper", component: ProductTypeStepper },




];
