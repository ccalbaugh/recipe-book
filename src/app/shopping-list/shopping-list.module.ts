import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
    declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
    ],
    imports: [FormsModule, CommonModule] // CommonModule is used in leau of BrowserModule (that gives access to ngFor dir), which can only be used once.
})
export class ShoppingListModule {}