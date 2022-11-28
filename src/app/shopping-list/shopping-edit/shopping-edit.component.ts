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

  @ViewChild('f', {static: false}) slForm: NgForm;
  @Output() newIngredientItem = new EventEmitter<Ingredient>();
  private startedEditSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.startedEditSub = this.shoppingListService.startedEditing.subscribe({
      next: (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.startedEditSub.unsubscribe()
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.UpdateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.AddIngredient(newIngredient);
      this.editMode = false;
    }

    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }
}
