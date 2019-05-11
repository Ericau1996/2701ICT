import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { RmessageService } from './rmessage.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  constructor(private RmessageService: RmessageService) { }

  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the heroes
    this.RmessageService.add('RecipeService: fetched recipes');
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    // TODO: send the message _after_ fetching the hero
    this.RmessageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}