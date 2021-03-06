import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // binding this property and sending it outside
  @Input() recipeId: number;
}
