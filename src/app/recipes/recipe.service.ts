import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx";

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

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-f3f5b.firebaseio.com/recipes.json', body, {
      'headers': headers
    })
  }

  fetchData() {
    return this.http.get('https://recipebook-f3f5b.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
        }
      );
  }
}
