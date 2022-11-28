import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private ingredientsChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedSub = this.shoppingListService.ingredientsChanged.subscribe({
      next: (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    });
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSub.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}
