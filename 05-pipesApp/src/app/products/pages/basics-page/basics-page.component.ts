import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'Omar Hernandez';
  public nameUpper: string = 'OMAR HERNANDEZ';
  public nameTitle: string = 'omar hernandez';

}
