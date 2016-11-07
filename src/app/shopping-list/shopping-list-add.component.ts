import { Component, OnChanges, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient; // bundle it up and send it outside
  isAdd = true; // Makes adding an item the default behaviour

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null}; // This means the item in no longer null, it just contains properties that are set to null.
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngredient);
    } else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

}
