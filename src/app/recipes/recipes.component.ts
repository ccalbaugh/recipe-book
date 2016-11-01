import { Component, OnInit } from '@angular/core';

import { RecipeItemComponent } from './recipe-list/recipe-item.component';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
