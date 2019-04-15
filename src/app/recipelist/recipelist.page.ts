import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.page.html',
  styleUrls: ['./recipelist.page.scss'],
})
export class RecipelistPage implements OnInit {
  //Get data from recip.ts and show to the list
  recipes = RECIPES;
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
