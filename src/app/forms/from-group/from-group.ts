import { CommonModule } from '@angular/common';
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
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './from-group.html',
  styleUrl: './from-group.scss',
})
export class FromGroup implements OnInit {
  productInfo: Product[] = [];
  selectedValue: string[] = [];
  totalPrice :[] = [];
 


  ngOnInit() {
 console.log("selectedValue",this.selectedValue);
    const firstGroup = this.allProducts.at(0);
    console.log(firstGroup.get('proQuantity')?.value);
    firstGroup.get('proQuantity')?.valueChanges.subscribe(value => {
      value
    })
    firstGroup.get('proName')?.valueChanges.subscribe(value => {
      value ? firstGroup.get('proPrice')?.setValue(value.price) : "";
      this.selectedValue.push(value.name);
      console.log(this.selectedValue);


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



  form = new FormGroup({
    name: new FormControl('ssssssssssssssssssssssss', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('amltaha866@yahoo.com', [Validators.required]),
    // notes: new FormControl('', [Validators.required]),
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
      this.selectedValue.push(value?.name!);
          console.log(this.selectedValue);


    });
    // console.log(this.selectedValue);

    // this.productInfo.map((pro) => {

    //   if (pro.name === this.selectedValue) {

    //   }
    // }
    // )

  }

  delete(i: number) {
    this.allProducts.removeAt(i);
    this.allProducts.updateValueAndValidity();
    this.selectedValue.splice(i, 1)
    console.log("deleted" ,this.selectedValue);
    console.log(this.allProducts);
    
    

    // this.form.updateValueAndValidity();
    // this.allProducts.updateValueAndValidity();

  }

  clearAll(): void {
    this.allProducts.clear();
    this.selectedValue = [""]

  }
}
