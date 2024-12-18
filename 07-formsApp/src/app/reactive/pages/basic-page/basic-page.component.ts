import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', 
      [ 
        Validators.required, 
        Validators.minLength(3) 
      ]],
    price: [0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ],
    inStorage: [0,
      [
        Validators.required,
        Validators.min(0)
      ]],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }


  onSave(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    };
    console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});
  }


}
