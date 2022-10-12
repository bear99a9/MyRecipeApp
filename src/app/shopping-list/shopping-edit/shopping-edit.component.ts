import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput', { static: false}) newAmountInput : ElementRef;
  @ViewChild('nameInput', { static: false}) newNameInput : ElementRef;

  @Output() newIngredientItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.newIngredientItem.emit(new Ingredient(this.newNameInput.nativeElement.value ,this.newAmountInput.nativeElement.value ))
  }
}
