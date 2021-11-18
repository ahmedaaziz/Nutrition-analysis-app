import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition-data-table',
  templateUrl: './nutrition-data-table.component.html',
  styleUrls: ['./nutrition-data-table.component.scss']
})
export class NutritionDataTableComponent implements OnInit {
  @Input() recipeInfo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
