import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipeadd',
  templateUrl: './recipeadd.page.html',
  styleUrls: ['./recipeadd.page.scss'],
})
export class RecipeaddPage implements OnInit {
  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
  }

}
