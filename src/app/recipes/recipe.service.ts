import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('avocado salsa chicken recipe', 'Your new favorite 30-minute dinner recipe!', 'http://wearychef.com/wp-content/uploads/2013/05/avocado-salsa-chicken-12-150x150.jpg', [
      new Ingredient('Chicken Breast', 2),
      new Ingredient('avocados', 2),
      new Ingredient('Salsa', 1) 
    ]),
    new Recipe('turkey sandwich with goat cheese and jam', 'Make your tastebuds sing! ', 'http://wearychef.com/wp-content/uploads/2016/01/turkey-sandwich-with-goat-cheese-and-jam-17-150x150.jpg', [])
  ]

  constructor(private http: Http) {}

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
    return this.http.post('https://recipebook-4a6f8.firebaseio.com/recipes.json', body, { headers: headers });
  }

  fetchData() {
    return this.http.get('https://recipebook-4a6f8.firebaseio.com/recipes.json')
      .map((response: Response) => response.json()
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data
        }
      ));
  }

}
