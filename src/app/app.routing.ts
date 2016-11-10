import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' }, // Because the WHOLE MODULE is being bootstrapped,
    // the path needs to be relative to src.  The class name of the MODULE ( the router file is imported to the module) is behind the #.
    { path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);