import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './../../../../core/services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpService } from "src/app/core/services/http/http.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipes?:any;
  content:any;
  formValues?:{};
  successMsg:boolean = false;
  errorMsg:boolean = false;

  constructor(
    private localStorage:LocalStorageService,
    private httpService:HttpService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(addRecipe:any){
    this.formValues = addRecipe.value;
    // this.content = encodeURI(addRecipe.value.recipeContent);
    this.localStorage.addRecipeToLocalStorage(this.formValues);
    let recipeId = this.localStorage.getRecipesItems().length - 1 ;
    console.log(recipeId);
    addRecipe.reset();
    this.successMsg = true;
    this.router.navigate(['recipe/'+recipeId])
    // this.httpService.getData(this.content)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     if(res.calories == 0) {
    //       console.log(res.calories);
    //       console.warn('Please Enter Valid Ingredients');
    //       this.errorMsg = true;
    //       return;
    //     }
    //     else
    //     {
    //       this.localStorage.addRecipeToLocalStorage(this.formValues);
    //       this.successMsg = true;
    //       console.info(' Calories ', res.calories);
    //       console.info(' Fat ', res.totalNutrients.FAT);
    //       console.info(' Cholesterol ', res.totalNutrients.CHOLE);
    //       console.info(' Sodium ', res.totalNutrients.NA);
    //       console.info(' Protien ', res.totalNutrients.PROCNT);
    //       console.info(' Vitamins ', res.totalNutrients.TOCPHA);
    //       console.info(' Calcium ', res.totalNutrients.CA);
    //       console.info(' Iron ', res.totalNutrients.FE);
    //       console.info(' Potassium ', res.totalNutrients.K);
    //       console.info(' Carb ', res.totalNutrients.CHOCDF);

    //     }
    //   },
    // err => {
    //   console.log('err ',err.msg)
    //   this.errorMsg = true;
    // },
    // ()=>{
    //   console.log('complete');
    //   addRecipe.reset();

    // }
    // )

    console.log(this.recipes);


  }

}
