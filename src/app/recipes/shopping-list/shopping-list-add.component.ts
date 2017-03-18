import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
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
