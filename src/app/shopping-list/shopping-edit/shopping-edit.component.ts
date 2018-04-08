import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name:ElementRef;
  @ViewChild('amount') amount:ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    //console.log(this.name.nativeElement.value);
     const ingredient = new Ingredient(this.name.nativeElement.value,
                                        this.amount.nativeElement.value);
      this.newIngredient.emit(ingredient);
  }
}
