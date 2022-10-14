import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/models/ingredients.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.AddIngredients(ingredients);
  }
}
