import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

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

  // keyValue
  public person = {
    name: 'Omar Hernandez',
    age: 30,
    address: 'Santiago'
  }

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value) )
  );

  public promiseValue: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 2000);
  })

}
