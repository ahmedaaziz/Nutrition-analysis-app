import { LocalStorageService } from './../../../../core/services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  RecipesList:any[] = [];
  constructor(
    private LocalStorageService:LocalStorageService,
    private router : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getRecipesList();
  }

  getRecipesList(){
    this.RecipesList = this.LocalStorageService.getRecipesItems();
    console.log(this.RecipesList)
    console.log(this.RecipesList[1])
  }
}
