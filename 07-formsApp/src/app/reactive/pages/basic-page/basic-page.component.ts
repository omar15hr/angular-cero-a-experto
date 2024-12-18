import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: [''],
    price: [0],
    inStorage: [0],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSave(): void {
    console.log(this.myForm.value);
  }


}
