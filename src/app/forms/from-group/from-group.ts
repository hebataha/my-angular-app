import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from './interface/product';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './from-group.html',
  styleUrl: './from-group.scss',
})
export class FromGroup {
  productInfo: Product[] = []

  constructor() {
    this.productInfo = [{
      name: "laptop",
      price: 4000
    },
    {
      name: "Ipad",
      price: 5000
    },
    {
      name: "Iphone",
      price: 15000
    }
    ]
  }
  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    address: new FormControl("", [Validators.required]),
    product: new FormGroup({
      proName: new FormControl<any>(null, [Validators.required]),
      proQuantity: new FormControl(1, [Validators.required,Validators.min(1)]),
      proPrice: new FormControl(0, [Validators.required]),

    }),
    notes: new FormControl("", [Validators.required]),


  })

  submit() {
    console.log(this.form.value);

  }

}
