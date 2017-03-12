import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Berserk', 'Guts', 'http://vignette1.wikia.nocookie.net/berserk/images/8/8c/Berserker_Armour_Version_2.png/revision/latest?cb=20120517182924', []),
    new Recipe('Tokyo Ghoul', 'Ken Kaneki', 'http://img00.deviantart.net/5610/i/2015/032/a/9/tokyo_ghoul_ken_kaneki_wallpaper_by_arehina-d82j651.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
