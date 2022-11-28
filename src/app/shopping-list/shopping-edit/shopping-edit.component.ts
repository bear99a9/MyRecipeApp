import { Component, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/models/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @Output() newIngredientItem = new EventEmitter<Ingredient>();
  private startedEditSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startedEditSub = this.shoppingListService.startedEditing.subscribe({
      next: (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    })
  }

  ngOnDestroy(): void {
    this.startedEditSub.unsubscribe()
  }
  addItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.AddIngredient(newIngredient);
  }
}
