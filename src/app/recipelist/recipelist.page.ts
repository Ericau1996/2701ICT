import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';
import { RecipeService } from '../Recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.page.html',
  styleUrls: ['./recipelist.page.scss'],
})
export class RecipelistPage implements OnInit {
  recipes : Recipe[];
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
}
