import { LocalStorageService } from './../../../../core/services/local-storage/local-storage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  RecipesList:any[] = [];
  @Output() RecipeFound = new EventEmitter<boolean>();
  // @Input() RecipeFound:boolean = false;
  constructor(
    private LocalStorageService:LocalStorageService,
    private router : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getRecipesList();
  }

  getRecipesList(){
    this.RecipesList = this.LocalStorageService.getRecipesItems();
    if(this.RecipesList) {
      // this.RecipeFound = true;
      console.log('Recipes Found',this.RecipeFound);

    } else {
      // this.RecipeFound = false;
      console.log('Not Found',this.RecipeFound);

    }
    // console.log(this.RecipesList)
    // console.log(this.RecipesList[1])
  }

  checkRecipeStat(value:boolean){
    this.RecipeFound.emit(value);
  }

}
