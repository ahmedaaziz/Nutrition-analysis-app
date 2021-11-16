import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './components/recipes/add-recipe/add-recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from "@angular/forms";
import { NutritionDataTableComponent } from './components/recipes/nutrition-data-table/nutrition-data-table.component';



@NgModule({
  declarations: [
    HomeComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    AddRecipeComponent,
    HeaderComponent,
    NutritionDataTableComponent
  ],
  exports:[
    HomeComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    AddRecipeComponent,
    HeaderComponent,
    NutritionDataTableComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class FeaturesModule { }
