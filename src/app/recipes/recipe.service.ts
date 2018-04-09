import { EventEmitter, Injectable } from '@angular/core';
import {Recipe}  from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes:Recipe[]=[   
        new Recipe('Toast',
        'Well toasted bread with marmalade',
        'https://source.unsplash.com/9RGPG_ksS3Q',
        [
            new Ingredient('bread',2),
            new Ingredient('marmalade',1)
        ]),
        new Recipe('Milkshake',
        'A delicious milkshake to tickle your tastebuds',
        'https://source.unsplash.com/VnsBx4onRxQ',
        [
            new Ingredient('milk',1),
            new Ingredient('banana',1),
            new Ingredient('cinammon',1),
            new Ingredient('sugar',1)
        ]) 
      ];

      recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService:ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredients(ingredients:Ingredient[]) { 
        this.slService.addIngredients(ingredients);
    }
}