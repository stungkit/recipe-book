import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RECIPE_ROUTES } from './recipes/recipes.routes';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
