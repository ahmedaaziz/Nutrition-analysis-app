import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AddRecipeComponent } from "./features/components/recipes/add-recipe/add-recipe.component";
import { RecipeDetailsComponent } from "./features/components/recipes/recipe-details/recipe-details.component";
import { RecipesComponent } from "./features/components/recipes/recipes.component";

const routes: Routes = [
  {
    path:'',
    component:RecipesComponent
  },
  {
    path:'add-recipe',
    component:AddRecipeComponent
  },
  {
    path:'recipe/:id',
    component:RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
