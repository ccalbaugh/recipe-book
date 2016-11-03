import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('avocado salsa chicken recipe', 'Dreamy, cheesy Avocado Salsa Chicken just might be your new favorite 30-minute dinner recipe!', 'http://wearychef.com/wp-content/uploads/2013/05/avocado-salsa-chicken-12.jpg', []),
    new Recipe('turkey sandwich with goat cheese and jam', ' This grown up turkey sandwich will make your tastebuds sing! ', 'http://wearychef.com/wp-content/uploads/2016/01/turkey-sandwich-with-goat-cheese-and-jam-17-750x500.jpg', [])
  ]

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}
