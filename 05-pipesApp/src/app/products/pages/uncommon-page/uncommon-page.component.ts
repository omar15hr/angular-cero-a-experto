import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Omar Hernandez';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(): void {
    this.name = 'Brina Diaz';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Omar', 'Brina', 'Maria', 'Juan', 'Pedro', 'Luis', 'Carlos', 'Daniel', 'Fernando', 'Gabriel'];
  public clientsMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'

  }

  deleteClient(): void {
    this.clients.shift();
  }

}
