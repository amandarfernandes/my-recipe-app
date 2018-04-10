import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
 // @Input() recipeDetail:Recipe;
    recipeDetail:Recipe;
    id:number;
    subscription:Subscription;
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params
    .subscribe((params:Params)=>{
       this.id = +params['id'];
       this.recipeDetail=this.recipeService.getRecipe(this.id)
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toShoppingList() {
    this.recipeService.addIngredients(this.recipeDetail.ingredients);
  }
}
