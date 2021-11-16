import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  Recipes_saved_Items:any[] = [];
  constructor() { }


  addRecipeToLocalStorage(recipe:any){

    let recipes = this.getRecipesItems();

    if(recipes) {
      recipes.push(recipe);
      localStorage.setItem('Recipes',JSON.stringify(recipes))
    } else {
      this.Recipes_saved_Items.push(recipe);
      localStorage.setItem('Recipes',JSON.stringify(this.Recipes_saved_Items));
    }


  }

  // get data
  getRecipesItems(){
    let items:any = localStorage.getItem('Recipes');
    return JSON.parse(items)
  }

  // remove data
  removeData(){}


}
