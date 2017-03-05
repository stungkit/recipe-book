import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();
  
  recipe = new Recipe('Berserk', 'Guts', 'http://vignette1.wikia.nocookie.net/berserk/images/8/8c/Berserker_Armour_Version_2.png/revision/latest?cb=20120517182924');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
 
}
