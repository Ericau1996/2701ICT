import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'store/:id', loadChildren: './store/store.module#StorePageModule' },
  { path: 'recipe/:id', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'recipelist', loadChildren: './recipelist/recipelist.module#RecipelistPageModule' },
  { path: 'storelist', loadChildren: './storelist/storelist.module#StorelistPageModule' },
  { path: 'recipeadd', loadChildren: './recipeadd/recipeadd.module#RecipeaddPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
