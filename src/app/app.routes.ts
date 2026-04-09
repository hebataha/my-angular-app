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
  { path: "", component: Login , title:"login" },
  { path: "todoApp", component: Todo , title:"todo" },
  { path: "register", component: Register , title:"register" },
  { path: "login", component: Login ,title:"login"},
  { path: "forgetPassword", component: ForgetPassword ,title:"forget pass"},
  { path: "formGroup", component: FromGroup, title:"formGroup" },
  { path: "productPopup", component: ProductPopup , title:"productPopup"},
  { path: "productStepper", component: ProductTypeStepper , title:"productStepper" },




];
