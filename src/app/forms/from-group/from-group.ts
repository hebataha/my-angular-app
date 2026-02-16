import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-group',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './from-group.html',
  styleUrl: './from-group.scss',
})
export class FromGroup {

  form = new FormGroup({
    name: new FormControl("", [Validators.required , Validators.minLength(4)]),
    address: new FormControl("", [Validators.required]),
    product: new FormGroup({
      proName: new FormControl("", [Validators.required]),
      proQuantity: new FormControl(0, [Validators.required]),
      proPrice: new FormControl(0, [Validators.required]),

    }),
    notes: new FormControl("", [Validators.required]),


  })

  submit() {
    console.log(this.form.value);

  }
}
