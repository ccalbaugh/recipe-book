import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
