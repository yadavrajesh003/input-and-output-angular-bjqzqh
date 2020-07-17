import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ItemOutputComponent {
  @Input() item: string; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}