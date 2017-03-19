import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Ingredient } from '../../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  @Input()
  item: Ingredient;

  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
   if (!this.isAdd) {
     // Edit
   } else {
     this.item = new Ingredient(ingredient.name, ingredient.amount);
     this.sls.addItem(this.item);
   }
  }

}
