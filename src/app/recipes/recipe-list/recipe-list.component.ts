import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[   
    new Recipe('Toast','Well toasted bread with marmalade','https://source.unsplash.com/9RGPG_ksS3Q') ,
    new Recipe('Milkshake','A delicious milkshake to tickle your tastebuds','https://source.unsplash.com/VnsBx4onRxQ') 
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipeItem:Recipe){
    this.selectedRecipe.emit(recipeItem);
  }
}
