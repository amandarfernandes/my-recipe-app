

import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    private ingredients:Ingredient[]=[
        new Ingredient("bread",2), 
        new Ingredient("marmalade",1)
    ];   
    
    ingredientsChanged = new Subject<Ingredient[]>();  
    ingredientEdit = new Subject<number>();  
    
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index) {
        return this.ingredients[index]
    }

    addIngredient(ingredient:Ingredient) {
        //console.log('Adding ingredient')
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number,ingredient:Ingredient) {
        //console.log('Updating ingredient')
        this.ingredients[index]= {...ingredient};
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number) {
        const newIngredients = this.ingredients.filter((ing:Ingredient,i:number)=>i!==index);
        this.ingredients = newIngredients;
        this.ingredientsChanged.next(this.ingredients.slice());
    }


    addIngredients(ingredients:Ingredient[]) {
        this.ingredients = [...this.ingredients,...ingredients];
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}