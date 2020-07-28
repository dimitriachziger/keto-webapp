import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';
import { Router, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  //recipe = 'Rezept'
  recipes: Recipe[];

  recipe: Recipe = {
    id: 1,
    name: 'Rezept',
    img: 'pizza.jpg',
    duration: 500,
    level: 1,
    nutrition: ["vegan"]
  };

  selectedRecipe: Recipe;


  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);

  }


}
