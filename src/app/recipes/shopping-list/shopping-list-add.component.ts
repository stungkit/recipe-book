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
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient);
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

}
