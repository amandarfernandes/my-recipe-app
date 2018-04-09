

import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients:Ingredient[]=[
        new Ingredient("bread",2), 
        new Ingredient("marmalade",1)
    ];   
    ingredientsChanged = new EventEmitter<Ingredient[]>();    
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient) {
        //console.log('Adding ingredient')
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]) {
        this.ingredients = [...this.ingredients,...ingredients];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}