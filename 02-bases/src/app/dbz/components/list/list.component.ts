import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDeleteId.emit(index);
  }
}
