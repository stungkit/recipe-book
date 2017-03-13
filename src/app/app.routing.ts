import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
