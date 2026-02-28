import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from './interface/product';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule, CommonModule],
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
      proQuantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      proPrice: new FormControl(0, [Validators.required]),

    }),
    notes: new FormControl("", [Validators.required]),
    allProducts: new FormArray([

    ])


  })
get allProducts(): FormArray {
  return this.form.get('allProducts') as FormArray;
}
  createProductGroup(): FormGroup {
    return new FormGroup({
      proName: new FormControl<any>(null, [Validators.required]),
      proQuantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      proPrice: new FormControl(0, [Validators.required]),
    })
  }

  submit() {
    console.log(this.form.value);

  }

  add() {
    (this.form.get('allProducts') as FormArray).push(this.createProductGroup())
    console.log(this.form.get('allProducts'));
    
  }

  delete(i:number){
  this.allProducts.removeAt(i)
    
  }

}
