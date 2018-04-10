import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  recipeDetail:Recipe;
  
  onSelectedRecipe(recipe:Recipe) {
    //console.log(recipe);
    this.recipeDetail = recipe;
    this.router.navigate([this.recipeDetail.name],{relativeTo:this.route});
  }

  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeSelected
        .subscribe((recipe:Recipe)=>{
          this.recipeDetail = recipe;
    });
  }

}
