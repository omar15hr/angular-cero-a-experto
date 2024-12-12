import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    }
  ];


  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  } 

}
