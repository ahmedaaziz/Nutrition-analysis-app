import { HttpService } from 'src/app/core/services/http/http.service';
import { LocalStorageService } from './../../../../core/services/local-storage/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  loadedRecipe:any;
  url:string='';
  contentArr:any[] = [];
  recipeData:any;
  constructor(
    private localStorageServ:LocalStorageService,
    private http:HttpService,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadThisRecipe();
    console.log(this.loadedRecipe);
    this.convertContentToArray();
  }

  loadThisRecipe(){
    this.url = this.router.snapshot.params.id;
    let value = this.localStorageServ.getRecipesItems();
    this.loadedRecipe = value[this.url];
  }

  convertContentToArray(){
    let content = this.loadedRecipe.recipeContent;
    let contentChange = content.split(/[\r\n]+/);
    this.contentArr = contentChange;
  }

  getTotalNutrition(){
    console.log('Clicked');
    this.http.getData(encodeURI(this.loadedRecipe.recipeContent))
    .subscribe(
      res => {
        console.log(res);
        if(res.calories == 0) {
          console.log(res.calories);
          console.warn('Please Enter Valid Ingredients');
          return;
        }
        else
        {
          this.recipeData = res;
          // console.info(' Calories ', res.calories);
          // console.info(' Fat ', res.totalNutrients.FAT);
          // console.info(' Cholesterol ', res.totalNutrients.CHOLE);
          // console.info(' Sodium ', res.totalNutrients.NA);
          // console.info(' Protien ', res.totalNutrients.PROCNT);
          // console.info(' Vitamins ', res.totalNutrients.TOCPHA);
          // console.info(' Calcium ', res.totalNutrients.CA);
          // console.info(' Iron ', res.totalNutrients.FE);
          // console.info(' Potassium ', res.totalNutrients.K);
          // console.info(' Carb ', res.totalNutrients.CHOCDF);

        }
      },
    err => {
      console.log('err ',err.msg)
    },
    ()=>{
      console.log('complete');

    }

    )
  }

}
