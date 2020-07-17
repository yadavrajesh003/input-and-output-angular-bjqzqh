

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // value display in child component
  currentItem = 'Television';  
  items = ['item1', 'item2', 'item3', 'item4']; 

 // 
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

