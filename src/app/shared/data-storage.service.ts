import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http:Http,
        private recipeService:RecipeService,
        private authService:AuthService) { }

    storeRecipes() {
       return this.http.put("https://ng-recipebook-mandycodestoo.firebaseio.com/recipes.json?auth="+this.authService.getToken(),
                this.recipeService.getRecipes())
    }

    getRecipes() {
        this.http.get("https://ng-recipebook-mandycodestoo.firebaseio.com/recipes.json?auth="+this.authService.getToken())
            .map((response:Response)=>{
                const recipes:Recipe[] = response.json();
                recipes.forEach(recipe=>{
                    if (!recipe['ingredients']) {
                        recipe['ingredients']=[];
                    }
                });
                return recipes;
            })
            .subscribe((recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            });
    }

}