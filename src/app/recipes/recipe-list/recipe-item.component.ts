import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
