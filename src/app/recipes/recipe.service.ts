import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Berserk', 'Guts', 'http://vignette1.wikia.nocookie.net/berserk/images/8/8c/Berserker_Armour_Version_2.png/revision/latest?cb=20120517182924', [
      new Ingredient('Guts!', 50),
      new Ingredient('Griffith', 25),
      new Ingredient('Casca', 25)
    ]),
    new Recipe('Tokyo Ghoul', 'Ken Kaneki', 'http://img00.deviantart.net/5610/i/2015/032/a/9/tokyo_ghoul_ken_kaneki_wallpaper_by_arehina-d82j651.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
