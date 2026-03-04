import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from './interface/product';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule, CommonModule, JsonPipe, FormsModule],
  templateUrl: './from-group.html',
  styleUrl: './from-group.scss',
})
export class FromGroup implements OnInit {
  productInfo: Product[] = [];

  ngOnInit() {

    const firstGroup = this.allProducts.at(0);
    firstGroup.get('proName')?.valueChanges.subscribe(value => {
      value ? firstGroup.get('proPrice')?.setValue(value.price) : ""
    })
  }

  constructor() {
    this.productInfo = [
      {
        name: 'laptop',
        price: 4000,
      },
      {
        name: 'Ipad',
        price: 5000,
      },
      {
        name: 'Iphone',
        price: 15000,
      },
    ];
  }

  selectChange() {
    // this.allProducts.at(0).valueChanges.subscribe(newValue => {
    //   console.log(newValue.proName);
    // });
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
    allProducts: new FormArray([
      new FormGroup({
        proName: new FormControl<any>(null, [Validators.required]),
        proQuantity: new FormControl(1, [
          Validators.required,
          Validators.min(1),
        ]),
        proPrice: new FormControl(0, [Validators.required]),
      }),
    ]),
  });
  get allProducts(): FormArray {
    return this.form.get('allProducts') as FormArray;
  }
  // createProductGroup(): FormGroup {

  //   const group = new FormGroup({
  //     proName: new FormControl<Product | null>(null, Validators.required),
  //     proQuantity: new FormControl(1, [Validators.required, Validators.min(1)]),
  //     proPrice: new FormControl(0, Validators.required),
  //   });

  //   // نسمع لتغيير اسم المنتج
  //   group.get('proName')?.valueChanges.subscribe(product => {
  //     if (product) {
  //       group.get('proPrice')?.setValue(product.price);
  //     }
  //   });

  //   return group;
  // }

  submit() {
    console.log(this.form.value);
  }

  add() {
    const group = new FormGroup({
      proName: new FormControl<Product | null>(null, Validators.required),
      proQuantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      proPrice: new FormControl(0, Validators.required),
    });

    this.allProducts.push(group);

    group.get('proName')?.valueChanges.subscribe((value) => {
      value ? group.get('proPrice')?.setValue(value?.price) : '';
    });
  }

  delete(i: number) {
    this.allProducts.removeAt(i);

    console.log(i, this.allProducts);
  }
}
